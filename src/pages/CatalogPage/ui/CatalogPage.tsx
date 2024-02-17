import {MobileCatalog} from "./MobileCatalog";
import {DesktopCatalog} from "./DesktopCatalog";
import {useEffect, useState} from "react";

const CatalogPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, []);

  return (
    <>
      {
        windowWidth >= 768
          ?
          <DesktopCatalog />
          :
          <MobileCatalog />
      }
    </>
  );
};

export default CatalogPage;