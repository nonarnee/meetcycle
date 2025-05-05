import { motion } from 'motion/react';
import { Phone, Heart, User } from 'lucide-react';

import type { ParticipantPrivate } from '@/types/participant';

import * as S from './style';

interface ResultsListProps {
  participants: ParticipantPrivate[];
}

export default function ResultsList({ participants }: ResultsListProps) {
  return (
    <S.ResultsContainer>
      <S.ResultsHeader>
        <S.ResultsTitle>나의 매칭 결과</S.ResultsTitle>
        <S.ResultsSummary>총 {participants.length}명과 매칭되었습니다!</S.ResultsSummary>
      </S.ResultsHeader>

      {participants.length > 0 ? (
        <S.MatchesList>
          {participants.map((partner, index) => (
            <motion.div
              key={partner._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <S.MatchCard>
                <S.MatchAnimation>
                  <Heart size={32} color='#f06292' />
                </S.MatchAnimation>
                <S.MatchInfo>
                  <S.MatchName>{partner.nickname}</S.MatchName>
                  <S.MatchDetails>
                    <S.MatchDetail>
                      <User size={16} />
                      {partner.age}세
                    </S.MatchDetail>
                    <S.MatchDetail>
                      <User size={16} />
                      {partner.job}
                    </S.MatchDetail>
                  </S.MatchDetails>
                  <S.MatchContact>
                    <Phone size={16} />
                    {partner.phone}
                  </S.MatchContact>
                  <S.MatchComment>{partner.comment}</S.MatchComment>
                </S.MatchInfo>
              </S.MatchCard>
            </motion.div>
          ))}
        </S.MatchesList>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <S.NoMatchesCard>
            <S.NoMatchesIcon>💔</S.NoMatchesIcon>
            <S.NoMatchesTitle>매칭된 상대가 없습니다</S.NoMatchesTitle>
            <S.NoMatchesMessage>
              이번에는 매칭된 상대가 없네요. 다음 소개팅에서 더 좋은 인연을 만나보세요!
            </S.NoMatchesMessage>
          </S.NoMatchesCard>
        </motion.div>
      )}
    </S.ResultsContainer>
  );
}
