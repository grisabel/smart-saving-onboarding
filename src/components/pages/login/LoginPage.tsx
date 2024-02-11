import { useMediaQuery } from "react-responsive";

import styles from "./LoginPage.module.scss";
import LoginLayoutMobile from "./layouts/LoginLayoutMobile/LoginLayoutMobile";
import LoginLayoutDesktop from "./layouts/LoginLayoutDesktop/LoginLayoutDesktop";

const LoginPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className={styles.loginPage}>
      {isMobile ? <LoginLayoutMobile /> : <LoginLayoutDesktop />}
    </main>
  );
};

export default LoginPage;
