import { useState } from 'react';
import { MessageCircleHeart, MessageCircleQuestion, MessageCircleX, User } from 'lucide-react';

import { Meeting } from '@/types/meeting';
import { Gender } from '@/types';

import useCurrentRooms from '../../hooks/queries/useCurrentRooms';

import * as S from './style';

interface OnGoingBoardProps {
  meeting: Meeting;
}

export default function OnGoingBoard({ meeting }: OnGoingBoardProps) {
  const { data: currentRooms } = useCurrentRooms({ meetingId: meeting.id });

  const [expandedRoom, setExpandedRoom] = useState<string[]>([]);

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
                    {room.maleLiked === null && <MessageCircleQuestion size={32} />}
                    {room.maleLiked === true && <MessageCircleHeart size={32} />}
                    {room.maleLiked === false && <MessageCircleX size={32} />}
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
                    {room.femaleLiked === null && <MessageCircleQuestion size={32} />}
                    {room.femaleLiked === true && <MessageCircleHeart size={32} color='red' />}
                    {room.femaleLiked === false && <MessageCircleX size={32} color='blue' />}
                  </S.Like>
                </S.RowContent>
              )}
            </S.Participant>
          </S.Room>
        </S.Wrapper>
      ))}
    </>
  );
}
