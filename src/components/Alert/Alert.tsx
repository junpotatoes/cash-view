import { ModalWrapper } from '@/styles/Global/modal.style';
import * as S from '@/styles/Alert/Alert.style';

interface AlertProps {
  message: string;
  trueText?: string;
  falseText?: string;
  alertModal: boolean;
  setAlertModal: React.Dispatch<React.SetStateAction<boolean>>;
  propsFunction?: () => void;
}

function Alert({
  message,
  trueText,
  falseText,
  alertModal,
  setAlertModal,
  propsFunction
}: AlertProps) {
  return (
    <>
      <ModalWrapper isOpen={alertModal} onClick={() => setAlertModal(false)} />

      <S.AlertContainer isOpen={alertModal}>
        <strong className="message">{message}</strong>
        <div className="buttonBox">
          {falseText && (
            <button
              className="confirmButton red"
              onClick={() => setAlertModal(false)}
            >
              {falseText}
            </button>
          )}
          {trueText && (
            <button
              className="confirmButton blue"
              onClick={() => {
                propsFunction && propsFunction();
                setAlertModal(false);
              }}
            >
              {trueText}
            </button>
          )}
        </div>
      </S.AlertContainer>
    </>
  );
}

export default Alert;
