import { useState } from 'react';
import { MessageCircleHeart, MessageCircleQuestion, MessageCircleX, User } from 'lucide-react';

import { Meeting } from '@/types/meeting';
import { Gender } from '@/types';
import { queryClient } from '@/lib/queryClient';
import Button from '@/components/Common/Button';

import useCurrentRooms from '../../hooks/queries/useCurrentRooms';
import useNextCycleMutation from '../../hooks/mutations/useNextCycleMutation';
import useCurrentEvaluations from '../../hooks/queries/useCurrentEvaluations';
import { getEvaluation } from '../../utils/getEvaluation';

import * as S from './style';

interface OnGoingBoardProps {
  meeting: Meeting;
}

export default function OnGoingBoard({ meeting }: OnGoingBoardProps) {
  const { data: currentRooms } = useCurrentRooms({ meetingId: meeting._id });
  const { data: currentEvaluations } = useCurrentEvaluations(
    {
      meetingId: meeting._id,
    },
    {
      refetchInterval: 3000,
    },
  );
  const { mutate: nextCycle, isPending: isNextCyclePending } = useNextCycleMutation();

  const [expandedRoom, setExpandedRoom] = useState<string[]>([]);

  const handleNextCycle = () => {
    if (isNextCyclePending) return;

    if (window.confirm('다음 단계로 넘어가시겠습니까?')) {
      nextCycle(meeting._id, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            predicate: (query) =>
              query.queryKey.every((key) =>
                ['currentRooms', 'currentCycle'].includes(key as string),
              ),
          });
          setExpandedRoom([]);
          scrollTo({ top: 0, behavior: 'smooth' });
        },
      });
    }
  };

  const toggleRoom = (roomId: string) => {
    if (expandedRoom.includes(roomId)) {
      setExpandedRoom(expandedRoom.filter((id) => id !== roomId));
    } else {
      setExpandedRoom([...expandedRoom, roomId]);
    }
  };

  return (
    <>
      {currentRooms?.map((room, index) => (
        <S.Wrapper key={room._id} onClick={() => toggleRoom(room._id)}>
          <S.Title>{index + 1}</S.Title>
          <S.Room>
            <S.Participant gender={Gender.MALE}>
              <S.RowHeader>
                <S.Avatar className='male'>
                  <User />
                </S.Avatar>
                <S.NickName>{room.maleParticipant.nickname}</S.NickName>
                <S.Badge className='male'>남</S.Badge>
              </S.RowHeader>
              {expandedRoom.includes(room._id) && (
                <S.RowContent>
                  <S.ParticipantInfo>
                    <S.Row>
                      <strong>나이 </strong>
                      {room.maleParticipant.age}
                    </S.Row>
                    <S.Row>
                      <strong>직업 </strong>
                      {room.maleParticipant.job}
                    </S.Row>
                    <S.Row>
                      <strong>코멘트 </strong>
                      {room.maleParticipant.comment}
                    </S.Row>
                  </S.ParticipantInfo>
                  <S.Like>
                    {getEvaluation(currentEvaluations ?? [], room.maleParticipant._id) === null && (
                      <MessageCircleQuestion size={32} color='gray' />
                    )}
                    {getEvaluation(currentEvaluations ?? [], room.maleParticipant._id) === true && (
                      <MessageCircleHeart size={32} color='red' />
                    )}
                    {getEvaluation(currentEvaluations ?? [], room.maleParticipant._id) ===
                      false && <MessageCircleX size={32} color='blue' />}
                  </S.Like>
                </S.RowContent>
              )}
            </S.Participant>
            <S.Participant gender={Gender.FEMALE}>
              <S.RowHeader>
                <S.Avatar className='female'>
                  <User />
                </S.Avatar>
                <S.NickName>{room.femaleParticipant.nickname}</S.NickName>
                <S.Badge className='female'>여</S.Badge>
              </S.RowHeader>
              {expandedRoom.includes(room._id) && (
                <S.RowContent>
                  <S.ParticipantInfo>
                    <S.Row>
                      <strong>나이 </strong>
                      {room.femaleParticipant.age}
                    </S.Row>
                    <S.Row>
                      <strong>직업 </strong>
                      {room.femaleParticipant.job}
                    </S.Row>
                    <S.Row>
                      <strong>코멘트 </strong>
                      {room.femaleParticipant.comment}
                    </S.Row>
                  </S.ParticipantInfo>
                  <S.Like>
                    {getEvaluation(currentEvaluations ?? [], room.femaleParticipant._id) ===
                      null && <MessageCircleQuestion size={32} color='gray' />}
                    {getEvaluation(currentEvaluations ?? [], room.femaleParticipant._id) ===
                      true && <MessageCircleHeart size={32} color='red' />}
                    {getEvaluation(currentEvaluations ?? [], room.femaleParticipant._id) ===
                      false && <MessageCircleX size={32} color='blue' />}
                  </S.Like>
                </S.RowContent>
              )}
            </S.Participant>
          </S.Room>
        </S.Wrapper>
      ))}

      <S.ActionSection>
        <p>다음 단계 진행시 미응답자는 상대방을 선택하지 않은 것으로 처리됩니다.</p>
        <Button size='large' color='tomato' disabled={isNextCyclePending} onClick={handleNextCycle}>
          다음 단계로 넘어가기
        </Button>
      </S.ActionSection>
    </>
  );
}
