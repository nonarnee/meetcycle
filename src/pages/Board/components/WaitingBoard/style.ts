import styled from '@emotion/styled';

import { Gender } from '@/types';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ShareSection = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const ShareCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
`;

export const ShareDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const QRCode = styled.div`
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`;

export const LinkDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  font-size: 0.875rem;
  color: #555;

  &:focus {
    outline: none;
    border-color: #f06292;
  }
`;

export const CopyButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #ec407a;
  }
`;

export const ParticipantsSection = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ParticipantCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #555;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
`;

export const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const EmptyText = styled.p`
  color: #666;
  font-size: 1.125rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background-color: #f5f5f5;
  }
`;

export const ParticipantAvatar = styled.div<{ gender: Gender }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.gender === Gender.MALE ? '#bbdefb' : '#f8bbd0')};
  color: ${(props) => (props.gender === Gender.MALE ? '#1976d2' : '#c2185b')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  flex-shrink: 0;
`;

export const ParticipantInfo = styled.div`
  flex: 1;
`;

export const ParticipantName = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

export const ParticipantDetail = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const ActionSection = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const ActionDescription = styled.p`
  color: #555;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
`;

export const StartButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #ec407a;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(240, 98, 146, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const RequirementMessage = styled.p`
  font-size: 0.875rem;
  color: #f06292;
  margin-top: 1rem;
`;
