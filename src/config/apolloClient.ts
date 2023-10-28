import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { getMainDefinition } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import nookies from 'nookies';
import { useMemo } from 'react';

import useAuthStore from '@/store/auth';

import { TOKEN_KEY } from '@/constant/config';
import { apiUrl } from '@/constant/env';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const ssrMode = typeof window === 'undefined';
const getToken = () => nookies.get()?.[TOKEN_KEY];
const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger = (message?: any, ...options: any) => {
  if (isProd) return;
  // eslint-disable-next-line no-console
  console.log(message, ...options);
};

const logoutIfLogged = () => {
  const store = useAuthStore.getState();
  if (store) store.reset();
};

function createApolloClient() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {},
    },
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const retryLink = new RetryLink({
    attempts: {
      max: 2,
      retryIf: (error, _operation) => !!error,
    },
    delay: {
      initial: 500,
      max: Infinity,
      jitter: true,
    },
  });

  function createMainLink() {
    const httpLink = new HttpLink({
      uri: `${apiUrl}/graphql`,
      credentials: 'same-origin',
    });

    if (ssrMode) return httpLink;

    const mainLink = split(
      // split based on operation type
      ({ query }) => {
        const { kind } = getMainDefinition(query);
        return kind === 'OperationDefinition';
      },
      // wsLink,
      httpLink
    );

    return mainLink;
  }

  const loggerLink = new ApolloLink((operation, forward) =>
    forward(operation).map((result) => {
      logger(
        `%c [GraphQL Logger] received result from ${operation.operationName}`,
        'color: gray'
      );
      logger(result?.data || result);

      return result;
    })
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        logger(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) logger(`[Network error]: ${networkError}`);
  });

  const links = ssrMode
    ? [authLink, errorLink, createMainLink()]
    : [authLink, loggerLink, errorLink, retryLink, createMainLink()];

  return new ApolloClient({ link: from(links), cache, ssrMode });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });
    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState?: any) {
  const cache = useMemo(() => initializeApollo(initialState), [initialState]);
  return cache;
}
