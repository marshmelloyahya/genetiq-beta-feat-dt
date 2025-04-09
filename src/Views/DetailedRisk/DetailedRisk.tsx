import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/Features/Structural/NavBar/Navbar";
import styles from "./DetailedRisk.module.scss";
import { CameraProvider } from "@/Features/DigitalTwin/Context/CameraContext";
import RiskHeader from "@/Features/Risk/RiskHeader/RiskHeader";
import { RiskStatus } from "@/Features/Risk/RiskStatus/RiskStatus";
import { detailedSystemConcerns } from "@/Features/Dashboard/ConcernsWidget/helpers/detailedSystemConcerns";
import { PlanWidget } from "@/Features/Dashboard/PlanWidget/PlanWidget";
import GoalsProgressMenu from "@/Features/Risk/GoalProgressMenu/GoalProgressMenu";
import { ReasonsTable } from "@/Features/Risk/ReasonsTable/ReasonsTable";
import Logo from "@assets/General/IconGenetiq.svg?react";
import { Symptoms } from "@/Features/Risk/Symptoms/Symptoms";
import { useTranslation } from "react-i18next";

function toTitleCase(str: string): string {
	return str
		.split(" ")
		.map(
			(word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
		)
		.join(" ");
}

const DetailedRisk = () => {
	const { systemName, riskName } = useParams();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { t } = useTranslation();

	const formattedName = riskName ? toTitleCase(riskName) : "";

	const selectedDetail = detailedSystemConcerns[0].details.find(
		(detail) => detail.title === formattedName,
	);

	const handleIframeLoad = () => {
		setInterval(() => {
			setIsLoading(false);
		}, 4000);
	};

	const selectedSystemInfo = detailedSystemConcerns.find(
		(concern) => concern.title === systemName,
	);

	const selectedConcern = selectedSystemInfo!.details.find(
		(detail) => detail.title === riskName,
	);

	return (
		<div className={styles["DetailerRisk-layout"]}>
			<NavBar />

			<CameraProvider>
				<div className={styles["DetailerRisk-content"]}>
					<div
						className={`${styles["DetailerRisk-stats"]} ${styles["DetailerRisk-animate"]}`}
					>
						<RiskHeader
							title={formattedName}
							descriptions={selectedConcern?.description}
						/>
						<RiskStatus status={selectedConcern!.status} />
						<div className={styles["DetailerRisk-age"]}>
							<div className={styles["DetailerRisk-age-content"]}>
								<div className={styles["DetailerRisk-age-content-title"]}>
									{t('detailedRisk.ageHealthTitle', 'What your age tells about your health')}
								</div>
								<div className={styles["DetailerRisk-age-content-desc"]}>
									{t('detailedRisk.ageHealthDescription', 'A younger cardiovascular age can indicate better heart health and potentially lower your risk of complications from AFib, making it essential to focus on heart health measures tailored to your condition.')}
								</div>
							</div>
						</div>
						<Symptoms
							description={selectedConcern!.symptoms?.description}
							symptomList={selectedConcern!.symptoms?.symptomsList}
						/>
						<ReasonsTable
							reasons={selectedSystemInfo!.details[0].reasons}
							symptoms={selectedConcern!.symptoms}
						/>
						<div className={styles["DetailerRisk-plan"]}>
							<div className={styles["title"]}>{t('detailedRisk.whatYouCanDo', 'What you can do')}</div>
							<PlanWidget
								backgroundColor='blue'
								planData={
									selectedDetail?.plan ?? detailedSystemConcerns[0].defaultPlan
								}
							/>
						</div>
					</div>
					<div className={styles["DetailerRisk-twin"]}>
						<GoalsProgressMenu />
						<div
							style={{
								position: "relative",
								width: "100%",
								aspectRatio: "4 / 3",
								overflow: "hidden",
								justifyContent: "center",
							}}
						>
							{isLoading && (
								<div className={styles["DetailerRisk-iframe-loading"]}>
									<Logo className={styles["DetailerRisk-iframe-logo"]} />
								</div>
							)}

							<iframe
								id='embedded-human'
								frameBorder='0'
								allowFullScreen
								style={{ aspectRatio: "4 / 3", width: "100%" }}
								loading='eager'
								onLoad={handleIframeLoad}
								src={selectedConcern?.frame}
							/>
						</div>
					</div>
				</div>
			</CameraProvider>
		</div>
	);
};

export default DetailedRisk;