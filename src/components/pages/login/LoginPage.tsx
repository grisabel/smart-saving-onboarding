import { useMediaQuery } from "react-responsive";

import styles from "./LoginPage.module.css";
import LoginLayoutMobile from "./components/LoginLayoutMobile";
import LoginLayoutDesktop from "./components/LoginLayoutDesktop";

const LoginPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className={styles.loginPage}>
      {isMobile ? <LoginLayoutMobile /> : <LoginLayoutDesktop />}
    </main>
  );
};

export default LoginPage;
