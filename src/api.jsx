export const getUsers = async ({ searchValue, sort, order, page }) => {
  return fetch(
    `https://api.github.com/search/users?q=${searchValue}&sort=${sort}&order=${order}&per_page=15&page=${page}`,
    {
      method: 'GET',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  ).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    if (response.status === 304) {
      throw new Error('Not modified')
    }
    if (response.status === 304) {
      throw new Error('Validation failed, or the endpoint has been spammed')
    }
    if (response.status === 404) {
      throw new Error('Not Found')
    }
    if (response.status === 422) {
      throw new Error('Only the first 1000 search results are available')
    }
    if (response.status === 503) {
      throw new Error('Service unavailable')
    }
    throw new Error('Неизвестная ошибка, попробуйте позже')
  })
}
