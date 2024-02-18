import { LayoutMobileProps } from "./LayoutMobile.types";

import styles from "./LayoutMobile.module.scss";
import Logo from "@/components/stories/atoms/Logo";

const LayoutMobile: React.FC<LayoutMobileProps> = ({ children }) => {
  return (
    <div className={styles.layoutMobileWp}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default LayoutMobile;
