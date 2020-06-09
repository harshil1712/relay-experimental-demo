/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppToDoItemsQueryVariables = {||};
export type AppToDoItemsQueryResponse = {|
  +ToDo_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +item: string,
      |}
    |}>
  |}
|};
export type AppToDoItemsQuery = {|
  variables: AppToDoItemsQueryVariables,
  response: AppToDoItemsQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ToDoConnection",
    "kind": "LinkedField",
    "name": "ToDo_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ToDoEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ToDo",
            "kind": "LinkedField",
            "name": "node",
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
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppToDoItemsQuery",
    "selections": (v0/*: any*/),
    "type": "query_root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppToDoItemsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppToDoItemsQuery",
    "operationKind": "query",
    "text": "query AppToDoItemsQuery {\n  ToDo_connection {\n    edges {\n      node {\n        id\n        item\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fae933c2b428b88d1701d9080c5d00e';

module.exports = node;
