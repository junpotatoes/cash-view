import { useState } from 'react';
import * as S from '../../../../styles/Calendar/Header/CalendarHeader.style';
import { ReactComponent as ArrowIcon } from '../../../../assets/Icon/arrowIcon.svg';

function DateModalHeader() {
  return (
    <S.CalendarHeaderContainer px={16}>
      <S.PrevButton type="button" px={16}>
        <ArrowIcon className="prevIcon" />
      </S.PrevButton>
      <div className="calendarDateBox">
        <strong></strong>
      </div>
      <S.NextButton type="button" px={16}>
        <ArrowIcon className="nextIcon" />
      </S.NextButton>
    </S.CalendarHeaderContainer>
  );
}

export default DateModalHeader;
