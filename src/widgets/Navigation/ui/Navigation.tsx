import classes from './Navigation.module.scss';

import EtcIcon from 'shared/assets/Etc.svg';
import {useEffect, useRef, useState} from "react";

const Navigation = () => {
  const icon = <svg
    fill="white"
    stroke="black"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 6H6.5M9.5 10H10.5M10.5 5.5L5.5 10.5M7.30145 1.28935L6.17243 2.41837C5.98717 2.60363 5.73589 2.70772 5.47389 2.70772H3.69561C3.15001 2.70772 2.70772 3.15001 2.70772 3.69561V5.47389C2.70772 5.73589 2.60363 5.98717 2.41837 6.17243L1.28935 7.30145C0.903551 7.68725 0.903551 8.31275 1.28935 8.69855L2.41837 9.82757C2.60363 10.0128 2.70772 10.2641 2.70772 10.5261V12.3044C2.70772 12.85 3.15001 13.2923 3.69561 13.2923H5.47389C5.73589 13.2923 5.98717 13.3964 6.17243 13.5816L7.30145 14.7107C7.68725 15.0964 8.31275 15.0964 8.69855 14.7107L9.82757 13.5816C10.0128 13.3964 10.2641 13.2923 10.5261 13.2923H12.3044C12.85 13.2923 13.2923 12.85 13.2923 12.3044V10.5261C13.2923 10.2641 13.3964 10.0128 13.5816 9.82757L14.7107 8.69855C15.0964 8.31275 15.0964 7.68725 14.7107 7.30145L13.5816 6.17243C13.3964 5.98717 13.2923 5.73589 13.2923 5.47389V3.69561C13.2923 3.15001 12.85 2.70772 12.3044 2.70772H10.5261C10.2641 2.70772 10.0128 2.60363 9.82757 2.41837L8.69855 1.28935C8.31275 0.903551 7.68725 0.903551 7.30145 1.28935Z"/>
  </svg>

  const navigationRef = useRef<HTMLDivElement>(null);
  const etcRef = useRef<HTMLDivElement>(null);

  const [hiddenItems, setHiddenItems] = useState<HTMLElement[]>([]);
  const addHiddenItem = (item: HTMLElement) => {
    if (!item && hiddenItems.includes(item))
      return;
    setHiddenItems([...hiddenItems, item]);
  }
  const removeHiddenItem = (item: HTMLElement) => {
    if (!item && !hiddenItems.includes(item))
      return;
    setHiddenItems(hiddenItems.filter(i => i !== item));
  }

  useEffect(() => {
    const handleResize = () => {
      if (!navigationRef.current)
        return

      const navigationWidth = navigationRef.current.offsetWidth;
      const etcWidth = etcRef.current!.offsetWidth;
      const gapValue = parseInt(
        window
          .getComputedStyle(navigationRef.current!)
          .getPropertyValue('gap'),
        10
      );
      const items = document.querySelectorAll<HTMLElement>('.' + classes.Item);

      if (window.innerWidth > 768) {
        // tablet & desktop
        let itemsWidth = 0;
        for (const item of items) {
          item.style.display = "flex"; // to calculate width correctly

          itemsWidth += item.offsetWidth + gapValue;
          if (itemsWidth < navigationWidth - etcWidth) {
            addHiddenItem(item);
            item.style.display = "flex";
          } else {
            removeHiddenItem(item);
            item.style.display = "none";
          }
        }
      } else {
        // mobile
        for (const item of items) {
          item.style.display = "flex";
        }
      }

    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div ref={navigationRef} className={classes.Navigation}>

      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>
      <div className={classes.Item}>
        <div className={classes.IconWrapper}>
          {icon}
        </div>
        <div className={classes.Title}>
          Акция
        </div>
      </div>

      <div
        ref={etcRef}
        className={classes.Etc}
        onClick={() => console.log(hiddenItems)}
      >
        <img src={EtcIcon} alt=""/>
      </div>

    </div>
  );
};

export {Navigation};