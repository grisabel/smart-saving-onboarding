import { LayoutMobileProps } from "./LayoutMobile.types";

import styles from "./LayoutMobile.module.scss";
import Logo from "@/components/stories/atoms/Logo";
import { useRouter } from "next/router";

const LayoutMobile: React.FC<LayoutMobileProps> = ({ children }) => {
  const router = useRouter();

  const goLogin = () => {
    router.push("/");
  };

  return (
    <div className={styles.layoutMobileWp}>
      <div className={styles.logoContainer}>
        <Logo onClick={goLogin} />
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
};

export default LayoutMobile;
