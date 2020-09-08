import Link from 'next/link'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import '../styles/globals.css'

function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://swapi.graph.cool',
    ssrMode: true,
    cache: new InMemoryCache()
  })

  return (
    <>
      <div style={{display: "flex"}}>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/"><a>Home</a></Link>
        </div>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/films"><a>Films (ApolloTableQL Example)</a></Link>
        </div>
        <div style={{padding: "10px", margin: "5px", border: "1px solid black"}}>
          <Link href="/table-ql"><a>TableQL Example</a></Link>
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
