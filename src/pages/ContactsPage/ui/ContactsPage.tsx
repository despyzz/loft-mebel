import classes from './ContactsPage.module.scss';
import {Navigation} from "widgets/Navigation";
import {ContactsSection} from "./ContactsSection";
import {AddressSection} from "./AddressSection";
import {Page} from "widgets/Page";

const ContactsPage = () => {
  return (
    <Page className={classes.ContactsPage}>
      <Navigation/>
      <ContactsSection />
      <AddressSection />
    </Page>
  );
};

export default ContactsPage;