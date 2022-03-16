/**
 * @generated SignedSource<<5228c999a1b33225380dac0a6418abb6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type filmDetailsQuery$variables = {
  id: string;
};
export type filmDetailsQuery$data = {
  readonly film: {
    readonly id: string;
    readonly title: string | null;
    readonly director: string | null;
    readonly releaseDate: string | null;
    readonly characterConnection: {
      readonly characters: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly planetConnection: {
      readonly planets: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly vehicleConnection: {
      readonly vehicles: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly speciesConnection: {
      readonly species: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
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
export type filmDetailsQuery = {
  variables: filmDetailsQuery$variables;
  response: filmDetailsQuery$data;
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
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
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
    "concreteType": "Film",
    "kind": "LinkedField",
    "name": "film",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "director",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "releaseDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmCharactersConnection",
        "kind": "LinkedField",
        "name": "characterConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "characters",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmPlanetsConnection",
        "kind": "LinkedField",
        "name": "planetConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Planet",
            "kind": "LinkedField",
            "name": "planets",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmVehiclesConnection",
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
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmSpeciesConnection",
        "kind": "LinkedField",
        "name": "speciesConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Species",
            "kind": "LinkedField",
            "name": "species",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FilmStarshipsConnection",
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
            "selections": (v2/*: any*/),
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
    "name": "filmDetailsQuery",
    "selections": (v3/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "filmDetailsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a45952d08c896c94cc46f2cbfb636849",
    "id": null,
    "metadata": {},
    "name": "filmDetailsQuery",
    "operationKind": "query",
    "text": "query filmDetailsQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    id\n    title\n    director\n    releaseDate\n    characterConnection {\n      characters {\n        id\n        name\n      }\n    }\n    planetConnection {\n      planets {\n        id\n        name\n      }\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        name\n      }\n    }\n    speciesConnection {\n      species {\n        id\n        name\n      }\n    }\n    starshipConnection {\n      starships {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b3872785d2fb6306200f2c9457c2c7f";

export default node;
