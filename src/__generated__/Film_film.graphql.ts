/**
 * @generated SignedSource<<58882501a870ad832d6bd9e0ce806360>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type film_film$data = {
  readonly id: string;
  readonly title: string | null;
  readonly director: string | null;
  readonly openingCrawl: string | null;
  readonly releaseDate: string | null;
  readonly " $fragmentType": "film_film";
};
export type film_film$key = {
  readonly " $data"?: film_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"film_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "film_film",
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
      "name": "openingCrawl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "1891492a97c14a8bb7f67edb2b41d271";

export default node;
