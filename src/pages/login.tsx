import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

const Login = () => {
  return null;
};

export default Login;
