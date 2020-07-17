import React from "react";
import { render } from "@testing-library/react";
import PermutationContainer from "./PermutationContainer";

const MOCK = [
  {
    "id": "4d4bbf2f-7441-4286-a57d-a75127e0ae1b",
    "last_modified": "2019-10-29T17:25:43.344879Z",
    "time_stamp": "2019-10-29T17:25:43.344903Z",
    "name": "2019_10_rhone_poster_color-Blue_cta-Scan Here",
    "brand": [
      "rhone"
    ],
    "campaign": "a979647f-c344-4c7d-9ddf-3f22ad10008b",
    "variables": [
      "Blue",
      "Scan Here"
    ]
  },
  {
    "id": "b310d839-3cc5-4c6c-b0b1-f87356e7801c",
    "last_modified": "2019-10-29T03:45:24.391328Z",
    "time_stamp": "2019-10-29T03:45:24.391362Z",
    "name": "2019_10_rhone_poster_color-Blue_cta-Point. Aim. Shoot",
    "brand": [
      "rhone"
    ],
    "campaign": "a979647f-c344-4c7d-9ddf-3f22ad10008b",
    "variables": [
      "Blue",
      "Point. Aim. Shoot"
    ]
  },
  {
    "id": "04b760c0-dd04-4b0a-9a8a-e2b19f73251d",
    "last_modified": "2019-10-29T03:45:24.391328Z",
    "time_stamp": "2019-10-29T03:45:24.391362Z",
    "name": "2019_10_rhone_poster_color-Green_cta-Scan Here",
    "brand": [
      "rhone"
    ],
    "campaign": "a979647f-c344-4c7d-9ddf-3f22ad10008b",
    "variables": [
      "Green",
      "Scan Here"
    ]
  },
  {
    "id": "0056775b-707e-4fd8-9ac6-5be46028d72d",
    "last_modified": "2019-10-29T03:45:24.391328Z",
    "time_stamp": "2019-10-29T03:45:24.391362Z",
    "name": "2019_10_rhone_poster_color-Green_cta-Point. Aim. Shoot",
    "brand": [
      "rhone"
    ],
    "campaign": "a979647f-c344-4c7d-9ddf-3f22ad10008b",
    "variables": [
      "Green",
      "Point. Aim. Shoot"
    ]
  }
]

describe("Component: PermutationContainer", () => {
  it("renders some permutations", () => {
    const { getAllByRole } = render(<PermutationContainer products={MOCK} />);
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(MOCK.length);
  });
});
