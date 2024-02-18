import { useMediaQuery } from "react-responsive";

import styles from "./RetrievePasswordPage.module.scss";
import RetrievePasswordLayoutMobile from "./layouts/RetrievePasswordLayoutMobile";
import RetrievePasswordLayoutDesktop from "./layouts/RetrievePasswordLayoutDesktop";

const retrivePasswordPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <main className={styles.retrivePasswordPage}>
      {isMobile ? (
        <RetrievePasswordLayoutMobile />
      ) : (
        <RetrievePasswordLayoutDesktop />
      )}
    </main>
  );
};

export default retrivePasswordPage;
