import styled from '@emotion/styled';

export const HostResultsContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SummaryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }
`;

export const ParticipantResultsSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  & + & {
    margin-top: 2rem;
  }
`;

export const ParticipantTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f1f1f1;
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background-color: #f1f1f1;
  }
`;

export const ParticipantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const ParticipantRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ParticipantValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
