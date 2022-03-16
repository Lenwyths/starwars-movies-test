/**
 * @generated SignedSource<<e67b1b379834b0acc615c969b541cccd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type starshipQuery$variables = {
  id: string;
};
export type starshipQuery$data = {
  readonly starship: {
    readonly id: string;
    readonly name: string | null;
    readonly model: string | null;
    readonly starshipClass: string | null;
    readonly manufacturers: ReadonlyArray<string | null> | null;
    readonly costInCredits: number | null;
    readonly length: number | null;
    readonly crew: string | null;
    readonly passengers: string | null;
    readonly maxAtmospheringSpeed: number | null;
    readonly MGLT: number | null;
    readonly hyperdriveRating: number | null;
    readonly cargoCapacity: number | null;
    readonly consumables: string | null;
    readonly pilotConnection: {
      readonly pilots: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly filmConnection: {
      readonly films: ReadonlyArray<{
        readonly id: string;
        readonly title: string | null;
      } | null> | null;
    } | null;
  } | null;
};
export type starshipQuery = {
  variables: starshipQuery$variables;
  response: starshipQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Starship",
    "kind": "LinkedField",
    "name": "starship",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "model",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "starshipClass",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "manufacturers",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "costInCredits",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "length",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "crew",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "passengers",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "maxAtmospheringSpeed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "MGLT",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hyperdriveRating",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cargoCapacity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "consumables",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "StarshipPilotsConnection",
        "kind": "LinkedField",
        "name": "pilotConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "pilots",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "StarshipFilmsConnection",
        "kind": "LinkedField",
        "name": "filmConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Film",
            "kind": "LinkedField",
            "name": "films",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "starshipQuery",
    "selections": (v3/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "starshipQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5afa82d713c6dc2bf45ef259ec27953e",
    "id": null,
    "metadata": {},
    "name": "starshipQuery",
    "operationKind": "query",
    "text": "query starshipQuery(\n  $id: ID!\n) {\n  starship(id: $id) {\n    id\n    name\n    model\n    starshipClass\n    manufacturers\n    costInCredits\n    length\n    crew\n    passengers\n    maxAtmospheringSpeed\n    MGLT\n    hyperdriveRating\n    cargoCapacity\n    consumables\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7465fd8c313c33646d0a84aea52038d9";

export default node;
