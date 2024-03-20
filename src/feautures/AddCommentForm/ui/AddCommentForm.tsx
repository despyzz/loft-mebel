import classNames from 'classnames';
import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import classes from './AddCommentForm.module.scss';
import {useSelector} from "react-redux";
import {getCommentFormText} from "../model/selectors/getCommentFormText/getCommentFormText";
import {getCommentFormError} from "../model/selectors/getCommentFormError/getCommentFormError";
import AppButton, {AppButtonTheme} from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../model/slices/addCommentFormSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getUserAuthData} from "../../../entities/User";
import {LoginModal} from "../../AuthByUsername";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (commentBody: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment
  } = props;

  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const closeAuthModal = () => setIsAuthModal(false);
  const openAuthModal = () => setIsAuthModal(true);

  const dispatch = useAppDispatch()

  const commentBody = useSelector(getCommentFormText);
  const commentError = useSelector(getCommentFormError);

  const onInputChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addCommentFormActions.setText(event.target.value))
  }, [dispatch])

  const onSendCommentHandler = useCallback(() => {
    if (commentBody === "")
      return;

    dispatch(addCommentFormActions.setText(""));
    onSendComment(commentBody!);
  }, [dispatch, onSendComment, commentBody])

  return (
    <DynamicModuleLoader reducers={reducers}>
      {
        commentError && <div>Произошла ошибка при отправке</div>
      }
      <div className={classNames(className, classes.AddCommentForm)}>
        <label className={classes.Label}>
          <p className={classes.Title}>
            Ваш отзыв
          </p>
          <textarea
            className={classes.Body}
            placeholder="Введите текст комментария"
            value={commentBody || ""}
            onChange={onInputChange}
          />
        </label>
        {
          authData ?
            <AppButton
              className={classes.SendButton}
              theme={AppButtonTheme.DARK}
              onClick={onSendCommentHandler}
            >
              Оставить отзыв
            </AppButton>
            :
            <>
              <AppButton
                className={classes.SendButton}
                theme={AppButtonTheme.DARK}
                onClick={openAuthModal}
              >
                Оставить отзыв
              </AppButton>
              <LoginModal
                isOpen={isAuthModal}
                onClose={closeAuthModal}
              />
            </>
        }

      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;