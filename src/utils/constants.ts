import USA from "../assets/united-states-of-america.svg";
import Europe from "../assets/european-union.svg";
import UK from "../assets/united-kingdom.svg";
import Australia from "../assets/australia.svg";
import Canada from "../assets/canada.svg";

export const PAGES = [
  "OSRS Gold",
  "RS3 Gold",
  "Sell RS Gold",
  "OSRS Items",
  "OSRS Accounts",
  "Reward Chests",
];

export const CURRENCIES = [
  {
    name: "USD",
    image: USA,
    ratesRatio: 1,
  },
  {
    name: "EUR",
    image: Europe,
    ratesRatio: 1.1,
  },
  {
    name: "GBP",
    image: UK,
    ratesRatio: 1.4,
  },
  {
    name: "AUD",
    image: Australia,
    ratesRatio: 1.54,
  },
  {
    name: "CAD",
    image: Canada,
    ratesRatio: 1.36,
  },
];

export const GOLD_ITEM_PRICE = 10;
