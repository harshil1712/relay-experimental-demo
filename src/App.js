import React from "react";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";

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
  console.log(data.ToDo_connection.edges[0].node.item);
  return (
    <div className="App">
      <header className="App-header">
        {data.ToDo_connection.edges.map((edge) => (
          <p key={edge.node.id}>{edge.node.item}</p>
        ))}
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
