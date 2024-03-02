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
  options,
  value: defaultValue,
  onChange,
  className,
}) => {
  const [optionFocus, setOptionFocus] = useState<number>(
    defaultOptionFocus(options, defaultValue)
  );
  const [inputText, setInputText] = useState<InputOption["value"]>(
    defaultOptionLabel(options, defaultValue)
  );

  const [optionsFilter, setOptionsFilter] = useState<InputOption[]>(options);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const datalistRef = useRef<HTMLDataListElement | null>(null);
  const optionsRef = useRef<HTMLOptionElement[] | null>(null);

  const setDropdownRef = useCallback((node: HTMLDataListElement) => {
    datalistRef.current = node;
    optionsRef.current = (node?.children ||
      []) as unknown as HTMLOptionElement[];
  }, []);

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleOpenDropdown = () => {
    setOpenDropdown(true);
  };

  const handleCloseDropDown = () => {
    setOpenDropdown(false);
  };

  useEffect(() => {
    if (openDropdown) {
      return;
    }
    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = inputText;
    setOptionsFilter(options);
  }, [openDropdown]);

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
    if (!optionsRef.current || !inputRef.current) {
      return;
    }

    if (event.code === "ArrowDown") {
      _handleKeyDownDropdownItem(optionsRef.current.length);
    } else if (event.code === "ArrowUp") {
      _handleKeyUpDropdownItem();
    } else if (event.code === "Enter") {
      event.preventDefault();
      if (optionsRef.current && optionFocus !== -1) {
        optionsRef.current[optionFocus].click();
        inputRef.current.blur();
      }
    }
  };

  const handleFilterDropdown = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!optionsRef.current) {
      return;
    }

    const text = (event.target.value || "").toUpperCase();

    const _optionsFilter = options.filter((option) => {
      const optionText = (option.label || "").toUpperCase();
      if (optionText.indexOf(text) > -1) {
        return true;
      } else {
        return false;
      }
    });

    setOptionsFilter(_optionsFilter);
  };

  const onClickDropdownItem = (option: any) => {
    if (!inputRef.current) {
      return null;
    }

    setInputText(option.label);
    handleCloseDropDown();

    if (typeof onChange === "function") {
      onChange({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className={`${styles.DropdownWp} ${
        openDropdown ? styles["DropdownWp--open"] : ""
      }`}
      onFocus={handleOpenDropdown}
      onBlur={handleCloseDropDown}
      tabIndex={0}
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
            defaultValue={defaultOptionLabel(options, defaultValue)}
            autoComplete="off"
            ref={inputRef}
            onInput={handleFilterDropdown}
            onKeyDown={handleKeyDropdown}
          />
          {inputText && (
            <Icon name="close-square" onClick={() => setInputText("")} />
          )}
        </div>
      </div>
      {optionsFilter.length > 0 && (
        <datalist
          id={`list-${id}`}
          className={styles.dropdown}
          ref={setDropdownRef}
        >
          {optionsFilter.map((option, i) => {
            return (
              <option
                key={`option-${i}`}
                value={option.value}
                onClick={onClickDropdownItem.bind(this, option)}
                className={`${optionFocus === i ? styles.active : ""}`}
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
