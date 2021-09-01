import Register from '@/features/register';

export default function RegisterPage({ siteTitle }) {
  return (
    <div className='container mx-auto'>
      <Register siteTitle={siteTitle} />
    </div>
  );
}

export function getServerSideProps() {
  const siteTitle = 'My site';
  return {
    props: {
      siteTitle,
    },
  };
}
