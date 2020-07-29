import { ApolloTableQL } from 'react-tableql'

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
      <ApolloTableQL query={ALL_FILMS} />
    </div>
  )
}
