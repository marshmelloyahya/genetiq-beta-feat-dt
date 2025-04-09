import { paths } from "@/App/Routes/Paths";
import styles from "./RiskHeader.module.scss";
import Grid from "@assets/General/Grid.svg?react";
import Cardio from "@assets/RiskHeader/CardioLight.svg?react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { RiskChart } from "../RiskChart/RiskChart";
import { useTranslation } from "react-i18next";

interface RiskHeaderProps {
	title: string;
	descriptions?: string[];
}

const RiskHeader: React.FC<RiskHeaderProps> = ({ title, descriptions }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	
	const NavigateSystem = (system: string) => {
		navigate(`/dashboard/${system}`);
	};

	return (
		<div className={styles["RiskHeader-layout"]}>
			<div className={styles["RiskHeader-layout-title"]}>
				<nav style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					<span
						onClick={() => navigate(paths.dashboard.root)}
						style={{ cursor: "pointer" }}
						className={styles.homeIcon}
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.30615 1.10687C8.2174 1.03762 8.10805 1 7.99547 1C7.8829 1 7.77355 1.03762 7.6848 1.10687L0.5 6.70967L1.12135 7.49552L2 6.81042V13C2.00054 13.265 2.10607 13.5191 2.29349 13.7065C2.48091 13.8939 2.73495 13.9994 3 14H13C13.2651 13.9995 13.5191 13.894 13.7066 13.7065C13.894 13.5191 13.9995 13.265 14 13V6.81497L14.8786 7.49997L15.5 6.71407L8.30615 1.10687ZM9 13H7V8.99997H9V13ZM10 13V8.99997C9.9997 8.73485 9.89424 8.48067 9.70677 8.2932C9.5193 8.10573 9.26512 8.00028 9 7.99997H7C6.73486 8.00024 6.48066 8.10568 6.29319 8.29316C6.10571 8.48064 6.00026 8.73484 6 8.99997V13H3V6.03072L8 2.13572L13 6.03597V13H10Z'
								fill='#3B8DF5'
							/>
						</svg>
					</span>
					<span
						onClick={() => NavigateSystem("cardiovascular")}
						className={styles["breadcrumb"]}
					>
						/ {t('riskHeader.cardiovascularDisease', 'Cardiovascular Disease')}
					</span>

					<span className={styles["breadcrumb-sub-item"]}>
						/ {t('riskHeader.concernReport', 'Concern report')}
					</span>
				</nav>
				<h2 className={styles["RiskHeader-layout-title-p"]}>{title}</h2>
			</div>
			<div className={styles["RiskHeader-category"]}>
				<div className={styles["RiskHeader-wrapper"]}>
					<div style={{ paddingRight: "4px", display: "flex", height: 16 }}>
						<Grid style={{ padding: 2 }} />
					</div>
					<p className={styles["RiskHeader-category-p"]}>{t('riskHeader.category', 'Category')}</p>
					<p className={styles["RiskHeader-category-val-p"]}>
						{t('riskHeader.cardiovascularDisorders', 'Cardiovascular disorders')}
					</p>
				</div>
				<div className={styles["RiskHeader-wrapper"]}>
					<div style={{ paddingRight: "4px", display: "flex" }}>
						<Cardio style={{ padding: 2 }} />
					</div>
					<p className={styles["RiskHeader-category-p"]}>{t('riskHeader.keyOrgans', 'Key organs')}</p>
					<p className={styles["RiskHeader-category-val-p"]}>{t('riskHeader.heart', 'Heart')}</p>
				</div>
			</div>
			<div className={styles["RiskHeader-content"]}>
				{descriptions?.map((desc, index) => (
					<div key={index} className={styles["RiskHeader-description-p"]}>{desc}</div>
				))}
			</div>
			<RiskChart />
		</div>
	);
};

export default RiskHeader;