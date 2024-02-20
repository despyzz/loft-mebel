// import classes from './LoginModal.module.scss';
import {Modal, ModalProps} from "widgets/Modal";
import {LoginForm} from "../../LoginForm";
import {FC} from "react";
import classNames from "classnames";

interface LoginModalProps extends ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props;

  return (
    <Modal
      className={classNames(className)}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm/>
    </Modal>
  );
};

export default LoginModal;