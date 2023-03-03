import { FormStateProps } from '@/components/Calendar/History/Modal/AddHistoryForm';

function SelectClass({ formState, setFormState }: FormStateProps) {
  return (
    <select
      className="category"
      name="inquirt_category"
      key={formState.value}
      defaultValue={formState.value || '분류'}
      onChange={(e) => setFormState({ ...formState, value: e.target.value })}
    >
      <option disabled value="분류">
        항목을 선택해주세요
      </option>
      <option value="수입">수입</option>
      <option value="지출">지출</option>
    </select>
  );
}

export default SelectClass;
