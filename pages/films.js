import dynamic from 'next/dynamic'

const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
  const { ApolloTableQL } = m
  return ApolloTableQL
}), { ssr: false })

const ALL_FILMS = `{
  allFilms {
    episodeId
  	title
    releaseDate
	}
}`

export default function Films() {
  return (
    <div>
      <h1>Films</h1>
      <ApolloTableQL query={ALL_FILMS} sort />
    </div>
  )
}
