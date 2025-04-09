import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.scss";
import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import LeftIcon from "@assets/General/Left.svg?react";
import { paths } from "@/App/Routes/Paths";
import { useTranslation } from "react-i18next";

interface NavigationBarProps {
 disabled?: boolean;
 done?: boolean;
 setIsOpenedConfirmModal: (open: boolean) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
 disabled,
 done,
 setIsOpenedConfirmModal,
}) => {
 const { t } = useTranslation();
 const navigate = useNavigate();
 const location = useLocation();
 
 return (
  <div className={styles["navigation-bar-container"]}>
   <button
    className={styles["back"]}
    onClick={() => {
     navigate(paths.config.root);
    }}
   >
    <LeftIcon /> {t('navigation.back', 'Back')}
   </button>
   <button
    disabled={disabled}
    className={`${styles["submit"]} ${disabled ? styles["disabled-submit"] : ""}`}
    onClick={() => {
     if (location.pathname === paths.config.connectApp) {
      navigate(paths.config.importOrUpload);
     }
     if (!done) {
      setIsOpenedConfirmModal(true);
     } else {
      navigate(paths.dashboard.root);
     }
    }}
   >
    {done 
     ? t('navigation.proceedToDigitalTwin', 'Proceed to Digital twin') 
     : t('navigation.submitMyHealthData', 'Submit My Health Data')}{" "}
    <ArrowRightIcon />
   </button>
  </div>
 );
};