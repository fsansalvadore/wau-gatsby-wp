import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://www.fsansalvadore.com/dev/wau/wp/graphql',
  fetch
})