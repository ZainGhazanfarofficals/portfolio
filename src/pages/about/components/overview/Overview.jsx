import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">
              A great AI engineer&apos;s job is to turn complexity into <span className="medium">clarity</span>, giving people <span className="medium">trustworthy</span> and{' '}
              <span className="medium">reliable</span> systems.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">
              A great AI engineer&apos;s job is to turn complexity into <span className="medium">clarity</span>, giving people <span className="medium">trustworthy</span> and{' '}
              <span className="medium">reliable</span> systems.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">
              Hey there! I&apos;m a Senior Full Stack AI Engineer based in Lahore, Pakistan with a passion for building AI-powered, production-ready systems. I studied Computer Science at FAST-NU to
              build a strong foundation in software engineering, algorithms, and distributed systems.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              When I&apos;m not building AI-powered features, you&apos;ll often find me exploring new AI tools and cloud services, or refining secure workflows for healthcare platforms. I love turning
              complex problems into something useful.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not immersed in code, I enjoy mentoring engineers, writing on Medium, and staying curious about emerging AI infrastructure.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and building something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Zain Ghazanfar.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">
              Hey there! I&apos;m a Senior Full Stack AI Engineer based in Lahore, Pakistan with a passion for building AI-powered, production-ready systems. I studied Computer Science at FAST-NU to
              build a strong foundation in software engineering and distributed systems.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>
              When I&apos;m not building AI-powered features, you&apos;ll often find me exploring new AI tools and cloud services, or refining secure workflows for healthcare platforms. I love turning
              complex problems into something useful.
            </h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not immersed in code, I enjoy mentoring engineers, writing on Medium, and staying curious about emerging AI infrastructure.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m looking forward to collaborating and building something great!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Zain Ghazanfar.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
