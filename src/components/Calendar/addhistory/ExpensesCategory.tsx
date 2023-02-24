import { FormStateProps } from './EditHistory';

function ExpensesCategory({ formState, setFormState }: FormStateProps) {
  const categoryValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState({ ...formState, category: e.target.value });
  };
  return (
    <select
      className="category"
      name="inquirt_category"
      onChange={categoryValue}
    >
      <option value="카테고리">항목을 선택해주세요</option>
      <option value="식비">식비</option>
      <option value="교통/차량">교통/차량</option>
      <option value="문화생활">문화생활</option>
      <option value="패션/미용">패션/미용</option>
      <option value="주거/통신">주거/통신</option>
      <option value="기타">기타</option>
    </select>
  );
}

export default ExpensesCategory;
