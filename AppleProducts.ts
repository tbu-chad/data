import { Category } from "./types";

export const products: Category[] = [
  {
    name: "iPhone/iPad",
    products: [
      {
        name: "iPad Pro",
        current: "2024-05-07",
        recentReleases: [
          "2016-03-21",
          "2017-06-05",
          "2018-10-30",
          "2020-03-18",
          "2021-04-20",
          "2022-10-18",
        ],
      },
      {
        name: "iPad Air",
        current: "2024-05-07",
        recentReleases: [
          "2013-10-22",
          "2014-10-16",
          "2016-09-07",
          "2019-03-18",
          "2020-09-15",
          "2022-03-08",
        ],
      },
      {
        name: "iPhone 15",
        current: "2023-09-22",
        recentReleases: [
          "2017-09-22",
          "2018-10-26",
          "2019-09-20",
          "2020-10-23",
          "2021-09-24",
          "2022-09-16",
        ],
      }
    ],
  },
  {
    name: "Music",
    products: [
      {
        name: "HomePod Mini",
        current: "2020-10-13",
        recentReleases: [],
        estimatedUpdate: 1825,
      },
    ],
  },
];
