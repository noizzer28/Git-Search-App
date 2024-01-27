import { Search } from '../search/search'
import { Header } from '../header/header'
import { useSelector } from 'react-redux'
import { Sorting } from '../sorting/sorting'
import { Users } from '../users/users'
import { Pagination } from '../pagination/pagination'
import '../../globalStyles.css'

export const Main = () => {
  const users = useSelector((state) => state.users.users)

  return (
    <>
      <Header></Header>
      <Search></Search>
      <Sorting></Sorting>

      {users.length > 0 && (
        <>
          <Users users={users}></Users>{' '}
          <div className="paginationWrapper">
            <Pagination></Pagination>
          </div>
        </>
      )}
    </>
  )
}
