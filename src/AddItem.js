import React, { useState, useCallback } from "react";
import { useMutation, useFragment } from "react-relay/hooks";
import { AddToDoMutation, commitFunc } from "./mutations/AddToDoMutation";

const AddItem = ({connection}) => {
  const [itemText, setItemText] = useState("");
  const [addToDo, isPending] = useMutation(AddToDoMutation);
  const onChange = useCallback((e) => {
    setItemText(e.target.value);
    // console.log(itemText)
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    addToDo({
      variables: {
        input: {
          item: itemText,
        },
      },
      updater: (store) => {
        const item = store.getRootField('insert_ToDo_one')
        const itemEdge = item.getLinkedRecord('')
        console.log(item);
      },
      onCompleted(data) {
        console.log("Success");
      },
    });
    setItemText("");
  });
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
