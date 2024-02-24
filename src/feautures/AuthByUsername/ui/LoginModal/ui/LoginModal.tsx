import {Modal, ModalProps} from "widgets/Modal";
import {LoginForm} from "../../LoginForm";
import {FC, Suspense} from "react";
import classNames from "classnames";
import Loader from "widgets/Loader";

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
      <Suspense fallback={<Loader/>}>
        <LoginForm onSuccess={onClose}/>
      </Suspense>
    </Modal>
  );
};

export default LoginModal;