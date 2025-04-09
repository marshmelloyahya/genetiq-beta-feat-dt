import BottleIcon from "@assets/PlanWidget/Bottle.svg?react";
import Cart from "@assets/CtaModal/Cart.svg?react";
import styles from "./CtaBlock.module.scss";
import { Supplements } from "../../helpers/planMockData";
import React, { useState } from "react";
import person from "@assets/PlanWidget/person.png";
import { useTranslation } from "react-i18next";

export const CtaBlock = ({ cta }: { cta: Supplements }) => {
	const { t } = useTranslation();
	const [activeType, setActiveType] = useState(cta.types[0].name);

	const activeSupplements = cta.types.find((el) => el.name === activeType);

	return (
		<div className={styles["CtaBlock-container"]}>
			<div className={styles["CtaBlock-left"]}>
				<div className={styles["CtaBlock-head"]}>
					<div className={styles["CtaBlock-bottle-container"]}>
						<BottleIcon />
					</div>
					<div className={styles["CtaBlock-more"]}>{t('common.viewMore')}</div>
				</div>
				<div className={styles["CtaBlock-title"]}>{t(`supplements.${cta.title}`, cta.title)}</div>
				<ul className={styles["CtaBlock-list"]}>
					{cta.types.map((el) => (
						<li
							key={el.name}
							className={`${styles["CtaBlock-list-item"]} ${el.name === activeType && styles["CtaBlock-list-item-active"]}`}
							onClick={() => setActiveType(el.name)}
						>
							{t(`supplementTypes.${el.name}`, el.name)}
						</li>
					))}
				</ul>
			</div>
			<div className={styles["CtaBlock-right"]}>
				<div className={styles["CtaBlock-content"]}>
					<div className={styles["CtaBlock-text"]}>
						<div className={styles["CtaBlock-right-head"]}>
							{t('planWidget.whatIsThisFor')}
						</div>
						<div className={styles["CtaBlock-description"]}>
							{t(`supplementDescriptions.${cta.title}`, cta.description)}
						</div>
					</div>
					<div className={styles["CtaBlock-box"]}>
						<div className={styles["CtaBlock-box-left"]}>
							<div className={styles["CtaBlock-icon-container"]}>
								<img
									src={activeSupplements?.icon}
									alt={t(`supplementTypes.${activeSupplements?.name}`, `${activeSupplements?.name} icon`)}
								/>
							</div>
							<p className={styles["CtaBlock-supplements"]}>
								{activeSupplements?.supplements.map((supplement, index) => (
									<React.Fragment key={index}>
										<span className={styles["CtaBlock-supplement"]}>
											<span className={styles["CtaBlock-amount"]}>
												{`${supplement.amount} `}
											</span>
											<span className={styles["CtaBlock-name"]}>
												{t(`supplementNames.${supplement.supplement}`, supplement.supplement)}
											</span>
											{index < activeSupplements.supplements.length - 1 && (
												<span className={styles["CtaBlock-coma"]}>{", "}</span>
											)}
										</span>
									</React.Fragment>
								))}
							</p>
						</div>
						<button className={styles["CtaBlock-cart-icon"]} aria-label={t('planWidget.addToCart')}>
							<Cart />
						</button>
					</div>
				</div>
				<div className={styles["CtaBlock-image-container"]}>
					<img
						src={person}
						alt={t('planWidget.personImage')}
						className={styles["CtaBlock-image"]}
					/>
				</div>
			</div>
		</div>
	);
};