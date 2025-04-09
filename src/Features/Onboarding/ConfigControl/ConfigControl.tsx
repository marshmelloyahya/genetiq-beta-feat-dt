import React from "react";
import styles from "./ConfigControl.module.scss";
import { ConfigControlItems } from "@/App/Consts";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ConfigControlProps {
 selectedItem: {
  title: string;
  url: string;
 };
}

export const ConfigControl: React.FC<ConfigControlProps> = ({
 selectedItem,
}) => {
 const { t } = useTranslation();
 const navigate = useNavigate();
 
 return (
  <div className={styles["config-control-bar"]}>
   <div className={styles["config-control-items"]}>
    {Object.keys(ConfigControlItems).map((itemKey: string) => (
     <button
      key={itemKey}
      className={`${styles["config-control-item"]} ${
       selectedItem.title === ConfigControlItems[itemKey as keyof typeof ConfigControlItems].title 
        ? styles["selected-config-control-item"] 
        : ""
      }`}
      onClick={() => {
       navigate(
        ConfigControlItems[itemKey as keyof typeof ConfigControlItems].url,
       );
      }}
     >
      {t(`configControl.${itemKey.toLowerCase()}`, 
        ConfigControlItems[itemKey as keyof typeof ConfigControlItems].title)}
     </button>
    ))}
   </div>
  </div>
 );
};