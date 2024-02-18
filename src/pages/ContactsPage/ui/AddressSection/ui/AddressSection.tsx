import classes from './AddressSection.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";

const AddressSection = () => {
  return (
    <AppContainer className={classes.AddressSection}>
      <div className={classes.Title}>
        Адрес нашей компании
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c87a147ca4caddd3282c091f0b5e89362ef83778fc88f69a2dc5a4a84ab6983&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
        title="Interactive map"
      />
    </AppContainer>
  );
};

export default AddressSection;