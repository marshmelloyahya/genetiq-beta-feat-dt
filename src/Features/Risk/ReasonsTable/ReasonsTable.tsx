import { useState } from "react";
import styles from "./ReasonsTable.module.scss";
import { useTranslation } from "react-i18next";

interface Reason {
  id: string;
  icon?: string;
  title: string;
  description: string;
  factors: string[];
}

interface ReasonsTableProps {
  reasons: Reason[];
  maxVisible?: number;
}

export const ReasonsTable = ({
  reasons,
  maxVisible = 3,
}: ReasonsTableProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleReasons = isExpanded ? reasons : reasons.slice(0, maxVisible);
  const hasMore = reasons.length > maxVisible;

  return (
    <div className={styles["reasons-table"]}>
      {visibleReasons.map((reason) => (
        <div key={reason.id} className={styles["reason-row"]}>
          {reason.icon && (
            <div className={styles["reason-icon"]}>
              <img src={reason.icon} alt={t(`reasons.${reason.id}.iconAlt`, `${reason.title} icon`)} />
            </div>
          )}
          <div className={styles["reason-content"]}>
            <div className={styles["reason-title"]}>
              {t(`reasons.${reason.id}.title`, reason.title)}
            </div>
            <div className={styles["reason-description"]}>
              {t(`reasons.${reason.id}.description`, reason.description)}
            </div>
            <div className={styles["reason-factors"]}>
              {reason.factors.map((factor, index) => (
                <div key={index} className={styles["reason-factor"]}>
                  {t(`reasons.${reason.id}.factors.${index}`, factor)}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {hasMore && (
        <div className={styles["show-more-container"]}>
          <button
            className={styles["show-more-button"]}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded 
              ? t('common.viewLess', 'Show less') 
              : t('common.showMore', 'Show more', { count: reasons.length - maxVisible })}
          </button>
        </div>
      )}
    </div>
  );
};