import { useState } from 'react';

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
    <S.ModalOverlay>
      <S.ModalContent>
        <h2>상대방과의 시간은 마음에 드셨나요?</h2>

        <S.MatchChoices>
          <S.MatchChoice selected={like === true} positive={true} onClick={() => setLike(true)}>
            <span>👍</span> 네, 더 알아가고 싶어요
          </S.MatchChoice>

          <S.MatchChoice selected={like === false} positive={false} onClick={() => setLike(false)}>
            <span>👎</span> 아니오, 저와는 잘 맞지 않아요
          </S.MatchChoice>
        </S.MatchChoices>

        <S.ModalActions>
          <Button onClick={onClose} variant='secondary' size='large'>
            취소
          </Button>
          <Button onClick={handleSelectMatch} variant='primary' size='large'>
            선택 완료
          </Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.ModalOverlay>
  );
}
