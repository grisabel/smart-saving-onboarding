import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorResult.module.scss";
import CompountInterestChart from "@/components/stories/organisms/CompountInterestChart/CompountInterestChart";


const DataCalculatorResult = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <CompountInterestChart/>
    </div>
  );
};

export default DataCalculatorResult;
