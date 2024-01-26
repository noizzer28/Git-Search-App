import { styled } from 'styled-components'

export const SearchWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`
export const Title = styled.h1``
export const ErrorSearch = styled.h3`
  color: red;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  bottom: -25px;
  left: 5px;
`
export const MainButton = styled.button`
  width: 120px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
`
export const InputWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
`

export const MainInput = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:invalid:focus {
    outline: none;
    border: red solid 2px;
  }
`
