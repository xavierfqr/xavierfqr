import React from 'react';
import Carousel, { slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from './ProjectsSection.module.css';

const slides = [
  <img alt="memoji" src="assets/myMemoji.png" />,
  <img alt="memoji" src="assets/myMemoji.png" />,
  <img alt="memoji" src="assets/myMemoji.png" />,
];

function ProjectsSection() {
  const [value, setValue] = React.useState(0);

  const onChange = (value: number) => {
    setValue(value);
  };

  return (
    <div className={styles.dots}>
      <Carousel
        value={value}
        slides={slides}
        onChange={onChange}
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          'arrows',
          //   'autoplay',
          'infinite',
        ]}
      ></Carousel>
      <Dots value={value} onChange={onChange} number={slides.length} className={styles.dots} />
    </div>
  );
}

export default ProjectsSection;
