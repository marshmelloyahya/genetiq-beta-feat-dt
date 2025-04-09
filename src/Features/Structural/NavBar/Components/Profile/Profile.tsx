import React from "react";
import BellIcon from "@assets/Navbar/Icons/profile.svg?react";
import styles from "./Profile.module.scss";
import { useTranslation } from "react-i18next";

interface ProfileProps {
	disabled?: boolean;
}

const Profile: React.FC<ProfileProps> = ({
	disabled = false,
}) => {
	const { t } = useTranslation();
	
	return (
		<button
			className={styles["notification-button"]}
			onClick={() => console.log("open profile")}
			disabled={disabled}
			aria-label={t('navbar.profile', 'Profile')}
		>
			<BellIcon />
		</button>
	);
};

export default Profile;