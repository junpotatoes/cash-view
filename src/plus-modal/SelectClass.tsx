interface SelectClassProps {
  setClassOption: (option: string) => void;
}

function SelectClass({ setClassOption }: SelectClassProps) {
  const classValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClassOption(e.target.value);
  };

  return (
    <select
      className="category"
      name="inquirt_category"
      defaultValue="카테고리"
      onChange={classValue}
    >
      <option disabled value="카테고리">
        항목을 선택해주세요
      </option>
      <option value="수입">수입</option>
      <option value="지출">지출</option>
    </select>
  );
}

export default SelectClass;
