import classes from './ContactsPage.module.scss';
import {Navigation} from "widgets/Navigation";
import {ContactsSection} from "./ContactsSection";
import {AddressSection} from "./AddressSection";

const ContactsPage = () => {
  return (
    <div className={classes.ContactsPage}>
      <Navigation/>
      <ContactsSection />
      <AddressSection />
    </div>
  );
};

export default ContactsPage;