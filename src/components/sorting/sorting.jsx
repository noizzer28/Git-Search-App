import * as S from './sorting.styles'
import { useState } from 'react'
import Select from 'react-dropdown-select'
import '../../globalStyles.css'
import { useDispatch } from 'react-redux'
import { setSorting } from '../../store/usersSlice'

export const Sorting = () => {
  const dispatch = useDispatch()
  const options = [
    {
      value: 'asc',
      label: 'По возрастанию',
    },
    {
      value: 'desc',
      label: 'По убыванию',
    },
  ]
  const defaultOption = options[0]
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const handleSelect = (selected) => {
    dispatch(setSorting(selected[0].value))
    setSelectedOption(selected)
  }
  return (
    <S.SortingWrapper datatype="sortingwrapper">
      <S.FlexWrapper>
        <S.TitleWrap datatype="titlewrap">
          <S.Title>Сортировка</S.Title>
        </S.TitleWrap>
        <Select
          className="dropdown"
          controlClassName="dropdown"
          options={options}
          onChange={handleSelect}
          value={selectedOption}
          placeholder={defaultOption.label}
        ></Select>
      </S.FlexWrapper>
    </S.SortingWrapper>
  )
}
