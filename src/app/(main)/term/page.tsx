import { siteConfig } from '@/constant/config';

const Policy = () => {
  return (
    <div className='container mx-auto py-10'>
      <h1>CHÍNH SÁCH BẢO MẬT</h1>
      <hr className='my-6' />
      <div dangerouslySetInnerHTML={{ __html: siteConfig.policy }} />
    </div>
  );
};

export default Policy;
