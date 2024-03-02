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
  onSendComment?: () => void
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

  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addCommentFormActions.setText(event.target.value))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <AppContainer>
        {
          error && <div>Произошла ошибка при отправке</div>
        }
        <div className={classNames(className, classes.AddCommentForm)}>
          <label>
            <input
              type="text"
              placeholder="Введите текст комментария"
              value={text || ""}
              onChange={onInputChange}
            />
          </label>
          <AppButton
            theme={AppButtonTheme.DARK}
            onClick={onSendComment}
          >
            Отправить
          </AppButton>
        </div>
      </AppContainer>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;