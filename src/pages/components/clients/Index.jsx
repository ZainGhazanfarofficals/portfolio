import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Companies</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Rookminiinfosolution</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Led end-to-end development of ExpertOnHire, a scalable</div>
            <div className="p-l">marketplace platform, and built AI-based data validation,</div>
            <div className="p-l">trust scoring, and audio transcription systems using LLaMA-7B</div>
            <div className="p-l">and Whisper. Architected Dicomed, a healthcare data</div>
            <div className="p-l">platform with automated SOAP notes, DICOM imaging</div>
            <div className="p-l">workflows, and RBAC. Implemented CI/CD, Docker, and Azure</div>
            <div className="p-l">deployments, and led a team across frontend, backend,</div>
            <div className="p-l">and data/AI modules.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Rookminiinfosolution</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Led end-to-end development of ExpertOnHire, a scalable</div>
              <div className="p-l">marketplace platform, and built AI-based data validation,</div>
              <div className="p-l">trust scoring, and audio transcription systems using LLaMA-7B</div>
              <div className="p-l">and Whisper. Architected Dicomed, a healthcare data</div>
              <div className="p-l">platform with automated SOAP notes, DICOM imaging</div>
              <div className="p-l">workflows, and RBAC. Implemented CI/CD, Docker, and Azure</div>
              <div className="p-l">deployments, and led a team across frontend, backend,</div>
              <div className="p-l">and data/AI modules.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Neurocare</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Led a team of 5 engineers building scalable healthcare</div>
            <div className="p-l">applications. Designed AizaMD, an automated SOAP note</div>
            <div className="p-l">and after-visit summary generator, reducing documentation</div>
            <div className="p-l">effort by 40%. Built a telehealth Dialer System with Twilio,</div>
            <div className="p-l">and integrated EHR systems including ModMed, Athena,</div>
            <div className="p-l">Oracle Cerner, eCW, and Ledeng via FHIR APIs. Developed</div>
            <div className="p-l">AnyDoc for structured clinical documentation, cutting</div>
            <div className="p-l">documentation errors by 20%.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Neurocare</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Led a team of 5 engineers building scalable healthcare</div>
              <div className="p-l">applications. Designed AizaMD, an automated SOAP note</div>
              <div className="p-l">and after-visit summary generator, reducing documentation</div>
              <div className="p-l">effort by 40%. Built a telehealth Dialer System with Twilio,</div>
              <div className="p-l">and integrated EHR systems including ModMed, Athena,</div>
              <div className="p-l">Oracle Cerner, eCW, and Ledeng via FHIR APIs. Developed</div>
              <div className="p-l">AnyDoc for structured clinical documentation, cutting</div>
              <div className="p-l">documentation errors by 20%.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2022</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Reebcode</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Collaborated with US-based client Khub Commerce to build</div>
            <div className="p-l">scalable B2B and B2C commerce systems. Implemented Azure</div>
            <div className="p-l">OCR to convert unstructured PDFs into structured</div>
            <div className="p-l">data, and built Purchase Order and EDI integration workflows.</div>
            <div className="p-l">Integrated NMI, Stripe, and Grilpay payment systems,</div>
            <div className="p-l">improving reliability by 40%. Contributed to Zaree.pk,</div>
            <div className="p-l">StuAdvisor, and Sendflow, an email marketing platform built</div>
            <div className="p-l">with Next.js and MongoDB.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2022</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Reebcode</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Collaborated with US-based client Khub Commerce to build</div>
              <div className="p-l">scalable B2B and B2C commerce systems. Implemented Azure</div>
              <div className="p-l">OCR to convert unstructured PDFs into structured</div>
              <div className="p-l">data, and built Purchase Order and EDI integration workflows.</div>
              <div className="p-l">Integrated NMI, Stripe, and Grilpay payment systems,</div>
              <div className="p-l">improving reliability by 40%. Contributed to Zaree.pk,</div>
              <div className="p-l">StuAdvisor, and Sendflow, an email marketing platform built</div>
              <div className="p-l">with Next.js and MongoDB.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2021</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[3] = el;
        }}
        className={styles.fourth}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Educative</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Contributed to software development and technical content</div>
            <div className="p-l">creation, focused on backend systems, APIs, and cloud-based</div>
            <div className="p-l">workflows. Designed a web-based code execution platform</div>
            <div className="p-l">using React and Editor.js, with a containerized execution</div>
            <div className="p-l">environment built on Docker for real-time CLI-based code</div>
            <div className="p-l">execution. Developed scalable backend services with Node.js</div>
            <div className="p-l">and Express, and created technical courses on backend</div>
            <div className="p-l">development, increasing course interaction rates by 25-40%.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[3] = el;
            }}
            className={styles.fourthText}
          >
            <AppearTitle>
              <h6 className="h6">2021</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Educative</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Contributed to software development and technical content</div>
              <div className="p-l">creation, focused on backend systems, APIs, and cloud-based</div>
              <div className="p-l">workflows. Designed a web-based code execution platform</div>
              <div className="p-l">using React and Editor.js, with a containerized execution</div>
              <div className="p-l">environment built on Docker for real-time CLI-based code</div>
              <div className="p-l">execution. Developed scalable backend services with Node.js</div>
              <div className="p-l">and Express, and created technical courses on backend</div>
              <div className="p-l">development, increasing course interaction rates by 25-40%.</div>
            </AppearTitle>
          </div>
          <div className={styles.sixthEmpty} />
        </>
      ) : null}
      {!isMobile ? <div className={styles.seventhEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2020</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[4] = el;
        }}
        className={styles.fifth}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Mam Decor</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Developed and deployed a web-based company platform using</div>
            <div className="p-l">React and Node.js, presenting company services and project</div>
            <div className="p-l">information. Designed an internal material audit system for</div>
            <div className="p-l">structured inventory tracking and validation, reducing</div>
            <div className="p-l">discrepancies by 30%. Built backend workflows and APIs to</div>
            <div className="p-l">support operational processes, and customized an ERP</div>
            <div className="p-l">system to improve resource tracking and process efficiency</div>
            <div className="p-l">by 25%.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <div
          ref={(el) => {
            textRefs.current[4] = el;
          }}
          className={styles.fifthText}
        >
          <AppearTitle>
            <h6 className="h6">2020</h6>
          </AppearTitle>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold', styles.title)}>Mam Decor</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Developed and deployed a web-based company platform using</div>
            <div className="p-l">React and Node.js, presenting company services and project</div>
            <div className="p-l">information. Designed an internal material audit system for</div>
            <div className="p-l">structured inventory tracking and validation, reducing</div>
            <div className="p-l">discrepancies by 30%. Built backend workflows and APIs to</div>
            <div className="p-l">support operational processes, and customized an ERP</div>
            <div className="p-l">system to improve resource tracking and process efficiency</div>
            <div className="p-l">by 25%.</div>
          </AppearTitle>
        </div>
      ) : null}
    </section>
  );
}

export default Clients;
