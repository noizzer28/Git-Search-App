import { styled } from 'styled-components'

export const UsersWrapper = styled.div`
  margin-top: 60px;
  justify-content: space-between;
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 10px;
  padding: 30px;
  margin: 60px 100px;
  justify-content: space-between;
`
export const UserMinWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 10px;
  padding: 20px 20px 20px 60px;
  margin: 20px 100px;
  justify-content: space-between;
`
export const UserImg = styled.img`
  width: 150px;
  height: 150px;
`
export const UserInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Button = styled.a`
  width: 180px;
  height: 50px;
  background-color: #009ee4;
  border-radius: 10px;
  border: 1px solid #009ee4;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0080c1;
  }

  &:active {
    background-color: #015681;
  }
`
export const ShowArrow = styled.div`
  & img {
    width: 40px;
    height: 40px;
  }
`
export const ShowRotatedArrow = styled.div`
  & img {
    transform: rotate(180deg);
    width: 40px;
    height: 40px;
  }
`
export const UserInfoFlex = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h2``
export const Subtitle = styled.h3`
  font-weight: 400;
`
