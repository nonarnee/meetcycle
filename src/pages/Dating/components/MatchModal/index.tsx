import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Heart, X, ThumbsUp, ThumbsDown } from 'lucide-react';

import Button from '@/components/Common/Button';

import * as S from './style';

interface MatchModalProps {
  onClose: () => void;
  onSelect: (like: boolean) => void;
}

export default function MatchModal({ onClose, onSelect }: MatchModalProps) {
  const [like, setLike] = useState<boolean | null>(null);

  const handleSelectMatch = () => {
    if (like === null) {
      alert('선택을 해주세요.');
      return;
    }

    onSelect(like);
  };

  return (
    <AnimatePresence>
      <S.ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <S.ModalContent
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <S.ModalHeader>
            <S.ModalTitle>
              <S.HeartIcon>
                <Heart size={24} />
              </S.HeartIcon>
              상대방과의 시간은 어떠셨나요?
            </S.ModalTitle>
            <S.CloseButton onClick={onClose}>
              <X size={20} />
            </S.CloseButton>
          </S.ModalHeader>

          <S.ModalBody>
            <S.ChoiceContainer>
              <S.ChoiceOption
                selected={like === true}
                positive={true}
                onClick={() => setLike(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <S.ChoiceIconWrapper positive={true}>
                  <ThumbsUp size={24} />
                </S.ChoiceIconWrapper>
                <S.ChoiceContent>
                  <S.ChoiceTitle>마음에 들어요</S.ChoiceTitle>
                  <S.ChoiceDescription>
                    이 사람과 더 알아가고 싶어요.
                    <br />
                    서로 마음이 맞으면 연락처가 공유됩니다.
                  </S.ChoiceDescription>
                </S.ChoiceContent>
              </S.ChoiceOption>

              <S.ChoiceOption
                selected={like === false}
                positive={false}
                onClick={() => setLike(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <S.ChoiceIconWrapper positive={false}>
                  <ThumbsDown size={24} />
                </S.ChoiceIconWrapper>
                <S.ChoiceContent>
                  <S.ChoiceTitle>아쉬워요</S.ChoiceTitle>
                  <S.ChoiceDescription>
                    이 사람과는 잘 맞지 않는 것 같아요.
                    <br />
                    다른 분과 더 잘 맞을 수 있어요.
                  </S.ChoiceDescription>
                </S.ChoiceContent>
              </S.ChoiceOption>
            </S.ChoiceContainer>
          </S.ModalBody>

          <S.ModalFooter>
            <Button
              variant='tertiary'
              size='medium'
              onClick={onClose}
              icon={<X size={18} />}
              iconPosition='left'
            >
              취소
            </Button>
            <Button
              variant='primary'
              size='medium'
              onClick={handleSelectMatch}
              disabled={like === null}
              icon={<Heart size={18} />}
              iconPosition='left'
            >
              선택 완료
            </Button>
          </S.ModalFooter>
        </S.ModalContent>
      </S.ModalOverlay>
    </AnimatePresence>
  );
}
