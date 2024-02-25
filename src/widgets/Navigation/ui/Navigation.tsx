import classes from './Navigation.module.scss';

import EtcIcon from 'shared/assets/Etc.svg';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import AppLink from "shared/ui/AppLink/AppLink";
import icon from 'shared/assets/categories/SaleIcon.svg';

type EtcItem = {
  link: string,
  title: string
}

const Navigation = () => {
  const navigationRef = useRef<HTMLDivElement | null>(null);
  const etcRef = useRef<HTMLDivElement | null>(null);

  const handleResize = useCallback(() => {
    if (!navigationRef.current)
      return

    const navigationWidth = useMemo(() => navigationRef.current!.offsetWidth, [navigationRef]);
    const etcWidth = useMemo(() => etcRef.current!.offsetWidth, [etcRef]);
    const gapValue = useMemo(() => parseInt(window.getComputedStyle(navigationRef.current!).getPropertyValue('gap'), 10), [navigationRef]);
    const items = document.querySelectorAll<HTMLElement>('.' + classes.Item);

    if (window.innerWidth > 768) {
      let itemsWidth = 0;
      for (const item of items) {
        item.classList.remove(classes.Hidden);

        itemsWidth += item.offsetWidth + gapValue;
        if (itemsWidth < navigationWidth - etcWidth) {
          item.classList.remove(classes.Hidden);
        } else {
          item.classList.add(classes.Hidden);
        }
      }
    }
  }, [])

  // resize navigation block
  useEffect(() => {

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // add hidden items to etc dropdown
  const [etcItems, setEtcItems] = useState<EtcItem[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const clearEtcItems = () => setEtcItems([]);
  const addEtcItem = useCallback((item: HTMLElement) => {
    const link = item.getAttribute('href');
    const titleElement = item.querySelector(`.${classes.Title}`);

    if (link && titleElement) {
      const title = (titleElement as HTMLElement).innerText;
      setEtcItems(prevState => [...prevState, {link, title}]);
    }
  }, []);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const onEtcClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
    } else {
      const items = document.querySelectorAll(`.${classes.Item}`);
      clearEtcItems();

      items.forEach((item) => {

        if (item.classList.contains(classes.Hidden)) {
          addEtcItem(item as HTMLElement);
        }
      })

      setDropdownVisible(true)
    }
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target as Node) && etcRef.current?.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  }, [])


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={navigationRef} className={classes.Navigation}>

      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>
      <AppLink className={classes.Item} to="/">
        <div className={classes.IconWrapper}>
          <img src={icon} alt=""/>
        </div>
        <div className={classes.Title}>Акция</div>
      </AppLink>

      <div
        className={classes.Etc}
        ref={etcRef}
        onClick={onEtcClick}
      >
        <img src={EtcIcon} alt=""/>
        {
          dropdownVisible &&
          <div className={classes.DropdownMenu} ref={dropdownRef}>
            {etcItems.map((item, index) => (
              <AppLink className={classes.DropdownItem} to={item.link} key={index}>
                {item.title}
              </AppLink>
            ))}
          </div>
        }
      </div>

    </div>
  );
};

export {Navigation};