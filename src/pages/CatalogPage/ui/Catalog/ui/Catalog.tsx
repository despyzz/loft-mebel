import React, {useEffect, useState} from 'react';
import {DesktopCatalog} from "./DesktopCatalog";
import {MobileCatalog} from "./MobileCatalog";

const Catalog = () => {
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
    <div>
      {
        windowWidth >= 768
          ?
          <DesktopCatalog/>
          :
          <MobileCatalog/>
      }
    </div>
  );
};

export default Catalog;