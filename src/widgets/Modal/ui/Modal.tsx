import classes from './Modal.module.scss';
import {MouseEvent, FC, ReactNode, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {Portal} from "shared/ui/Portal";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    children,
    className,
    isOpen,
    onClose,
  } = props;

  // close modal
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = () => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    }
  }, [isOpen]);

  // close modal on ESC
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen]);

  // don't close modal on content click
  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  }

  // disable page scrolling when modal is opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // additional classes
  const mods: Record<string, boolean | undefined> = {
    [classes.Opened]: isOpen,
    [classes.Closing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(className, classes.Modal, mods)}>
        <div className={classes.Overlay} onClick={closeHandler}>
          <div className={classes.Content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;