import styled from '@emotion/styled';
import Image from 'next/image';
import { COLORS } from 'styles/colors';
import { POMO_STATUS_NAME } from '../constants';
import { PomoStatus } from '../types';
import Timer from './Timer';

interface TimeProps {
  startTime: Date;
  iteration: number;
  status: PomoStatus;
  startFocus: () => void;
  startRest: () => void;
  finish: () => void;
}

export default function Time(props: TimeProps) {
  return (
    <Container>
      <Timer {...props} />
      <Status status={props.status}>
        <Image
          src={`/images/pomo-circle${props.status === 'focus' ? '-white' : ''}.svg`}
          alt="로고"
          width="60"
          height="60"
        />
        <StatusText>{POMO_STATUS_NAME[props.status]}</StatusText>
      </Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;
`;

const Status = styled.div<{ status: PomoStatus }>`
  background-color: ${({ status }) => (status === 'rest' ? '#ffffff' : COLORS.main)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 90px;
  padding: ${({ status }) => (status === 'rest' ? '5px 39px 5px 7px' : '5px 7px 5px 39px')};
  display: inline-flex;
  gap: 21px;
  align-items: center;
  flex-direction: ${({ status }) => (status === 'rest' ? 'row' : 'row-reverse')};
  color: ${({ status }) => (status === 'rest' ? '#2B2B2B' : '#ffffff')};
`;

const StatusText = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;
