import { useState } from "react";
import styles from "./FilterBar.module.scss";
import PlusIcon from "@assets/General/Plus.svg?react";
import { useTranslation } from "react-i18next";

export const FilterBar = () => {
 const { t } = useTranslation();
 const [selectedFilter, setSelectedFilter] = useState<string>("All");
 
 const filterItems = [
  "All",
  "Glucose Monitors",
  "Wearables",
  "Smart Scales",
  "Blood Pressure Monitors",
  "Sleep Trackers",
 ];
 
 return (
  <div className={styles["filter-bar-container"]}>
   {filterItems.map((item, index) => (
    <div
     key={index}
     className={`${styles["filter-item"]} ${
      item === selectedFilter ? styles["selected-filter-item"] : ""
     }`}
     onClick={() => setSelectedFilter(item)}
    >
     {item === "All" ? (
      <span
       style={{
        padding: "0px 8px",
        display: "flex",
        alignItems: "center",
       }}
      >
       <PlusIcon style={{ marginRight: "4px" }} /> {t('filters.all', 'All')}
      </span>
     ) : (
      t(`filters.${item.toLowerCase().replace(/\s+/g, '')}`, item)
     )}
    </div>
   ))}
  </div>
 );
};