import { DropdownProps, InputOption } from "./Dropdown.types";

import styles from "./Dropdown.module.scss";
import Icon from "../../Icon";
import { useCallback, useEffect, useRef, useState } from "react";

const defaultOptionFocus = (
  options: InputOption[],
  defaultValue?: InputOption["value"] | null
): number => {
  if (!defaultValue) return -1;

  let find = false;
  let resul = -1;
  for (let i = 0; i < options.length && !find; i++) {
    const option = options[i];
    if (option.value == defaultValue) {
      find = true;
      resul = i;
    }
  }

  return resul;
};

const defaultOptionLabel = (
  options: InputOption[],
  defaultValue?: InputOption["value"] | null
): InputOption["value"] => {
  if (!defaultValue) return "";

  let find = false;
  let resul = "";
  for (let i = 0; i < options.length && !find; i++) {
    const option = options[i];
    if (option.value == defaultValue) {
      find = true;
      resul = option.label;
    }
  }

  return resul;
};

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  placeholder,
  disabled,
  options,
  value: defaultValue,
  onChange,
  className,
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const [inputText, setInputText] = useState<InputOption["value"]>(
    defaultOptionLabel(options, defaultValue)
  );

  const [optionFocus, setOptionFocus] = useState<number>(
    defaultOptionFocus(options, defaultValue)
  );

  useEffect(() => {
    setInputText(defaultOptionLabel(options, defaultValue));
    setOptionFocus(defaultOptionFocus(options, defaultValue));
  }, [defaultValue]);

  const dropdownRef = useRef<HTMLInputElement | null>(null);

  const _handleKeyUpDropdownItem = () => {
    setOptionFocus((prevState) => {
      if (prevState <= 1) {
        return 0;
      }
      return prevState - 1;
    });
  };

  const _handleKeyDownDropdownItem = (optionsLength: number) => {
    setOptionFocus((prevState) => {
      if (prevState === optionsLength - 1) {
        return optionsLength - 1;
      }
      return prevState + 1;
    });
  };

  const handleKeyDropdown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.code === "ArrowDown") {
      _handleKeyDownDropdownItem(options.length);
    } else if (event.code === "ArrowUp") {
      _handleKeyUpDropdownItem();
    } else if (event.code === "Enter") {
      if (options && optionFocus !== -1) {
        onClickDropdownItem(options[optionFocus]);
        dropdownRef.current?.blur();
      }
    }
  };

  const onClickDropdownItem = (option: any) => {
    setInputText(option.label);
    dropdownRef.current?.blur();

    if (typeof onChange === "function") {
      onChange({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const onResetDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();

    setInputText("");
    setOptionFocus(-1);
    dropdownRef.current?.blur();

    if (typeof onChange === "function") {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className={`${styles.DropdownWp} ${
        openDropdown ? styles["DropdownWp--open"] : ""
      }`}
      onBlur={() => setOpenDropdown(false)}
      onFocusCapture={() => setOpenDropdown(true)}
      onKeyDown={handleKeyDropdown}
      tabIndex={0}
      ref={dropdownRef}
    >
      <div className={`${styles.inputWp} ${className}`}>
        <label className={styles.label}>{label}</label>
        <div className={styles.inputContainer}>
          {/* <!-- Its important that you keep list attribute empty to hide 
          the default dropdown icon and the browser's default datalist --> */}
          <input
            id={id}
            name={`list-${id}`}
            list=""
            className={styles.input}
            placeholder={placeholder}
            value={inputText}
            autoComplete="off"
            // onInput={handleFilterDropdown}
            disabled
            role="combobox"
          />
          <div
            className={`${styles.icons} ${
              disabled ? styles["icons--disabled"] : ""
            }`}
          >
            <Icon
              name={inputText && openDropdown ? "close-square" : ""}
              onClick={onResetDropdown}
            />
            <Icon name="chevron-down" />
          </div>
        </div>
      </div>
      {options.length > 0 && (
        <datalist id={`list-${id}`} className={styles.dropdown} role="listbox">
          {options.map((option, i) => {
            return (
              <option
                key={`option-${i}`}
                value={option.value}
                onClick={onClickDropdownItem.bind(this, option)}
                className={`${styles.option} ${
                  optionFocus === i ? styles["option--active"] : ""
                }`}
              >
                {option.label}
              </option>
            );
          })}
        </datalist>
      )}
    </div>
  );
};

export default Dropdown;
