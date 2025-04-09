import styles from "./SystemDetailWidget.module.scss";
import Report from "@assets/SystemDetailWidget/Report.svg?react";
import { systemDetailMockData } from "./helpers/systemDetailMockData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { useTranslation } from 'react-i18next';

interface SystemDetailWidgetProps {
	category: string;
}

export const SystemDetailWidget: React.FC<SystemDetailWidgetProps> = ({
	category,
}) => {
	const { t } = useTranslation();
	const [detail, setDetail] = useState({
		title: "",
		description: t('systemDetailWidget.noDetailsAvailable'),
	});
	const navigate = useNavigate();
	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory,
	);
	
	useEffect(() => {
		console.log(category);
		if (category !== "total") {
			setDetail(systemDetailMockData[0]);
		}
	}, [category]);

	const ViewReport = () => {
		navigate(`/dashboard/${selectedCategory}`);
	};
	
	return (
		<div
			className={`${styles["SystemDetailWidget-container"]} ${category === "total" && styles["SystemDetailWidget-container-hidden"]}`}
		>
			<div className={styles["SystemDetailWidget-head"]}>
				<h3 className={styles["SystemDetailWidget-title"]}>{detail.title}</h3>
				<div className={styles["SystemDetailWidget-report"]}>
					<button
						className={styles["SystemDetailWidget-report-text"]}
						onClick={ViewReport}
					>
						{t('systemDetailWidget.viewReport')}
						<Report />
					</button>
				</div>
			</div>
			<p className={styles["SystemDetailWidget-body"]}>{detail.description}</p>
		</div>
	);
};