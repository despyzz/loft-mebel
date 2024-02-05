import classes from './Contact.module.scss';
import AppLink from "../../../../../shared/ui/Link/AppLink";

import ContactIcon from 'shared/assets/ContactIcon.svg';

interface ContactProps {
  className?: string
}

const Contact = ({className}: ContactProps) => {
  return (
    <div className={className}>
      <AppLink className={classes.Contact} to="tel:88005553535">
        <img src={ContactIcon} alt="Phone icon."/>
        <span>8 (800) 555 35 35</span>
      </AppLink>
    </div>
  );
};

export default Contact;