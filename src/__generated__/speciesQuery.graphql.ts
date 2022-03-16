/**
 * @generated SignedSource<<7c930bee70cb47eadd5e03d5379cd645>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type speciesQuery$variables = {
  id: string;
};
export type speciesQuery$data = {
  readonly species: {
    readonly id: string;
    readonly name: string | null;
    readonly classification: string | null;
    readonly designation: string | null;
    readonly averageHeight: number | null;
    readonly averageLifespan: number | null;
    readonly eyeColors: ReadonlyArray<string | null> | null;
    readonly hairColors: ReadonlyArray<string | null> | null;
    readonly skinColors: ReadonlyArray<string | null> | null;
    readonly language: string | null;
    readonly homeworld: {
      readonly name: string | null;
    } | null;
    readonly personConnection: {
      readonly people: ReadonlyArray<{
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
export type speciesQuery = {
  variables: speciesQuery$variables;
  response: speciesQuery$data;
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
  "name": "classification",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "designation",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "averageHeight",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "averageLifespan",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "eyeColors",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hairColors",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "skinColors",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "language",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "SpeciesPeopleConnection",
  "kind": "LinkedField",
  "name": "personConnection",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Person",
      "kind": "LinkedField",
      "name": "people",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "SpeciesFilmsConnection",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "speciesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Species",
        "kind": "LinkedField",
        "name": "species",
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
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Planet",
            "kind": "LinkedField",
            "name": "homeworld",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/)
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
    "name": "speciesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Species",
        "kind": "LinkedField",
        "name": "species",
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
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Planet",
            "kind": "LinkedField",
            "name": "homeworld",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "284485db9c8fae9ad134f549df1214f5",
    "id": null,
    "metadata": {},
    "name": "speciesQuery",
    "operationKind": "query",
    "text": "query speciesQuery(\n  $id: ID!\n) {\n  species(id: $id) {\n    id\n    name\n    classification\n    designation\n    averageHeight\n    averageLifespan\n    eyeColors\n    hairColors\n    skinColors\n    language\n    homeworld {\n      name\n      id\n    }\n    personConnection {\n      people {\n        id\n        name\n      }\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "712e3b0c8dd33131f8eb67e0ac73233d";

export default node;
