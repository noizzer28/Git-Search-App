import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    sorting: 'asc',
    totalCount: '',
    currentPage: 1,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setSorting(state, action) {
      state.sorting = action.payload
    },
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setTotalCount(state, action) {
      if (action.payload >= 1000) {
        state.totalCount = 100
      } else {
        state.totalCount = Math.ceil(action.payload / 10)
      }
    },
  },
})

export const { setUsers, setSorting, setTotalCount, setPage } =
  usersSlice.actions

export default usersSlice.reducer
