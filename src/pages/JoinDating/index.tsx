import { useParams, useNavigate } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';
import { ParticipantForm } from '@/types';

import BaseLayout from '../../components/Layout/BaseLayout';

import useCreateParticipant from './hooks/mutations/useCreateParticipant';
import JoinDatingForm from './components/JoinDatingForm';
import * as S from './style';

const JoinDatingPage = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const navigate = useNavigate();

  const { setUser } = useUserStore();
  const { mutate: createParticipant, isPending: isCreatingParticipant } = useCreateParticipant();

  const handleSubmit = (participant: ParticipantForm) => {
    if (!meetingId) {
      return;
    }

    createParticipant(
      { meetingId, participant },
      {
        onSuccess: (response) => {
          const { access_token, ...user } = response.data;

          // 참여자 로그인 처리
          localStorage.setItem('access_token', access_token);
          setUser(user);

          // 대기실 페이지로 이동
          navigate(`/waiting/${meetingId}`, { replace: true });
        },
      },
    );
  };

  return (
    <BaseLayout>
      <S.Container>
        <JoinDatingForm onSubmit={handleSubmit} isPending={isCreatingParticipant} />
      </S.Container>
    </BaseLayout>
  );
};

export default JoinDatingPage;
