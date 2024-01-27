import ResponsivePagination from 'react-responsive-pagination'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-responsive-pagination/themes/minimal.css'
import { setPage } from '../../store/usersSlice'

export const Pagination = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const totalCount = useSelector((state) => state.users.totalCount)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    dispatch(setPage(page))
  }
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalCount}
      onPageChange={(page) => handlePageChange(page)}
    ></ResponsivePagination>
  )
}
