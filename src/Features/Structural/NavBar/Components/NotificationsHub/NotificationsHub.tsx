import React from "react";
import BellIcon from "@assets/Navbar/Icons/notification.svg?react";
import styles from "./NotificationHub.module.scss";
import { useTranslation } from "react-i18next";

interface NotificationHubProps {
	IsBadge: boolean;
	disabled?: boolean;
}

const NotificationHub: React.FC<NotificationHubProps> = ({
	IsBadge = false,
	disabled = false,
}) => {
	const { t } = useTranslation();
	
	return (
		<button
			className={styles["notification-button"]}
			onClick={() => console.log("open notification")}
			disabled={disabled}
			aria-label={t('navbar.notifications', 'Notifications')}
		>
			{IsBadge ? <div className={styles["badge"]} /> : null}
			<BellIcon />
		</button>
	);
};

export default NotificationHub;