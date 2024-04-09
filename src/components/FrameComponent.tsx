import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.image2Parent}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <div className={styles.privacyPolicyTermsConditionParent}>
          <div className={styles.privacyPolicyTermsCondition}>
            <h2
              className={styles.webMobile}
            >{`Web & Mobile App Development`}</h2>
          </div>
          <div className={styles.yourWebAnd}>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </div>
          <div className={styles.button}>
            <b className={styles.getFreeConsultation}>LEARN MORE</b>
          </div>
        </div>
      </div>
      <div className={styles.vitaeCongueEuConsequatAcFParent}>
        <div className={styles.vitaeCongueEuConsequatAcF}>
          <div className={styles.digitalStrategyConsultingWrapper}>
            <h2 className={styles.digitalStrategyConsulting}>
              Digital Strategy Consulting
            </h2>
          </div>
          <div className={styles.yourDigitalStrategy}>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </div>
          <div className={styles.button1}>
            <b className={styles.getFreeConsultation1}>LEARN MORE</b>
          </div>
        </div>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className={styles.faqsWrapper}>
        <div className={styles.faqs}>
          <h2 className={styles.frequentlyAskedQuestions}>
            Frequently asked questions
          </h2>
          <div className={styles.faqsParent}>
            <div className={styles.faqs1}>
              <div className={styles.whatIsWebflowAndWhyIsItParent}>
                <h3 className={styles.whatIsWebflow}>
                  Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </h3>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-35622.svg"
                  />
                </div>
              </div>
              <div className={styles.vitaeCongueEu}>
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </div>
            </div>
            <div className={styles.faqs2}>
              <div className={styles.whatIsWebflowAndWhyIsItGroup}>
                <div className={styles.whatIsWebflow1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                  integer?
                </div>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-35621.svg"
                  />
                </div>
              </div>
              <div className={styles.vitaeCongueEu1}>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </div>
            </div>
            <div className={styles.faqs3}>
              <div className={styles.whatIsWebflowAndWhyIsItContainer}>
                <div className={styles.whatIsWebflow2}>
                  Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                  nunc?
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/group-35621.svg"
                  />
                </div>
              </div>
              <div className={styles.vitaeCongueEu2}>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
