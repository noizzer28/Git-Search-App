import * as S from './notFound.styles'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  console.log('not found')
  return (
    <S.NotFound>
      <S.Title>К сожалению, вызываемая страница не существует</S.Title>
      <S.NotFoundImg src="/img/notFound.png"></S.NotFoundImg>
      <Link to={'/'}>
        <S.Button>На главную</S.Button>
      </Link>
    </S.NotFound>
  )
}
