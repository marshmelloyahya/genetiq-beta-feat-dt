import styles from "./AgeMetrics.module.scss";
import Shape from "@assets/RiskWidget/Shape.svg?react";
import Arrows from "@assets/AgeWidget/ConvergeArrowsIcon.svg?react";
import Heart from "@assets/ConcernsWidget/Heart.svg?react";
import Calendar from "@assets/PlanWidget/Calendar.svg?react";
import { useTranslation } from "react-i18next";

interface AgeMetricsProps {
	ageData: {
		biologicalAge: number;
		chronoAge: number;
		ageLastWeek: number;
	};
}

export const AgeMetrics: React.FC<AgeMetricsProps> = ({ ageData }) => {
	const { t } = useTranslation();
	
	return (
		<div className={styles["AgeMetrics-age"]}>
			<div className={styles["AgeMetrics-shape-container"]}>
				<Shape className={styles["AgeMetrics-shape"]} />
				<div className={styles["AgeMetrics-content"]}>
					<div className={styles["AgeMetrics-content-title"]}>
						<Heart />
						{t('ageWidget.biologicalAge')}
					</div>
					<div className={styles["AgeMetrics-content-ages"]}>
						<div
							className={`${styles["AgeMetrics-content-value"]} ${styles["AgeMetrics-border-pink"]}`}
						>
							{ageData.biologicalAge}
							<span className={styles["AgeMetrics-content-units"]}>{t('ageWidget.years')}</span>
						</div>
						<div
							className={`${styles["AgeMetrics-content-value"]} ${styles["AgeMetrics-border-green"]}`}
						>
							{ageData.ageLastWeek}
							<span className={styles["AgeMetrics-content-units"]}>{t('ageWidget.years')}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles["AgeMetrics-icon-container"]}>
				<Arrows />
			</div>
			<div className={styles["AgeMetrics-shape-container"]}>
				<Shape className={styles["AgeMetrics-shape-rotated"]} />
				<div className={styles["AgeMetrics-content-rotated"]}>
					<div className={styles["AgeMetrics-content-title"]}>
						<Calendar />
						{t('ageWidget.chronologicalAge')}
					</div>
					<div
						className={`${styles["AgeMetrics-content-value"]} ${styles["AgeMetrics-border-blue"]}`}
					>
						{ageData.chronoAge}
						<span className={styles["AgeMetrics-content-units"]}>{t('ageWidget.years')}</span>
					</div>
				</div>
			</div>
		</div>
	);
};