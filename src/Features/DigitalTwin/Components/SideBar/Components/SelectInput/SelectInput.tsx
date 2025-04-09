import styles from "./SelectInput.module.scss";
import { useTranslation } from "react-i18next";

const SelectInput = () => {
	const { t } = useTranslation();
	
	return (
		<label htmlFor='dashboard-select' className={styles["Dashboard-select"]}>
			<select
				id='dashboard-select'
				name='options'
				className={styles["custom-select"]}
			>
				<option value='1'>{t('sidebar.totalHealth', 'Total Health')}</option>
				<option value='2'>{t('sidebar.option2', 'Option 2')}</option>
				<option value='3'>{t('sidebar.option3', 'Option 3')}</option>
				<option value='4'>{t('sidebar.option4', 'Option 4')}</option>
			</select>
		</label>
	);
};

export default SelectInput;