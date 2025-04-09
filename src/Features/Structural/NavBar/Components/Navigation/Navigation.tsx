import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";


import DashboardIcon from "@assets/Navbar/Icons/Dashboard.svg?react";
import ReportsIcon from "@assets/Navbar/Icons/Reports.svg?react";
import GoalsIcon from "@assets/Navbar/Icons/Goals.svg?react";
import TestIcon from "@assets/Navbar/Icons/Test.svg?react";

interface NavigationProps {
	onClick?: (selected: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
	const { t } = useTranslation();
	const [selected, setSelected] = useState<string>("Dashboard");

	const handleClick = (buttonText: string) => {
		setSelected(buttonText);
		if (onClick) {
			onClick(buttonText);
		}
	};

	// Buttons array with correct icons
	const buttons = [
		{ text: "Dashboard", icon: <DashboardIcon />, translationKey: "dashboard" },
		{ text: "Goals", icon: <GoalsIcon />, translationKey: "goals" },
		{ text: "Reports", icon: <ReportsIcon />, translationKey: "reports" },
		{ text: "Tests", icon: <TestIcon />, translationKey: "tests" },
	];

	return (
		<div className={styles["navigation-container"]}>
			{buttons.map((button) => (
				<button
					key={button.text}
					className={`${selected === button.text ? styles["selected"] : ""}`}
					onClick={() => handleClick(button.text)}
				>
					<span className={styles.icon}>{button.icon}</span>
					{t(`navbar.${button.translationKey}`, button.text)}
				</button>
			))}
		</div>
	);
};

export default Navigation;