import styled from '@emotion/styled';
import { useState } from 'react';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

export default function DatingPage() {
  const [showMatchModal] = useState(false);

  // 타이머 포맷팅
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <BaseLayout>
      <Container>
        <DatingHeader>
          <Timer isLow={false}>{formatTime(0)}</Timer>
        </DatingHeader>

        <DatingContent>
          <ConversationTips>
            <h3>대화 도움말</h3>
            <TipsList>
              <TipItem>취미나 관심사에 대해 이야기해보세요.</TipItem>
              <TipItem>최근에 본 영화나 책에 대해 물어보세요.</TipItem>
              <TipItem>좋아하는 음식이나 여행지를 공유해보세요.</TipItem>
              <TipItem>평소 주말은 어떻게 보내는지 물어보세요.</TipItem>
            </TipsList>
          </ConversationTips>
        </DatingContent>
      </Container>

      {/* 매치 선택 모달 */}
      {showMatchModal && (
        <ModalOverlay>
          <MatchModal>
            <h2>매치 선택하기</h2>

            <MatchChoices>
              <MatchChoice selected={false} positive={true} onClick={() => {}}>
                <span>👍</span> 네, 더 만나고 싶어요
              </MatchChoice>

              <MatchChoice selected={false} positive={false} onClick={() => {}}>
                <span>👎</span> 아니오, 다른 분과 만나고 싶어요
              </MatchChoice>
            </MatchChoices>

            <Button onClick={() => {}} variant='primary' size='large' fullWidth>
              선택 완료
            </Button>
          </MatchModal>
        </ModalOverlay>
      )}
    </BaseLayout>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const ParticipantBadge = styled.div`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const DatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const RoundInfo = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }
`;

const Timer = styled.div<{ isLow: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.isLow ? '#f44336' : '#333')};
  animation: ${(props) => (props.isLow ? 'pulse 1s infinite' : 'none')};

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DatingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const PartnerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #f06292;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PartnerName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const ConversationTips = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

const TipsList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
`;

const TipItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.4;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MatchModal = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const MatchChoices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MatchChoice = styled.div<{ selected: boolean; positive: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.selected ? (props.positive ? '#e8f5e9' : '#ffebee') : '#f5f5f5'};
  border: 2px solid
    ${(props) => (props.selected ? (props.positive ? '#66bb6a' : '#ef5350') : 'transparent')};
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => (props.positive ? '#e8f5e9' : '#ffebee')};
  }
`;

const CompletionCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const LoadingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;
