import styled from '@emotion/styled';

import { Gender } from '@/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  & + & {
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  padding: 12px 16px;
  font-size: 18px;
  color: #333;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

export const Room = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1px;
  background-color: #e0e0e0;
`;

export const Participant = styled.div<{ gender: Gender }>`
  padding: 16px;
  background-color: white;
  transition: all 0.3s ease;
`;

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.male {
    background-color: #e3f2fd;
    color: #1976d2;
  }

  &.female {
    background-color: #fce4ec;
    color: #c2185b;
  }
`;

export const NickName = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const Badge = styled.span`
  font-size: 12px;
  font-weight: normal;
  padding: 2px 6px;
  border-radius: 12px;

  &.male {
    background-color: #e3f2fd;
    color: #1976d2;
  }

  &.female {
    background-color: #fce4ec;
    color: #c2185b;
  }
`;

export const RowContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed #e0e0e0;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  overflow-wrap: anywhere;

  & strong {
    margin-right: 4px;
  }
`;

export const Label = styled.div`
  font-size: 16px;
`;

export const Value = styled.div`
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;
