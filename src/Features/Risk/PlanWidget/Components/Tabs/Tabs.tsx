import styles from "./Tabs.module.scss";
import Slope from "@assets/PlanWidget/Slope.svg?react";
import { useTranslation } from "react-i18next";

type Section = {
  title: string;
};

type TabsProps = {
  sections: Section[];
  activeTab: string;
  setActiveTab: (title: string) => void;
};

export const Tabs = ({ sections, activeTab, setActiveTab }: TabsProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={styles["Tabs-container"]}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles["Tabs-tab-container"]} ${
            activeTab === t(`planWidget.sections.${section.title}`, section.title) ? styles["active"] : ""
          }`}
          onClick={() => setActiveTab(t(`planWidget.sections.${section.title}`, section.title))}
        >
          <div className={styles["Tabs-slope-container"]}>
            <Slope className={styles["Tabs-slope"]} />
          </div>
          <div className={styles["Tabs-tab"]}>
            {t(`planWidget.sections.${section.title}`, section.title)}
          </div>
        </div>
      ))}
    </div>
  );
};