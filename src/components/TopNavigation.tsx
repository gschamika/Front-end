import { FunctionComponent } from "react";
import styles from "./TopNavigation.module.css";

const TopNavigation: FunctionComponent = () => {
  return (
    <header className={styles.topNavigation}>
      <div className={styles.wrapperLogo}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <nav className={styles.topNavigationInner}>
        <nav className={styles.servicesParent}>
          <div className={styles.services}>SERVICES</div>
          <div className={styles.aboutUs}>ABOUT US</div>
          <div className={styles.contactUs}>CONTACT US</div>
          <div className={styles.careers}>CAREERS</div>
        </nav>
      </nav>
    </header>
  );
};

export default TopNavigation;
