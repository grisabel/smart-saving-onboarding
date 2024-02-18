import { InputBaseProps } from "./InputBase.types";

import styles from "./InputBase.module.scss";

const InputBase: React.FC<InputBaseProps> = ({
  id,
  label,
  placeholder,
  type,
  icon,
  value: defaultValue,
  onChange,
  inputRef,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === "function") {
      console.log({ event });
      onChange(event);
    }
  };

  return (
    <div className={`${styles.inputWp} ${className}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          id={id}
          className={styles.input}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue ?? ""}
          onInput={handleChange}
          ref={inputRef}
        />
        {icon && icon}
      </div>
    </div>
  );
};

export default InputBase;
