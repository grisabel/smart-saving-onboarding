import { InputBaseProps } from "./InputBase.types";

import styles from "./InputBase.module.scss";

const InputBase: React.FC<InputBaseProps> = ({
  label,
  placeholder,
  type,
  icon,
  className,
}) => {
  return (
    <div className={`${styles.inputWp} ${className}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input className={styles.input} placeholder={placeholder} type={type} />
        {icon && icon}
      </div>
    </div>
  );
};

export default InputBase;
