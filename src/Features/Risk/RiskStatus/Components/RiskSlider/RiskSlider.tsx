import styles from "./RiskSlider.module.scss";
import Thumb from "@assets/RiskWidget/Thumb.svg?react";
import Circle from "@assets/AgeWidget/Circle.svg?react";
import React from "react";
import { useTranslation } from "react-i18next";

interface RiskSliderProps {
  riskPercentage: number;
}

export const RiskSlider: React.FC<RiskSliderProps> = ({ riskPercentage }) => {
  const { t } = useTranslation();
  const axisLabels = ["low", "intermediate", "high"];

  return (
    <div className={styles["RiskSlider-container"]}>
      <div className={styles["RiskSlider-bar-wrapper"]}>
        <div className={styles["RiskSlider-bar"]}>
          <Circle className={styles["RiskSlider-circle-start"]} />

          <div className={styles["RiskSlider-horizontal-line"]}></div>
          <Circle className={styles["RiskSlider-circle-end"]} />
          <Thumb
            className={styles["RiskSlider-thumb"]}
            style={
              {
                left: `${riskPercentage}%`,
              } as React.CSSProperties
            }
          />
          <div className={styles["RiskSlider-bar-item"]}></div>
        </div>
      </div>
      <div className={styles["RiskSlider-axis"]}>
        {axisLabels.map((label) => (
          <div key={label} className={`${styles["RiskSlider-axis-label"]}`}>
            {t(`riskSlider.${label}`)}
          </div>
        ))}
      </div>
    </div>
  );
};