import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

// 목업 데이터
const MOCK_DATING = {
  id: 'dating-123',
  title: '5월 신촌 소개팅',
  maleCount: 3,
  femaleCount: 3,
  timeLimit: 20,
  createdAt: new Date().toISOString(),
  status: 'created', // 'created' | 'in_progress' | 'completed'
  accessCode: 'MEET123',
  participants: []
};

const BoardPage = () => {
  const { accessCode } = useParams<{ accessCode: string }>();

  // 실제 구현에서는 accessCode를 사용하여 API에서 소개팅 정보를 가져옵니다
  const [dating] = useState(MOCK_DATING);
  const [copySuccess, setCopySuccess] = useState(false);

  const participantLink = `${window.location.origin}/join/${accessCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(participantLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const startDating = () => {
    console.log('소개팅 시작');
    // 상태 업데이트 및 페이지 전환 로직
  };

  const headerRight = <HostLabel>호스트 모드</HostLabel>;

  return (
    <BaseLayout rightContent={headerRight}>
      <MainContent>
        <DatingInfoSection>
          <h2>소개팅 정보</h2>
          <DatingInfoCard>
            <DatingTitle>{dating.title}</DatingTitle>
            <DatingMeta>
              <MetaItem>
                <Label>참가 코드</Label>
                <Value>{dating.accessCode}</Value>
              </MetaItem>
              <MetaItem>
                <Label>참가자</Label>
                <Value>남성 {dating.maleCount}명 / 여성 {dating.femaleCount}명</Value>
              </MetaItem>
              <MetaItem>
                <Label>대화 시간</Label>
                <Value>{dating.timeLimit}분</Value>
              </MetaItem>
              <MetaItem>
                <Label>생성 일시</Label>
                <Value>{new Date(dating.createdAt).toLocaleString()}</Value>
              </MetaItem>
            </DatingMeta>
          </DatingInfoCard>
        </DatingInfoSection>

        <ShareSection>
          <h2>참가자 초대하기</h2>
          <ShareCard>
            <p>아래 링크를 참가자들에게 공유하세요. 참가자들은 링크를 통해 소개팅에 참여할 수 있습니다.</p>
            <LinkContainer>
              <LinkInput value={participantLink} readOnly />
              <CopyButton onClick={copyLink}>
                {copySuccess ? '복사 완료!' : '링크 복사'}
              </CopyButton>
            </LinkContainer>
          </ShareCard>
        </ShareSection>

        <ParticipantsSection>
          <SectionHeader>
            <h2>참가자 현황</h2>
            <ParticipantCount>
              {dating.participants.length}/{dating.maleCount + dating.femaleCount}명 참여
            </ParticipantCount>
          </SectionHeader>

          {dating.participants.length === 0 ? (
            <EmptyState>
              <p>아직 참가자가 없습니다. 링크를 공유하여 참가자들을 초대해보세요.</p>
            </EmptyState>
          ) : (
            <ParticipantsList>
              {/* 참가자 목록이 여기에 렌더링됩니다 */}
            </ParticipantsList>
          )}
        </ParticipantsSection>

        <ActionSection>
          <p>모든 참가자가 입장하면 소개팅을 시작할 수 있습니다.</p>
          <Button
            onClick={startDating}
            disabled={dating.participants.length < 2}
            size="large"
          >
            소개팅 시작하기
          </Button>
        </ActionSection>
      </MainContent>
    </BaseLayout>
  );
};

const HostLabel = styled.span`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const DatingInfoSection = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const DatingInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const DatingTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const DatingMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const Value = styled.div`
  font-weight: 500;
  color: #333;
`;

const ShareSection = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const ShareCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  p {
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const LinkInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  background-color: #f9f9f9;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
  }
`;

const CopyButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ec407a;
  }
`;

const ParticipantsSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const ParticipantCount = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const EmptyState = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  p {
    color: #666;
  }
`;

const ParticipantsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const ActionSection = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  
  p {
    margin-bottom: 1rem;
    color: #666;
  }
`;

export default BoardPage; 
