import Heart from "@/assets/ConnectWatchWidget/Heart.svg?react";
import ConnectIcon from "@/assets/ConnectWatchWidget/ConnectIcon.svg?react";
import styles from "./ConnectWatchWidget.module.scss";
import { useTranslation } from 'react-i18next';

export const ConnectWatchWidget = () => {
	const { t } = useTranslation();

	return (
		<div className={styles["ConnectWatchWidget-container"]}>
			<div className={styles["ConnectWatchWidget-left"]}>
				<div className={styles["ConnectWatchWidget-heart-container"]}>
					<Heart />
				</div>
				<div className={styles["ConnectWatchWidget-title"]}>
					{t('connectWatchWidget.findHealthData')}
				</div>
			</div>
			<button className={styles["ConnectWatchWidget-button"]}>
				<div className={styles["ConnectWatchWidget-button-text"]}>
					{t('connectWatchWidget.connectToAppleHealth')}
				</div>
				<div className={styles["ConnectWatchWidget-button-icon-container"]}>
					<ConnectIcon />
				</div>
			</button>
		</div>
	);
};