
import { useState, useEffect } from "react";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./Dashboard.module.scss";
import { TrackerWidget } from "@/Features/Dashboard/TrackerWidget/TrackerWidget";
import { AgeWidget } from "@/Features/Dashboard/AgeWidget/AgeWidget";
import MainScene from "@/Features/DigitalTwin/Components/Three/Scene/MainScene";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import CtaModal from "@/Features/Dashboard/CtaModal/CtaModal";
import { ConcernsWidget } from "@/Features/Dashboard/ConcernsWidget/ConcernsWidget";
import { SystemDetailWidget } from "@/Features/Dashboard/SystemDetailWidget/SystemDetailWidget";
import { useSelector } from "react-redux";
import LanguageSwitcher from "@/Features/Structural/LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "@/Features/Structural/ThemeSwitcher/ThemeSwitcher";

import { RootState } from "@/App/Redux/store";

const Dashboard = () => {
	const [isNotFirstAnimation, setIsNotFirstAnimation] = useState(false);
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);
	const [category, setCategory] = useState(selectedCategory || "total");

	useEffect(() => {
		if (selectedCategory !== "total") {
			setIsNotFirstAnimation(true);
		}
	}, [selectedCategory]);

	const handleAnimationStart = () => {
		const timeout = setTimeout(() => {
			setCategory(selectedCategory || "total");
		}, 800);
		return () => clearTimeout(timeout);
	};

	return (
		<div className={styles["Dashboard-layout"]}>
			<NavBar />

			<div className={styles["Dashboard-select"]}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>

			<CameraProvider>
				<div className={styles["Dashboard-content"]}>
					<div className={styles["Dashboard-dt-container"]}>
						<div className={styles["Dashboard-model"]}>
							<MainScene selectedCategory={selectedCategory || "total"} />
						</div>
					</div>
					<div
						key={selectedCategory}
						className={`${styles["Dashboard-stats"]} ${
							isNotFirstAnimation
								? styles["loopAnimation"]
								: styles["firstAnimation"]
						}`}
						onAnimationStart={handleAnimationStart}
					>
						<TrackerWidget />
						<SystemDetailWidget category={category} />
						<AgeWidget />
						<ConcernsWidget category={category || "total"} />
					</div>
				</div>
			</CameraProvider>
			<CtaModal />
		</div>
	);
};

export default Dashboard;