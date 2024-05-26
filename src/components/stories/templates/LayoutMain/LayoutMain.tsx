import { useMediaQuery } from "react-responsive";
import { isMobile as isMobileUserAgent} from 'react-device-detect';

import styles from "./LayoutMain.module.scss";
import { useState, useEffect } from "react";

interface LayoutMainProps {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ desktop, mobile }) => {
  const [isMobile, setIsMobile] = useState<boolean>(isMobileUserAgent)
  
  const isMobileLayout = useMediaQuery({ maxWidth: 768 });

  useEffect(()=>{
    setIsMobile(isMobileLayout)
  }, [isMobileLayout])

  return (
    <main className={styles.LayoutMain}>{isMobile ? mobile : desktop}</main>
  );
};

export default LayoutMain;
