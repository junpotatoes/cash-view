import styled from 'styled-components';
import BasicDatePicker from '../../Datepicker';
import AddHistoryForm from './AddHistoryForm';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  height: 400px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  transform: translate(-50%, -50%);
  z-index: 90;
`;

function AddHistory() {
  return (
    <>
      <ModalWrapper />

      <ModalContainer>
        <BasicDatePicker />

        <AddHistoryForm />
      </ModalContainer>
    </>
  );
}

export default AddHistory;
