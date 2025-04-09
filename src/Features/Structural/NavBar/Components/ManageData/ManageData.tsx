import styles from "./ManageData.module.scss";
import { useTranslation } from "react-i18next";

import PlusIcon from "@assets/Dahsboard/Plus.svg?react";

const ManageData = () => {
	const { t } = useTranslation();
	
	return (
		<div className={styles["ManageData"]}>
			<button className={styles["icon-button"]}>
				<PlusIcon />
			</button>
			<p className={styles["p"]}>{t('navbar.manageData', 'Manage data')}</p>
		</div>
	);
};

export default ManageData;