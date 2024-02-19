import classes from './Modal.module.scss';
import React, {FC, ReactNode} from "react";
import classNames from "classnames";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    children,
    className,
    isOpen,
    onClose,
  } = props;

  const mods: Record<string, boolean | undefined> = {
    [classes.Opened]: isOpen,
  };

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <div className={classNames(className, classes.Modal, mods)}>
      <div className={classes.Overlay} onClick={closeHandler}>
        <div className={classes.Content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;