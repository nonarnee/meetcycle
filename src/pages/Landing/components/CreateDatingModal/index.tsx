import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Users, User, X, MessageSquare } from 'lucide-react';

import Button from '@/components/Common/Button';

import * as S from './style';

interface CreateDatingModalProps {
  onClose: () => void;
  onSubmit: (eventData: MeetingFormData) => void;
}

export interface MeetingFormData {
  title: string;
  maleCount: number;
  femaleCount: number;
  location: string;
  dateTime: string;
  roomDurationMinutes: number;
}

export default function CreateDatingModal({ onClose, onSubmit }: CreateDatingModalProps) {
  const [formData, setFormData] = useState<MeetingFormData>({
    title: '',
    maleCount: 3,
    femaleCount: 3,
    location: '',
    dateTime: '',
    roomDurationMinutes: 10,
  });
  const [error, setError] = useState<string>('');

  const validate = () => {
    if (!formData.title) {
      setError('소개팅 이름을 입력해주세요.');
      return false;
    }
    if (formData.maleCount < 2 || formData.femaleCount < 2) {
      setError('남녀 각각 최소 2명 이상 필요합니다.');
      return false;
    }
    if (formData.femaleCount > 10 || formData.maleCount > 10) {
      setError('남녀 각각 최대 10명까지 가능합니다.');
      return false;
    }
    if (formData.maleCount !== formData.femaleCount) {
      setError('남녀 인원이 같아야 합니다.');
      return false;
    }
    if (!formData.location) {
      setError('장소를 입력해주세요.');
      return false;
    }
    if (!formData.dateTime) {
      setError('시간을 입력해주세요.');
      return false;
    }
    if (
      !formData.roomDurationMinutes ||
      formData.roomDurationMinutes < 5 ||
      formData.roomDurationMinutes > 60
    ) {
      setError('올바른 대화 시간을 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <S.ModalOverlay onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <S.ModalContainer onClick={(e) => e.stopPropagation()}>
              <S.ModalHeader>
                <h2>소개팅 개설하기</h2>
                <S.CloseButton onClick={onClose}>
                  <X size={20} />
                </S.CloseButton>
              </S.ModalHeader>
              <S.ModalScrollContent>
                <S.ModalDescription>
                  새로운 소개팅을 개설하고 참여자들을 초대해보세요.
                </S.ModalDescription>

                <S.Form onSubmit={handleSubmit}>
                  <S.FormGroup>
                    <S.Label htmlFor='title'>소개팅 이름</S.Label>
                    <S.InputWrapper>
                      <S.InputIcon>
                        <MessageSquare size={18} />
                      </S.InputIcon>
                      <S.Input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        placeholder='예: 로테이션 소개팅'
                        required
                      />
                    </S.InputWrapper>
                  </S.FormGroup>

                  <S.FormRow>
                    <S.FormGroup>
                      <S.Label htmlFor='maleCount'>남성 인원</S.Label>
                      <S.InputWrapper>
                        <S.InputIcon>
                          <User size={18} />
                        </S.InputIcon>
                        <S.Input
                          type='number'
                          id='maleCount'
                          name='maleCount'
                          value={formData.maleCount}
                          onChange={handleChange}
                          min={2}
                          max={10}
                          required
                        />
                      </S.InputWrapper>
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor='femaleCount'>여성 인원</S.Label>
                      <S.InputWrapper>
                        <S.InputIcon>
                          <Users size={18} />
                        </S.InputIcon>
                        <S.Input
                          type='number'
                          id='femaleCount'
                          name='femaleCount'
                          value={formData.femaleCount}
                          onChange={handleChange}
                          min={2}
                          max={10}
                          required
                        />
                      </S.InputWrapper>
                    </S.FormGroup>
                  </S.FormRow>

                  <S.FormGroup>
                    <S.Label htmlFor='location'>장소</S.Label>
                    <S.InputWrapper>
                      <S.InputIcon>
                        <MapPin size={18} />
                      </S.InputIcon>
                      <S.Input
                        type='text'
                        id='location'
                        name='location'
                        value={formData.location}
                        onChange={handleChange}
                        placeholder='예: 신촌 카페'
                        required
                      />
                    </S.InputWrapper>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor='dateTime'>날짜/시간</S.Label>
                    <S.InputWrapper>
                      <S.InputIcon>
                        <Calendar size={18} />
                      </S.InputIcon>
                      <S.Input
                        type='text'
                        id='dateTime'
                        name='dateTime'
                        value={formData.dateTime}
                        onChange={handleChange}
                        placeholder='예: 2023년 12월 25일 오후 3시'
                        required
                      />
                    </S.InputWrapper>
                  </S.FormGroup>

                  <S.FormGroup>
                    <S.Label htmlFor='roomDurationMinutes'>대화시간 (분)</S.Label>
                    <S.InputWrapper>
                      <S.InputIcon>
                        <Clock size={18} />
                      </S.InputIcon>
                      <S.Input
                        type='number'
                        id='roomDurationMinutes'
                        name='roomDurationMinutes'
                        value={formData.roomDurationMinutes}
                        onChange={handleChange}
                        min={5}
                        max={60}
                        placeholder='5분 ~ 60분'
                        required
                      />
                    </S.InputWrapper>
                    <S.HelpText>
                      각 참가자가 대화할 시간을 5분에서 60분 사이로 설정하세요.
                    </S.HelpText>
                  </S.FormGroup>

                  {error && (
                    <S.ErrorMessage>
                      <S.AlertIcon>!</S.AlertIcon>
                      {error}
                    </S.ErrorMessage>
                  )}

                  <S.ButtonGroup>
                    <Button variant='tertiary' type='button' onClick={onClose}>
                      취소
                    </Button>
                    <Button variant='primary' type='submit'>
                      개설하기
                    </Button>
                  </S.ButtonGroup>
                </S.Form>
              </S.ModalScrollContent>
            </S.ModalContainer>
          </motion.div>
        </S.ModalOverlay>
      </motion.div>
    </AnimatePresence>
  );
}
