import * as S from './search.styles.jsx'
import { useState, useEffect } from 'react'
import { getUsers } from '../../api.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, setTotalCount } from '../../store/usersSlice.jsx'
import { MagnifyingGlass } from 'react-loader-spinner'

export const Search = () => {
  const sorting = useSelector((state) => state.users.sorting)
  const page = useSelector((state) => state.users.currentPage)
  const dispatch = useDispatch()
  const [inputError, setInputError] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const regExp = '^[A-Za-z0-9]+$'
  const wrapperStyle = {
    position: 'absolute',
    left: '-200px',
  }

  useEffect(() => {
    handleSearch()
  }, [page, sorting])

  const handleSearch = async () => {
    if (searchValue !== '') {
      setLoading(true)
      try {
        await getUsers({
          searchValue: searchValue,
          sort: 'repositories',
          order: sorting,
          page: page,
        }).then((response) => {
          setError('')
          dispatch(setUsers(response.items))
          dispatch(setTotalCount(response.total_count))
          setLoading(false)
        })
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
  }

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
          {isLoading && (
            <MagnifyingGlass
              visible={true}
              height="160"
              width="160"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={wrapperStyle}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#d7f6fa"
              color="#009EE4"
            />
          )}
          <S.MainInput
            type="text"
            pattern={regExp}
            placeholder="Поиск пользователя"
            onChange={(e) => setSearchValue(e.target.value)}
          ></S.MainInput>
          <S.MainButton
            onClick={handleSearch}
            disabled={inputError ? true : false}
          >
            Поиск
          </S.MainButton>
          {inputError && (
            <S.ErrorSearch>⚠ Допустима только латиница</S.ErrorSearch>
          )}
        </S.InputWrapper>
      </S.SearchWrapper>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}
