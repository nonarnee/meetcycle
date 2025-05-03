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

export const ChartSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const ChartContainer = styled.div`
  height: 300px;
  margin: 0 auto;
  max-width: 500px;
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const FilterControls = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  min-width: 120px;
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

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
`;

export const RateBar = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 8px;

  span {
    position: relative;
    z-index: 1;
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
  }
`;

export const RateBarFill = styled.div<{ width: string }>`
  position: absolute;
  left: 0;
  height: 100%;
  background-color: #007bff;
  width: ${(props) => props.width};
  opacity: 0.7;
`;

export const ParticipantCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  & + & {
    margin-top: 1rem;
  }
`;

export const ParticipantRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

export const ParticipantValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;
