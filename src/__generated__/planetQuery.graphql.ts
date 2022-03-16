/**
 * @generated SignedSource<<0a2fc34578668559599da4b8181dde1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type planetQuery$variables = {
  id: string;
};
export type planetQuery$data = {
  readonly planet: {
    readonly id: string;
    readonly name: string | null;
    readonly diameter: number | null;
    readonly rotationPeriod: number | null;
    readonly orbitalPeriod: number | null;
    readonly gravity: string | null;
    readonly population: number | null;
    readonly climates: ReadonlyArray<string | null> | null;
    readonly terrains: ReadonlyArray<string | null> | null;
    readonly surfaceWater: number | null;
    readonly residentConnection: {
      readonly residents: ReadonlyArray<{
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
export type planetQuery = {
  variables: planetQuery$variables;
  response: planetQuery$data;
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
    "concreteType": "Planet",
    "kind": "LinkedField",
    "name": "planet",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "diameter",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "rotationPeriod",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "orbitalPeriod",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gravity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "population",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "climates",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "terrains",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "surfaceWater",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PlanetResidentsConnection",
        "kind": "LinkedField",
        "name": "residentConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "residents",
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
        "concreteType": "PlanetFilmsConnection",
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
    "name": "planetQuery",
    "selections": (v3/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "planetQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3e2ca72f1761813bf725a09a11b0fe8a",
    "id": null,
    "metadata": {},
    "name": "planetQuery",
    "operationKind": "query",
    "text": "query planetQuery(\n  $id: ID!\n) {\n  planet(id: $id) {\n    id\n    name\n    diameter\n    rotationPeriod\n    orbitalPeriod\n    gravity\n    population\n    climates\n    terrains\n    surfaceWater\n    residentConnection {\n      residents {\n        id\n        name\n      }\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d66ab6d4c439a44fffeefda217f72bbc";

export default node;
