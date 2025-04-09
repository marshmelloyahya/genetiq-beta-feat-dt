import styles from "./AgeWidget.module.scss";
import { AgeMetrics } from "./Components/AgeMetrics/AgeMetrics";
import { AgeSlider } from "./Components/AgeSlider/AgeSlider";
import { useTranslation } from 'react-i18next';

export const AgeWidget = () => {
	const { t } = useTranslation();
	const ageData = { biologicalAge: 47, chronoAge: 54 };

	return (
		<div className={styles["AgeWidget-container"]}>
			<AgeMetrics ageData={ageData} />
			<AgeSlider ageData={ageData} />
		</div>
	);
};