function IncomeCategory() {
  return (
    <select className="category" name="inquirt_category">
      <option value="카테고리">항목을 선택해주세요</option>
      <option value="월급">월급</option>
      <option value="부수입">부수입</option>
      <option value="용돈">용돈</option>
      <option value="상여금">상여금</option>
      <option value="금융소득">금융소득</option>
      <option value="기타">기타</option>
    </select>
  );
}

export default IncomeCategory;
