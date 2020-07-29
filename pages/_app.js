import Link from 'next/link'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import '../styles/globals.css'

function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://swapi.graph.cool',
    ssrMode: true
  })

  return (
    <>
      <div style={{display: "flex"}}>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/"><a>Home</a></Link>
        </div>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/films"><a>Films</a></Link>
        </div>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/foo"><a>Foo</a></Link>
        </div>
      </div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default App
