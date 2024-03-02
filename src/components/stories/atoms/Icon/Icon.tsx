import { useEffect, useRef, useState } from "react";
import { SmartSavingsIconName } from "./SmartSavingsIcon";

import styles from "./Icon.module.scss";

function svgElementFromString(svgContent: string): SVGElement {
  const div = document.createElement("DIV");
  div.innerHTML = svgContent;
  return (
    div.querySelector("svg") ||
    document.createElementNS("http://www.w3.org/2000/svg", "path")
  );
}

interface IconProps {
  name: SmartSavingsIconName;
  color?: "success" | "error";
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, color, onClick }) => {
  const [_, rerender] = useState<number>(0);
  const svgElRef = useRef<SVGElement | null>();

  const spanElRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    import(`./SmartSavingsIcon/build/smartsaving-${name}.icon`)
      .then((module) => {
        const { data } = Object.values(module)[0] as {
          name: string;
          data: string;
        };
        if (data) {
          if (svgElRef.current && spanElRef.current) {
            spanElRef.current.removeChild(svgElRef.current);
          }
          svgElRef.current = svgElementFromString(data as unknown as string);
          rerender((prev) => prev + 1);
        }
      })
      .catch((error) =>
        console.log(
          `data: we could not find the Icon with the name ${name}, did you add it to assets folder?`
        )
      );
  }, [name]);

  if (spanElRef.current) {
    if (svgElRef.current && spanElRef.current) {
      spanElRef.current.appendChild(svgElRef.current);
    }
  }

  return (
    <span
      ref={spanElRef}
      className={`${styles.IconWp} ${color ? styles[`IconWp--${color}`] : ""}`}
      onClick={onClick}
    />
  );
};

export default Icon;
