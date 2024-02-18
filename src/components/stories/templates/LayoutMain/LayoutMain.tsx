import { useMediaQuery } from "react-responsive";

import styles from "./LayoutMain.module.scss";

interface LayoutMainProps {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ desktop, mobile }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <main className={styles.LayoutMain}>{isMobile ? mobile : desktop}</main>
  );
};

export default LayoutMain;
