import * as S from './users.styles'
import { useState } from 'react'

export const Users = ({ users }) => {
  const [openUser, setOpenUser] = useState('')
  const toggleUser = (id) => {
    if (openUser === '') {
      setOpenUser(id)
    } else {
      setOpenUser('')
    }
  }
  return (
    <S.UsersWrapper>
      {users.map((user, index) => {
        if (openUser === user.id) {
          return (
            <S.UserWrapper key={index} onClick={() => toggleUser(user.id)}>
              <S.UserInfoFlex>
                <S.UserImg src={user.avatar_url}></S.UserImg>
                <S.UserInfo>
                  <S.Title>{user.login}</S.Title>
                  <S.Subtitle>User ID: {user.id}</S.Subtitle>
                  <S.Button
                    href={user.html_url}
                    target="blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Перейти на GitHub
                  </S.Button>
                </S.UserInfo>
              </S.UserInfoFlex>
              <S.ShowRotatedArrow>
                <img src="/img/dropdown.png" alt="no" />
              </S.ShowRotatedArrow>
            </S.UserWrapper>
          )
        } else {
          return (
            <S.UserMinWrapper key={index} onClick={() => toggleUser(user.id)}>
              <S.Title>{user.login}</S.Title>
              <S.ShowArrow>
                <img src="/img/dropdown.png" alt="no" />
              </S.ShowArrow>
            </S.UserMinWrapper>
          )
        }
      })}
    </S.UsersWrapper>
  )
}
