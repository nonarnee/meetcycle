import { Meeting } from '@/types/meeting';

interface CompleteBoardProps {
  meeting: Meeting;
}

export default function CompleteBoard({ meeting }: CompleteBoardProps) {
  console.log(meeting);
  return <div>CompleteBoard</div>;
}
