'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode, useEffect } from 'react';

import useAuthStore from '@/store/auth';

import { useApollo } from '@/config/apolloClient';

export default function RootProvider({ children }: { children: ReactNode }) {
  const apolloClient = useApollo();

  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
