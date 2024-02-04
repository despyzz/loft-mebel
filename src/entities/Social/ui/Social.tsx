import AppLink from "shared/ui/AppLink/AppLink";
import classes from "./Social.module.scss";

import ContactIcon from "shared/assets/ContactIcon.svg";
import InstagramIcon from "shared/assets/InstagramIcon.svg";
import MailIcon from "shared/assets/MailIcon.svg";

interface SocialProps {
  className?: string
}

const Social = ({className}: SocialProps) => {
  return (
    <div className={className}>
      <div className={classes.Social}>
        <AppLink className={classes.SocialLink} to={"tel:88005553535"}>
          <img src={ContactIcon} alt={"Phone icon."}/>
          <span>8 (800) 555 35 35</span>
        </AppLink>

        <AppLink className={classes.SocialLink} to={'instagram.com'}>
          <img src={InstagramIcon} alt={"Instagram icon."}/>
          <span>INSTAGRAM</span>
        </AppLink>

        <AppLink className={classes.SocialLink} to={"mailto:mebel_loft_anapa@mail.ru"}>
          <img src={MailIcon} alt={"Mail icon."}/>
          <span>mebel_loft_anapa@mail.ru</span>
        </AppLink>
      </div>
    </div>
  );
};

export default Social;