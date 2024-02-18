import { useMediaQuery } from "react-responsive";

import styles from "./RetrivePasswordEmailSentPage.module.scss";
import RetrievePasswordEmailSentDesktopLayoutDesktop from "./layouts/RetrievePasswordEmailSentDesktopLayoutDesktop";

const RetrivePasswordEmailSentPage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <main className={styles.retrivePasswordEmailSentPage}>
      {isMobile ? true : <RetrievePasswordEmailSentDesktopLayoutDesktop />}
    </main>
  );
};

export default RetrivePasswordEmailSentPage;
