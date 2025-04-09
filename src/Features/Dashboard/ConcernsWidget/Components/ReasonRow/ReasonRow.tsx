import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ReasonRow.module.scss';
import { Reason } from '../../helpers/detailedSystemConcerns';

interface ReasonRowProps {
  reason: Reason;
}

export const ReasonRow: FC<ReasonRowProps> = ({ reason }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getTranslatedStatus = (status: string, statusText: string) => {
    return t(`status.${status.toLowerCase()}`, statusText);
  };

  
  const formatDate = (dateString: string) => {
 
   
    return dateString;
  };

  return (
    <div
      className={`${styles["ReasonRow-container"]} ${isOpen ? styles["ReasonRow-container-open"] : ""}`}
      onClick={toggleOpen}
    >
      <div className={styles["ReasonRow-row"]}>
        <div className={styles["ReasonRow-title"]}>
          {t(`reasons.${reason.title}`, reason.title)}
        </div>

        <div className={styles["ReasonRow-test"]}>
          <span className={styles["ReasonRow-test-name"]}>
            {t(`tests.${reason.test}`, reason.test)}
          </span>
        </div>

        {reason.level.type === "progress" ? (
          <div className={styles["ReasonRow-level"]}>
            <div
              className={styles["ReasonRow-thumb"]}
              style={{ "--level": `${reason.level.src}%` } as React.CSSProperties}
              aria-label={t('concernsWidget.levelIndicator', 'Level indicator')}
            >
              <div className={styles["ReasonRow-thumb-line"]}></div>
            </div>
          </div>
        ) : (
          <div className={styles["ReasonRow-image"]}>
            <img 
              src={reason.level.src} 
              alt={t('common.levelAlt')} 
            />
          </div>
        )}

        <div className={styles["ReasonRow-value"]}>
          <span className={styles["ReasonRow-value-number"]}>{reason.value}</span>
          <span className={styles["ReasonRow-value-unit"]}>
            {t(`units.${reason.unit}`, reason.unit)}
          </span>
        </div>

        <div className={styles["ReasonRow-status-wrapper"]}>
          <div className={`${styles["ReasonRow-status"]} ${styles[`ReasonRow-status-${reason.status.toLowerCase()}`]}`}>
            {getTranslatedStatus(reason.status, reason.statusText)}
          </div>
        </div>

        <div className={styles["ReasonRow-date"]}>
          {formatDate(reason.date)}
        </div>

        <div className={styles["ReasonRow-chevron-container"]}>
          <div 
            className={`${styles["ReasonRow-chevron"]} ${isOpen ? styles["rotate-chevron"] : ""}`}
            aria-label={isOpen ? t('common.collapse', 'Collapse') : t('common.expand', 'Expand')}
          >
            ⌄
          </div>
        </div>
      </div>

      <div className={`${styles["ReasonRow-description"]} ${isOpen ? styles["ReasonRow-description-open"] : ""}`}>
        {t(`descriptions.${reason.title}`, reason.description)}
      </div>
    </div>
  );
};