import { useState } from 'react';
import { useNavigate } from 'react-router';

import { UserRole, useUserStore } from '@/stores/useUserStore';
import { MeetingStatus } from '@/types/meeting';
import { useToast } from '@/components/Common/Toast/hooks/useToast';
import Toast from '@/components/Common/Toast';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

import CreateDatingModal, { MeetingFormData } from './components/CreateDatingModal';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import useCreateMeeting from './hooks/mutations/useCreateMeeting';
import useMeetingForParticipant from './hooks/queries/useMeetingForParticipant';
import useMeetingForHost from './hooks/queries/useMeetingForHost';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, clearUser } = useUserStore();
  const { toast, showToast } = useToast();

  const { mutate: createMeeting } = useCreateMeeting();

  const { data: meetingForHost } = useMeetingForHost(
    { hostId: user?.id ?? '' },
    {
      enabled: !!user?.id && user?.role === UserRole.HOST,
    },
  );
  const { data: meeting } = useMeetingForParticipant(
    { participantId: user?.id ?? '' },
    {
      enabled: !!user?.id && user?.role === UserRole.PARTICIPANT,
    },
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickHostMeeting = () => {
    if (meetingForHost) {
      navigate(`/board/${meetingForHost._id}`);
    } else {
      showToast('진행중인 소개팅이 없습니다', 'error');
    }
  };

  const handleClickMeeting = () => {
    switch (meeting?.status) {
      case MeetingStatus.PENDING:
        navigate(`/waiting/${meeting?._id}`);
        break;
      case MeetingStatus.ONGOING:
        navigate(`/dating/${meeting?._id}`);
        break;
      case MeetingStatus.COMPLETED:
        navigate(`/results/${meeting?._id}`);
        break;
      default:
        showToast('참여 중인 소개팅이 없습니다', 'error');
        break;
    }
  };

  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickLogout = () => {
    localStorage.removeItem('access_token');
    clearUser();
    navigate('/');
  };

  const handleCreateDating = (datingData: MeetingFormData) => {
    const meetingRequestData = {
      ...datingData,
      hostId: user?.id,
    };

    createMeeting(meetingRequestData, {
      onSuccess: (response) => {
        closeModal();
        navigate(`/board/${response.data.id}`);
      },
      onError: (error) => {
        console.error('소개팅 생성 실패:', error);
      },
    });
  };

  const headerContent = (
    <>
      {user?.role && (
        <Button size='small' onClick={handleClickLogout}>
          로그아웃
        </Button>
      )}
    </>
  );

  return (
    <>
      <BaseLayout rightContent={headerContent}>
        <HeroSection
          userRole={user?.role}
          hasActiveMeeting={!!meetingForHost}
          onLoginClick={handleClickLogin}
          onCreateDatingClick={openModal}
          onActiveMeetingClick={handleClickHostMeeting}
          onParticipantMeetingClick={handleClickMeeting}
        />

        <ProcessSection />

        {isModalOpen && <CreateDatingModal onClose={closeModal} onSubmit={handleCreateDating} />}
      </BaseLayout>

      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </>
  );
}
