import QuestionMark from "@assets/PlanWidget/QuestionMark.svg?react";
import ChevronHollow from "@assets/CtaModal/ChevronHollow.svg?react";
import Cart from "@assets/CtaModal/Cart.svg?react";
import styles from "./PlanRow.module.scss";
import { PlanItem } from "../../helpers/planMockData";
import { useTranslation } from "react-i18next";

export const PlanRow = ({
	item,
	setActiveTab,
}: {
	item: PlanItem;
	setActiveTab: (tab: string) => void;
}) => {
	const { t } = useTranslation();
	
	const handleClick = () => {
		if (item.link) {
			setActiveTab(item.link);
		}
	};
	
	return (
		<div className={styles["PlanRow-row"]} onClick={handleClick}>
			<div className={styles["PlanRow-icon"]}>
				<img 
					src={item.icon} 
					alt={t(`planItems.${item.name}.icon`, `${item.name} icon`)} 
				/>
			</div>
			<div className={styles["PlanRow-body"]}>
				<div className={styles["PlanRow-name"]}>
					{item.count && (
						<span className={styles["PlanRow-count"]}>{item.count} </span>
					)}
					{t(`planItems.${item.name}`, item.name)}
				</div>
				<div className={styles["PlanRow-desc"]}>
					{t(`planItems.${item.name}.description`, item.description)}
				</div>
			</div>
			<div className={styles["PlanRow-misc"]}>
				{item.dosage && (
					<div className={styles["PlanRow-dosage"]}>
						{t(`planItems.${item.name}.dosage`, item.dosage)}
					</div>
				)}
				{item.frequency && (
					<div className={styles["PlanRow-frequency"]}>
						{t(`planItems.${item.name}.frequency`, item.frequency)}
					</div>
				)}
			</div>
			<div className={styles["PlanRow-buttons"]}>
				<div className={styles["PlanRow-why"]}>
					<p>{t('planWidget.why')}</p>
					<QuestionMark />
				</div>
				{item.link ? (
					<div className={styles["PlanRow-chevron-container"]}>
						<ChevronHollow />
					</div>
				) : (
					<button className={styles["PlanRow-cart"]}>
						<p>{t('planWidget.addToCart')}</p>
						<Cart />
					</button>
				)}
			</div>
		</div>
	);
};