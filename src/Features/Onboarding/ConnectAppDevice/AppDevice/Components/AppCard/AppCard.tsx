import React, { useState } from "react";
import styles from "./AppCard.module.scss";
import { FuselabIcon } from "@/assets/Icons/Fuselab";
import { useTranslation } from "react-i18next";

interface AppCardProps {
 img: string;
 title: string;
 description: string;
}

export const AppCard: React.FC<AppCardProps> = ({
 img,
 title,
 description,
}) => {
 const { t } = useTranslation();
 const [isHovered, setIsHovered] = useState<boolean>(false);
 
 return (
  <div
   className={styles["app-card-container"]}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <div className={styles["header-wrapper"]}>
    <div className={styles["image-wrapper"]}>
     <img src={img} alt={t('onboarding.appLogo', '{{app}} logo', {app: title})} />
    </div>
    {isHovered && (
     <button className={styles["connect-btn"]}>
      {t('onboarding.comingSoon', 'Coming soon')}
     </button>
    )}
   </div>
   <div className={styles["info"]}>
    <div className={styles["title"]}>{t(`apps.${title}`, title)}</div>
    <div className={styles["description"]}>{t(`apps.${title}Description`, description)}</div>
    {isHovered && (
     <div className={styles["favorite"]}>
      <FuselabIcon fill="rgba(0, 65, 196, 1)" />
     </div>
    )}
   </div>
  </div>
 );
};