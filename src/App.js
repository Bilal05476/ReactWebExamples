import React, { useState } from "react";
import Tasks from "./components/TrackerApp/Tasks";
import Header from "./components/TrackerApp/Header";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "World",
    },
    {
      id: 2,
      name: "Hello",
    },
  ]);
  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;

// import client from './config/gql_config';
// import { ApolloProvider } from '@apollo/client';
// <ApolloProvider client={client}>
//   <div>
//     <Api />
//   </div>
// </ApolloProvider>
