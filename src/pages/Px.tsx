import { FunctionComponent } from "react";
import TopNavigation from "../components/TopNavigation";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Px.module.css";

const Px: FunctionComponent = () => {
  return (
    <div className={styles.px}>
      <TopNavigation />
      <section className={styles.buttonInstance}>
        <div className={styles.heroSection}>
          <img
            className={styles.heroImageIcon}
            loading="lazy"
            alt=""
            src="/hero-image@2x.png"
          />
          <div className={styles.weCrushYourCompetitorsGoaParent}>
            <h1 className={styles.weCrushYour}>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>
            <div className={styles.button}>
              <b className={styles.getFreeConsultation}>
                Get free consultation
              </b>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.pxInner}>
        <FrameComponent />
      </section>
      <Footer />
    </div>
  );
};

export default Px;
