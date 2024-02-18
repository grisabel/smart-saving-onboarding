import { InputBaseProps } from "./InputBase.types";

import styles from "./InputBase.module.scss";

const InputBase: React.FC<InputBaseProps> = ({
  label,
  placeholder,
  type,
  icon,
  value: defaultValue,
  onChange,
  formatValue,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formatedVal = formatValue ? formatValue(value) : value;

    if (typeof onChange === "function") {
      event.target.value = formatedVal;
      event.currentTarget.value = formatedVal;

      onChange(event);
    }
  };

  return (
    <div className={`${styles.inputWp} ${className}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue ?? ""}
          onChange={handleChange}
        />
        {icon && icon}
      </div>
    </div>
  );
};

export default InputBase;
