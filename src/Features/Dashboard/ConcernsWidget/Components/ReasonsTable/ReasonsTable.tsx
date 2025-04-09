import { useState } from "react";
import styles from "./ReasonsTable.module.scss";
import Chevron from "@assets/ConcernWidget/Chevron.svg?react";
import { Reason } from "../../helpers/detailedSystemConcerns";
import { ReasonRow } from "../ReasonRow/ReasonRow";
import { useTranslation } from "react-i18next";

interface ReasonsTableProps {
	reasons: Reason[];
	detailIndex: number;
}

export const ReasonsTable: React.FC<ReasonsTableProps> = ({
	reasons,
	detailIndex,
}) => {
	const { t } = useTranslation();
	const [isShowMore, setIsShowMore] = useState(false);

	const reasonsToShow = isShowMore ? reasons : reasons.slice(0, 3);

	return (
		<div className={styles["ReasonsTable-container"]}>
			<div className={styles["ReasonsTable-head"]}>
				<div className={styles["ReasonsTable-title"]}>
					{t('concernsWidget.howWeKnow')}
				</div>
				<div
					className={styles["ReasonsTable-more"]}
					onClick={() => setIsShowMore((prev) => !prev)}
				>
					<p className={styles["ReasonsTable-more-text"]}>
						{isShowMore 
							? t('common.viewLess') 
							: t('concernsWidget.showMore', {count: reasons.length - 3})}
					</p>
					<div className={styles["ReasonsTable-chevron-container"]}>
						<Chevron
							className={`${styles["ReasonsTable-chevron"]} ${
								isShowMore ? styles["rotate-chevron"] : ""
							}`}
						/>
					</div>
				</div>
			</div>
			<div className={styles["ReasonsTable-table"]} key={detailIndex}>
				{reasonsToShow.map((reason) => (
					<ReasonRow reason={reason} key={reason.id} />
				))}
			</div>
		</div>
	);
};