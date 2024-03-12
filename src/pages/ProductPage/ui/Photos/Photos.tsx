import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import classes from './Photos.module.scss';
import classNames from "classnames";
import AppButton from "shared/ui/AppButton/AppButton";
import Chevron from "shared/assets/Chevron.svg";

interface PhotosProps {
  photos: string[]
  className?: string
}

const Photos = memo((props: PhotosProps) => {
  const {
    photos,
    className
  } = props;

  const [mainPhoto, setMainPhoto] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos && photos.length > 0) {
      setMainPhoto(photos[0]);
    }
  }, [photos]);

  const handleThumbnailClick = useCallback((photo: string, index: number) => {
    setMainPhoto(photo);
    setActiveIndex(index);
  }, [])

  const photosLength = useMemo(() => photos ? photos.length : 0, [photos]);

  const handleNextClick = useCallback(() => {
    setActiveIndex((prevState) => Math.min(prevState + 1, photosLength - 1))
  }, [photosLength]);

  const handlePrevClick = useCallback(() => {
    setActiveIndex((prevState) => Math.max(prevState - 1, 0))
  }, []);

  const [thumbnailWidth, setThumbnailWidth] = useState(0);

  useEffect(() => {
    const thumbnailElement = document.querySelector(`.${classes.ThumbnailWrapper}`);
    if (thumbnailElement) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setThumbnailWidth(entry.contentRect.width);
        }
      });
      resizeObserver.observe(thumbnailElement);
      return () => resizeObserver.unobserve(thumbnailElement);
    }
  }, []);

  if (!photos) {
    return null;
  }

  return (
    <div className={classNames(classes.Photos, className)}>
      <div className={classes.MainWrapper}>
        <img className={classes.Main} src={mainPhoto} alt=""/>
      </div>

      <div className={classes.Thumbnails}>
        <div className={classes.Wrapper}>
          <div
            className={classes.ThumbnailsPhotos}
            style={{
              transition: "0.3s",
              transform: `translateX(${-1 * activeIndex * (thumbnailWidth + 7)}px)`
            }}
          >
            {
              photos.map((photo, index) => (
                <div
                  className={classNames(classes.ThumbnailWrapper, photo === mainPhoto ? classes.Active : null)}
                  onClick={() => handleThumbnailClick(photo, index)}
                  key={index}
                >
                  <img className={classes.Thumbnail} src={photo} alt=""/>
                </div>
              ))
            }
          </div>
        </div>
        <AppButton
          className={classNames(classes.Button, classes.Prev)}
          onClick={handlePrevClick}
        >
          <img src={Chevron} alt=""/>
        </AppButton>
        <AppButton
          className={classNames(classes.Button, classes.Next)}
          onClick={handleNextClick}
        >
          <img src={Chevron} alt=""/>
        </AppButton>
      </div>
    </div>
  );
});

export default Photos;