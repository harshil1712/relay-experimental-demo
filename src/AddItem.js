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

  const onSubmit =
    (e) => {
      e.preventDefault();
      addToDo({
        variables: {
          input: {
            item: itemText,
          },
        },
        updater: (store) => {
          console.log("uppdater");
          const root = store.getRootField('insert_ToDo_one');
          const todoConnection = root.getLinkedRecord("ToDo_connection");
          const edges = todoConnection.getLinkedRecords("edges");
          // const edge = edges.getLinkedRecord('ToDoEdge')
          console.log(store);
          // const connectionRecord = ConnectionHandler.insertEdgeAfter(todoConnection, edges)
          // console.log(connectionRecord);
        },
        onCompleted(data) {
          console.log("Success", data);
          setItemText("");
        },
      });
    };
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
