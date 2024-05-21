import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

// sem redux:
// useEffect(() => {
//   fetch('http://localhost:4000/produtos')
//     .then((res) => res.json())
//     .then((res) => setGames(res))
// }, [])

//c com redux:
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api
export default api
