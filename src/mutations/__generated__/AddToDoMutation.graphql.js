/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToDo_insert_input = {|
  completed?: ?boolean,
  id?: ?any,
  item?: ?string,
|};
export type AddToDoMutationVariables = {|
  input: ToDo_insert_input
|};
export type AddToDoMutationResponse = {|
  +insert_ToDo_one: ?{|
    +id: string,
    +item: string,
  |}
|};
export type AddToDoMutation = {|
  variables: AddToDoMutationVariables,
  response: AddToDoMutationResponse,
|};
*/


/*
mutation AddToDoMutation(
  $input: ToDo_insert_input!
) {
  insert_ToDo_one(object: $input) {
    id
    item
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToDo_insert_input!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "object",
        "variableName": "input"
      }
    ],
    "concreteType": "ToDo",
    "kind": "LinkedField",
    "name": "insert_ToDo_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "item",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddToDoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddToDoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddToDoMutation",
    "operationKind": "mutation",
    "text": "mutation AddToDoMutation(\n  $input: ToDo_insert_input!\n) {\n  insert_ToDo_one(object: $input) {\n    id\n    item\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da5cd682b304fceb3c9739d33146dc1c';

module.exports = node;
