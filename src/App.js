import React, { useState, useCallback } from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

import AddItem from './AddItem.js'


const { Suspense } = React;

const ToDoItemsQuery = graphql`
  query AppToDoItemsQuery {
    ToDo_connection {
      edges {
        node {
          id
          item
        }
      }
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, ToDoItemsQuery, {});

function App(props) {
  const data = usePreloadedQuery(ToDoItemsQuery, props.preloadedQuery);

  // console.log(data.ToDo_connection)

  // const frag = useFragment(graphql`
  //   fragment AppToDo on ToDoConnection {
  //     edges {
  //       node {
  //         id
  //       }
  //     }
  //   }
  // `, data.ToDo_connection)

  // const itemId = frag.id



  return (
    <div className="App">
      <header className="App-header">
        {data.ToDo_connection.edges.map((edge) => (
          <p key={edge.node.id}>{edge.node.item}</p>
        ))}
        <AddItem connection={data.ToDo_connection} />
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading"}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
