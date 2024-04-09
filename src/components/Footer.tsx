import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.wrapperLogoParent}>
          <div className={styles.wrapperLogo}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className={styles.yourGoalIs}>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ourTechnologiesParent}>
            <h3 className={styles.ourTechnologies}>Our Technologies</h3>
            <div className={styles.reactjsParent}>
              <div className={styles.reactjs}>ReactJS</div>
              <div className={styles.gatsby}>Gatsby</div>
              <div className={styles.nextjs}>NextJS</div>
              <div className={styles.nodejs}>NodeJS</div>
              <div className={styles.graphql}>GraphQL</div>
              <div className={styles.laravel}>Laravel</div>
            </div>
          </div>
          <div className={styles.ourServices}>
            <h3 className={styles.ourServices1}>Our Services</h3>
            <div className={styles.socialMediaMarketingParent}>
              <div className={styles.socialMediaMarketing}>
                Social media Marketing
              </div>
              <div
                className={styles.webMobile}
              >{`Web & Mobile App Development`}</div>
              <div className={styles.dataAnalytics}>{`Data & Analytics`}</div>
              <div className={styles.googleMarketingSolutions}>
                Google Marketing solutions
              </div>
              <div className={styles.searchEngineOptimization}>
                Search Engine Optimization
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.frameItem} />
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
