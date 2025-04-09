import styles from "./AppDevice.module.scss";
import { AppCard } from "./Components/AppCard/AppCard";
import OmronLogo from "@assets/AppDevice/OmronLogo.svg";
import AppleLogo from "@assets/AppDevice/AppleLogo.svg";
import QardioLogo from "@assets/AppDevice/QardioLogo.svg";
import HuaweiLogo from "@assets/AppDevice/HuaweiLogo.svg";
import OuraLogo from "@assets/AppDevice/OuraLogo.svg";
import FreeStyleLogo from "@assets/AppDevice/FreeStyleLogo.svg";
import WithingsLogo from "@assets/AppDevice/WithingsLogo.svg";
import EHRsDatabase from "@assets/General/EHRDatabase.svg";
import { useTranslation } from "react-i18next";

export const AppDevice = () => {
 const { t } = useTranslation();
 
 const apps = [
  {
   img: EHRsDatabase,
   title: "EHRs Database",
   description: t('apps.ehrsDescription', "Digital health records")
  },
  {
   img: OmronLogo,
   title: "Omron",
   description: t('apps.omronDescription', "Platinum / Evolv / Complete")
  },
  {
   img: AppleLogo,
   title: "Apple",
   description: t('apps.appleDescription', "Watch Series / Ultra / SE / Nike")
  },
  {
   img: QardioLogo,
   title: "Qardio",
   description: t('apps.qardioDescription', "QardioBase, QardioCore, QardioArm")
  },
  {
   img: HuaweiLogo,
   title: "Huawei",
   description: t('apps.huaweiDescription', "Watch GT 5, Band 8, Scale 3")
  },
  {
   img: OuraLogo,
   title: "OURA",
   description: t('apps.ouraDescription', "Ring Gen 2, Ring Gen 3")
  },
  {
   img: FreeStyleLogo,
   title: "FreeStyle",
   description: t('apps.freeStyleDescription', "Libre2 / 3 (Glucose Monitor)")
  },
  {
   img: WithingsLogo,
   title: "Withings",
   description: t('apps.withingsDescription', "Body+, BPM Core, Sleep Analyzer")
  }
 ];
 
 return (
  <div className={styles["app-container"]}>
   {apps.map((app, index) => (
    <AppCard key={index} {...app} />
   ))}
  </div>
 );
};