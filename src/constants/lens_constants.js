import { ApolloClient, InMemoryCache } from "@apollo/client";

// Uses lens protocol graph API as our indexer
const API_URL = "https://api.lens.dev";

// this client will make API calls to and from the lens protocol API
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
