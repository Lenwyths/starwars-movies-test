/**
 * @generated SignedSource<<d034233fe1e2628a981dd56a82032369>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type vehicleQuery$variables = {
  id: string;
};
export type vehicleQuery$data = {
  readonly vehicle: {
    readonly id: string;
    readonly name: string | null;
    readonly model: string | null;
    readonly vehicleClass: string | null;
    readonly manufacturers: ReadonlyArray<string | null> | null;
    readonly costInCredits: number | null;
    readonly length: number | null;
    readonly crew: string | null;
    readonly passengers: string | null;
    readonly maxAtmospheringSpeed: number | null;
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
export type vehicleQuery = {
  variables: vehicleQuery$variables;
  response: vehicleQuery$data;
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
    "concreteType": "Vehicle",
    "kind": "LinkedField",
    "name": "vehicle",
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
        "name": "vehicleClass",
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
        "concreteType": "VehiclePilotsConnection",
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
        "concreteType": "VehicleFilmsConnection",
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
    "name": "vehicleQuery",
    "selections": (v3/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "vehicleQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "645508ca21cef5067ee5067cd382e375",
    "id": null,
    "metadata": {},
    "name": "vehicleQuery",
    "operationKind": "query",
    "text": "query vehicleQuery(\n  $id: ID!\n) {\n  vehicle(id: $id) {\n    id\n    name\n    model\n    vehicleClass\n    manufacturers\n    costInCredits\n    length\n    crew\n    passengers\n    maxAtmospheringSpeed\n    cargoCapacity\n    consumables\n    pilotConnection {\n      pilots {\n        id\n        name\n      }\n    }\n    filmConnection {\n      films {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "203f4827acfde160d2dee44cebafd132";

export default node;
