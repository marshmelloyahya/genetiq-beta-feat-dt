import React from "react";
import { RiskSlider } from "./Components/RiskSlider/RiskSlider";
import styles from "./RiskStatus.module.scss";
import { useTranslation } from "react-i18next";

interface RiskStatusProps {
  status: string;
}

export const RiskStatus: React.FC<RiskStatusProps> = ({ status }) => {
  const { t } = useTranslation();
  const highLevel = status === "High" ? 80 : status === "Medium" ? 50 : 25;
  
  return (
    <div className={styles["RiskStatus-wrapper"]}>
      <div className={styles["text"]}>
        {t('riskStatus.concern', 'You have a')} <span>{t(`status.${status.toLowerCase()}`)}</span> {t('riskStatus.developingCondition', 'concern of developing Atrial Fibrillation')}
      </div>
      <RiskSlider riskPercentage={highLevel} />
    </div>
  );
};