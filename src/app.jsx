import * as S from './app.styles'

import AppRoutes from './routes/routes'

export const App = () => {
  return (
    <>
      <S.GlobalStyles />
      <S.Wrapper>
        <AppRoutes />
      </S.Wrapper>
    </>
  )
}
