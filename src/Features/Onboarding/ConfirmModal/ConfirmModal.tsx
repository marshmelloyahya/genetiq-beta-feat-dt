import styles from "./ConfirmModal.module.scss";
import FrameIcon from "@assets/General/Frame.svg?react";
import ArrowRightIcon from "@assets/General/ArrowRight.svg?react";
import CloseIcon from "@assets/General/Close.svg?react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface ConfirmModalProps {
 onClose: () => void;
 onConfirm: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
 onClose,
 onConfirm,
}) => {
 const { t } = useTranslation();
 const [checked, setChecked] = useState(false);
 
 return (
  <div className={styles["process-modal-container"]}>
   <div className={styles["modal-body"]}>
    <div className={styles["modal-header"]}>
     <div className={styles["background-image"]} />
     <FrameIcon style={{ zIndex: 10 }} />
    </div>
    <div className={styles["modal-content"]}>
     <div className={styles["modal-title"]}>
      {t('confirmModal.readyToProcess')}{" "}
      <span className={styles["modal-title-emphasize"]}>
       {t('confirmModal.generateTwin')}
      </span>
     </div>
     <div className={styles["modal-description"]}>
      {t('confirmModal.processDescription')}
     </div>
    </div>
    <div className={styles["modal-policy"]}>
     <input
      type="checkbox"
      className={styles["modal-policy-checkbox"]}
      onClick={() => setChecked(!checked)}
     />
     <div>
      {t('confirmModal.agreeToTerms')}
     </div>
    </div>
    <div className={styles["modal-footer"]}>
     <button className={styles["cancel"]} onClick={onClose}>
      {t('common.cancel')} <CloseIcon />
     </button>
     <button
      className={`${styles["confirm"]} ${checked === false ? styles["confirm-disabled"] : ""}`}
      onClick={onConfirm}
     >
      {t('common.confirm')} <ArrowRightIcon />
     </button>
    </div>
   </div>
  </div>
 );
};