import ErrorIcon from '@/assets/images/server-error.svg';

import * as S from './style';

export default function ErrorPage() {
  return (
    <S.ErrorPage>
      <S.ErrorTitle>Error</S.ErrorTitle>
      <ErrorIcon height={100} />
    </S.ErrorPage>
  );
}
