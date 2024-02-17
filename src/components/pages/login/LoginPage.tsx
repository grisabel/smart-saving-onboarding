import { useMediaQuery } from "react-responsive";

import styles from "./LoginPage.module.scss";
import LoginLayoutMobile from "./layouts/LoginLayoutMobile/LoginLayoutMobile";
import LoginLayoutDesktop from "./layouts/LoginLayoutDesktop/LoginLayoutDesktop";
import Icon from "@/components/Icon";

const LoginPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <main className={styles.loginPage}>
      <Icon name="danger" />
      {isMobile ? <LoginLayoutMobile /> : <LoginLayoutDesktop />}
    </main>
  );
};

export default LoginPage;
