import { DropdownProps } from "./Dropdown.types";

import styles from "./Dropdown.module.scss";
import Icon from "../../Icon";
import { useCallback, useEffect, useRef, useState } from "react";

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  placeholder,
  icon,
  value: defaultValue,
  onChange,
  className,
}) => {
  const options = [
    { value: "a", label: "Internet Explorer" },
    { value: "b", label: "Explorer" },
    { value: "c", label: "Internet" },
  ];

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [optionFocus, setOptionFocus] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const datalistRef = useRef<HTMLDataListElement | null>(null);
  const optionsRef = useRef<HTMLOptionElement[] | null>(null);

  const setDropdownRef = useCallback((node: HTMLDataListElement) => {
    datalistRef.current = node;
    optionsRef.current = (node?.children ||
      []) as unknown as HTMLOptionElement[];
  }, []);

  const handleOpenDropdown = () => {
    setOpenDropdown(true);
  };

  const handleCloseDropDown = () => {
    setOpenDropdown(false);
  };

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
      if (optionsRef.current) {
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

    for (let option of optionsRef.current) {
      const optionText = (option.label || "").toUpperCase();
      if (optionText.indexOf(text) > -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    }
  };

  const onClickDropdownItem = (option: any) => {
    if (!inputRef.current) {
      return null;
    }

    inputRef.current.value = option.label;
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
      contentEditable
      onFocus={handleOpenDropdown}
      onBlur={handleCloseDropDown}
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
            autoComplete="off"
            ref={inputRef}
            onInput={handleFilterDropdown}
            onKeyDown={handleKeyDropdown}
          />
          <Icon name="calendar" />
        </div>
      </div>
      <datalist
        id={`list-${id}`}
        className={styles.dropdown}
        defaultValue="a"
        ref={setDropdownRef}
      >
        {options.map((option, i) => {
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
    </div>
  );
};

export default Dropdown;
