import { useState } from "react";
import { planMockData } from "./helpers/planMockData";
import styles from "./PlanWidget.module.scss";
import { Tabs } from "./Components/Tabs/Tabs";
import { PlanTable } from "./Components/PlanTable/PlanTable";
import { PlanAggregate } from "./Components/PlanAggregate/PlanAggregate";
import { useTranslation } from "react-i18next";

export const PlanWidget = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(t(`planWidget.sections.${planMockData[0].title}`, planMockData[0].title));
  const [transitioning, setTransitioning] = useState(false);

  const getActionPlanData = () => {
    return planMockData
      .filter((section) => section.title !== "Action Plan")
      .flatMap((section) =>
        section.data.map((item) => ({
          ...item,
          group: section.title,
        })),
      );
  };

  const enrichedPlanMockData = planMockData.map((section) =>
    section.title === "Action Plan"
      ? { ...section, data: getActionPlanData() }
      : section,
  );

  const activeSection = enrichedPlanMockData.find(
    (section) => t(`planWidget.sections.${section.title}`, section.title) === activeTab,
  );

  const handleTabChange = (newTab: string) => {
    setTransitioning(true);
    setActiveTab(newTab);
  };

  return (
    <div className={styles["PlanWidget-wrapper"]}>
      <Tabs
        sections={enrichedPlanMockData}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />
      <div className={styles["PlanWidget-content"]}>
        {activeTab === t('planWidget.sections.actionPlan', 'Action Plan') && activeSection ? (
          <PlanAggregate section={activeSection} setActiveTab={setActiveTab} />
        ) : (
          <>
            {activeSection && (
              <PlanTable
                section={activeSection}
                setActiveTab={setActiveTab}
                transitioning={transitioning}
                setTransitioning={setTransitioning}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};