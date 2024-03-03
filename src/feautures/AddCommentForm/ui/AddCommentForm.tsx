import classNames from 'classnames';
import React, {ChangeEvent, memo, useCallback} from 'react';
import classes from './AddCommentForm.module.scss';
import AppContainer from "shared/ui/AppContainer/AppContainer";
import {useSelector} from "react-redux";
import {getCommentFormText} from "../model/selectors/getCommentFormText/getCommentFormText";
import {getCommentFormError} from "../model/selectors/getCommentFormError/getCommentFormError";
import AppButton, {AppButtonTheme} from "shared/ui/AppButton/AppButton";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addCommentFormActions, addCommentFormReducer} from "../model/slices/addCommentFormSlice";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

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

  const dispatch = useAppDispatch()

  const commentBody = useSelector(getCommentFormText);
  const commentError = useSelector(getCommentFormError);

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
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
      <AppContainer>
        {
          commentError && <div>Произошла ошибка при отправке</div>
        }
        <div className={classNames(className, classes.AddCommentForm)}>
          <label>
            <input
              type="text"
              placeholder="Введите текст комментария"
              value={commentBody || ""}
              onChange={onInputChange}
            />
          </label>
          <AppButton
            theme={AppButtonTheme.DARK}
            onClick={onSendCommentHandler}
          >
            Отправить
          </AppButton>
        </div>
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;