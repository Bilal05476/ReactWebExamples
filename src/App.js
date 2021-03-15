import React from "react";
// import client from './config/gql_config';
// import { ApolloProvider } from '@apollo/client';
import StrapiApi from "./components/StrapiApi/StrapiApi";
const App = () => {
  return (
    // <ApolloProvider client={client}>
    //   <div>
    //     <Api />
    //   </div>
    // </ApolloProvider>
    <StrapiApi />
  );
};

export default App;
