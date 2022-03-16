/**
 * @generated SignedSource<<40a6bd48c075b81d7db1db1709ad7146>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type characterQuery$variables = {
  id: string;
};
export type characterQuery$data = {
  readonly person: {
    readonly id: string;
    readonly name: string | null;
    readonly birthYear: string | null;
    readonly eyeColor: string | null;
    readonly gender: string | null;
    readonly hairColor: string | null;
    readonly height: number | null;
    readonly mass: number | null;
    readonly skinColor: string | null;
    readonly homeworld: {
      readonly name: string | null;
    } | null;
    readonly species: {
      readonly name: string | null;
    } | null;
    readonly vehicleConnection: {
      readonly vehicles: ReadonlyArray<{
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
    readonly starshipConnection: {
      readonly starships: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
      } | null> | null;
    } | null;
  } | null;
};
export type characterQuery = {
  variables: characterQuery$variables;
  response: characterQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "birthYear",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eyeColor",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hairColor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "mass",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "skinColor",
  "storageKey": null
},
v11 = [
  (v3/*: any*/)
],
v12 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "PersonVehiclesConnection",
  "kind": "LinkedField",
  "name": "vehicleConnection",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Vehicle",
      "kind": "LinkedField",
      "name": "vehicles",
      "plural": true,
      "selections": (v12/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "PersonFilmsConnection",
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
        (v2/*: any*/),
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
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "PersonStarshipsConnection",
  "kind": "LinkedField",
  "name": "starshipConnection",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Starship",
      "kind": "LinkedField",
      "name": "starships",
      "plural": true,
      "selections": (v12/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "characterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Planet",
            "kind": "LinkedField",
            "name": "homeworld",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Species",
            "kind": "LinkedField",
            "name": "species",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "characterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Planet",
            "kind": "LinkedField",
            "name": "homeworld",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Species",
            "kind": "LinkedField",
            "name": "species",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63f617a39c9e21d127f9abcd69f1bb52",
    "id": null,
    "metadata": {},
    "name": "characterQuery",
    "operationKind": "query",
    "text": "query characterQuery(\n  $id: ID!\n) {\n  person(id: $id) {\n    id\n    name\n    birthYear\n    eyeColor\n    gender\n    hairColor\n    height\n    mass\n    skinColor\n    homeworld {\n      name\n      id\n    }\n    species {\n      name\n      id\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8c15aec19694938666f1294438dfc56f";

export default node;
