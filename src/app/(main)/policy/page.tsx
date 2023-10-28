import { siteConfig } from '@/constant/config';

const Term = () => {
  return (
    <div className='container mx-auto py-10'>
      <h1>Chính sách bảo mật</h1>
      <hr className='my-6' />
      <div dangerouslySetInnerHTML={{ __html: siteConfig.policy }} />
    </div>
  );
};

export default Term;
