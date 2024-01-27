export const getUsers = async ({ searchValue, sort, order, page }) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchValue}&sort=${sort}&order=${order}&per_page=10&page=${page}`,
      {
        method: 'GET',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    )
    console.log(response)
    if (response.status === 200) {
      return response.json()
    }

    if (response.status === 304) {
      throw new Error('Not modified')
    }
    if (response.status === 403) {
      throw new Error('Превышено количество запросов к серверу')
    }

    if (response.status === 422) {
      throw new Error('Доступны только первые 1000 пользователей')
    }

    if (response.status === 503) {
      throw new Error('Сервер не отвечает')
    }

    throw new Error('Неизвестная ошибка, попробуйте позже')
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
