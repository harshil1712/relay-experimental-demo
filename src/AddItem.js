import React, { useState, useCallback } from "react";
import { useMutation } from "react-relay/hooks";
import { AddToDoMutation } from "./mutations/AddToDoMutation";
import { ConnectionHandler } from "relay-runtime";

const AddItem = ({ connection }) => {
  const [itemText, setItemText] = useState("");
  const [addToDo, isPending] = useMutation(AddToDoMutation);
  const onChange = useCallback((e) => {
    setItemText(e.target.value);
    // console.log(itemText)
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addToDo({
        variables: {
          input: {
            item: itemText,
          },
        },
        updater: (store) => {
          console.log('uppdater')
          const root = store.getRoot()
          const todoConnection = root.getLinkedRecord('ToDo_connection')
          const edges = todoConnection.getLinkedRecords('edges')
          // const edge = edges.getLinkedRecord('ToDoEdge')
          console.log(edges)
          // const connectionRecord = ConnectionHandler.insertEdgeAfter(todoConnection, edges)
          // console.log(connectionRecord);
        },
        onCompleted(data) {
          console.log("Success", data);
          setItemText("");
        },
      });
    },
    [addToDo, itemText]
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
