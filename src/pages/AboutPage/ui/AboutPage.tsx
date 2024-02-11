import classes from './AboutPage.module.scss';

import AboutSection from "./sections/AboutSection/AboutSection";
import AdvantagesSection1 from "./sections/AdvantagesSection1/AdvantagesSection1";
import AdvantagesSection2 from "./sections/AdvantagesSection2/AdvantagesSection2";
import AdvantagesSection3 from "./sections/AdvantagesSection3/AdvantagesSection3";
import AdvantagesSection4 from "./sections/AdvantagesSection4/AdvantagesSection4";
import AdvantagesSection5 from "./sections/AdvantagesSection5/AdvantagesSection5";

const AboutPage = () => {
  return (
    <div className={classes.AboutPage}>
      <AboutSection />
      <AdvantagesSection1 />
      <AdvantagesSection2 />
      <AdvantagesSection3 />
      <AdvantagesSection4 />
      <AdvantagesSection5 />
    </div>
  );
}

export default AboutPage;