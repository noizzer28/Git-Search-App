import * as S from './app.styles'
import { store } from './store/store'
import { Provider } from 'react-redux'
import AppRoutes from './routes/routes'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <S.GlobalStyles />
        <S.Wrapper>
          <AppRoutes />
        </S.Wrapper>
      </Provider>
    </>
  )
}
