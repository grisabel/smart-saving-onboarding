import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

const LoginPage = () => {
  return null;
};

export default LoginPage;
