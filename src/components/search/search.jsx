import * as S from './search.styles.jsx'
import { useState, useEffect } from 'react'

export const Search = () => {
  const [inputError, setInputError] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const regExp = '^[A-Za-z0-9]+$'

  const handleSearch = () => {}

  useEffect(() => {
    if (searchValue.match(regExp) || searchValue === '') {
      setInputError(false)
    } else {
      setInputError(true)
    }
  }, [searchValue])
  return (
    <>
      <S.SearchWrapper>
        <S.Title>Введите логин для поиска пользователя на GitHub </S.Title>
        <S.InputWrapper data-id="search-wrapper">
          <S.MainInput
            type="text"
            pattern={regExp}
            placeholder="Поиск пользователя"
            onChange={(e) => setSearchValue(e.target.value)}
          ></S.MainInput>
          <S.MainButton onClick={handleSearch}>Поиск</S.MainButton>
          {inputError && (
            <S.ErrorSearch>Допустима только латиница</S.ErrorSearch>
          )}
        </S.InputWrapper>
      </S.SearchWrapper>
    </>
  )
}
