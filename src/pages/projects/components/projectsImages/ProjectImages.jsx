/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { Fragment, useCallback } from 'react';

import Image from 'next/image';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '@src/pages/projects/components/projectsImages/styles/projectImages.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function ProjectImages({ project }) {
  const isMobile = useIsMobile();

  const renderMediaContainer = useCallback(
    ({ tag, src, isRight, index, title }) => {
      if (tag === 'video') {
        return (
          <div className={styles.videoContainer}>
            <video loop muted autoPlay>
              <source src={src} type="video/mp4" />
            </video>
          </div>
        );
      }
      if (tag === 'youtube') {
        return (
          <div className={styles.videoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${src}?autoplay=1&mute=1&loop=1&playlist=${src}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
              title={`${title}-video-${index}`}
              allow="autoplay; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
              frameBorder="0"
            />
          </div>
        );
      }
      if (tag === 'small') {
        return (
          <div style={{ gridColumn: !isMobile ? (!isRight ? '1 / 9' : ' 9 / 17') : !isRight ? '1 / 4' : ' 4 / 7' }} className={styles.imageContainer}>
            <Image priority sizes="100%" src={src} fill alt={`Image-${title}-${index}`} />
          </div>
        );
      }
      if (tag === 'big') {
        return (
          <div className={styles.bigContainer}>
            <Image priority sizes="100%" src={src} fill alt={`Image-${title}-${index}`} />
          </div>
        );
      }
      if (tag === 'medium') {
        return (
          <div className={styles.mediumContainer}>
            <Image priority sizes="100%" src={src} fill alt={`Image-${title}-${index}`} />
          </div>
        );
      }
      return null;
    },
    [isMobile],
  );

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      {project.images.map((image, index) => (
        <Fragment key={`${project.title}-image-${index}`}>{renderMediaContainer({ ...image, index, title: project.title })}</Fragment>
      ))}
    </section>
  );
}

ProjectImages.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        tag: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        isRight: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,
};

export default ProjectImages;
