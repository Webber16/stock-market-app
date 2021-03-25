import React, { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/card";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";
const stockNames = [
  { acronym: "AAPL", name: "Apple Inc." },
  { acronym: "GOOGL", name: "Alphabet Inc." },
  { acronym: "MSFT", name: "Microsoft Corporation" },
  { acronym: "TSLA", name: "Tesla Inc." },
  { acronym: "GME", name: "GameStop Corp." },
  { acronym: "HPQ", name: "HP Inc." },
  { acronym: "V", name: "Visa Inc." },
  { acronym: "CSCO", name: "Cisco Systems Inc." },
  { acronym: "BA", name: "Boeing Co." },
  { acronym: "T", name: "AT&T Inc." },
  { acronym: "MCD", name: "Mcdonald's Corp." },
  { acronym: "PFE", name: "Pfizer Inc." },
  { acronym: "FB", name: "Facebook Inc." },
  { acronym: "DIS", name: "Walt Disney Co." },
  { acronym: "ORCL", name: "Oracle Corporation" },
  { acronym: "PEP", name: "PepsiCo Inc." },
  { acronym: "JPM", name: "JPMorgan Chase & Co." },
  { acronym: "INTC", name: "Intel Corporation" },
  { acronym: "KO", name: "Coca-Cola Co." },
  { acronym: "AMZN", name: "Amazon.com Inc." },
  { acronym: "WMT", name: "Walmart Inc." },
  { acronym: "JNJ", name: "Johnson & Johnson" },
  { acronym: "IBM", name: "IBM Common Stock" },
  { acronym: "XOM", name: "Exxon Mobil Corporation" },
  { acronym: "SNP", name: "China Petroleum & Chemical Corp." },
  { acronym: "PTR", name: "PetroChina Co. Ltd." },
  { acronym: "CVS", name: "CVS Health Corp." },

  { acronym: "TM", name: "Toyota Motor Corp." },
  { acronym: "VWAGY", name: "Volkswagen AG " },

  { acronym: "BABA", name: "Alibaba Group Holding Ltd" },
  { acronym: "F", name: "Ford Motor Company" },
  { acronym: "VOD", name: "Vodafone Group plc" },

  { acronym: "ALV", name: "Allianz SE" },

  { acronym: "GE", name: "General Electric Company" },
];

const stockNamesOptions = [
  { value: "AAPL", label: "Apple Inc.", acronym: "AAPL", name: "Apple Inc." },
  {
    value: "GOOGL",
    label: "Alphabet Inc.",
    acronym: "GOOGL",
    name: "Alphabet Inc.",
  },
  {
    value: "MSFT",
    label: "Microsoft Corporation",
    acronym: "MSFT",
    name: "Microsoft Corporation",
  },
  { value: "TSLA", label: "Tesla Inc.", acronym: "TSLA", name: "Tesla Inc." },
  {
    value: "GME",
    label: "GameStop Corp.",
    acronym: "GME",
    name: "GameStop Corp.",
  },
  { value: "HPQ", label: "HP Inc.", acronym: "HPQ", name: "HP Inc." },
  { value: "V", label: "Visa Inc.", acronym: "V", name: "Visa Inc." },
  {
    value: "CSCO",
    label: "Cisco Systems Inc.",
    acronym: "CSCO",
    name: "Cisco Systems Inc.",
  },
  { value: "BA", label: "Boeing Co.", acronym: "BA", name: "Boeing Co." },
  { value: "T", label: "AT&T Inc.", acronym: "T", name: "AT&T Inc." },
  {
    value: "MCD",
    label: "Mcdonald's Corp.",
    acronym: "MCD",
    name: "Mcdonald's Corp.",
  },
  { value: "PFE", label: "Pfizer Inc.", acronym: "PFE", name: "Pfizer Inc." },
  { value: "FB", label: "Facebook Inc.", acronym: "FB", name: "Facebook Inc." },
  {
    value: "DIS",
    label: "Walt Disney Co.",
    acronym: "DIS",
    name: "Walt Disney Co.",
  },
  {
    value: "ORCL",
    label: "Oracle Corporation",
    acronym: "ORCL",
    name: "Oracle Corporation",
  },
  { value: "PEP", label: "PepsiCo Inc.", acronym: "PEP", name: "PepsiCo Inc." },
  {
    value: "JPM",
    label: "JPMorgan Chase & Co.",
    acronym: "JPM",
    name: "JPMorgan Chase & Co.",
  },
  {
    value: "INTC",
    label: "Intel Corporation",
    acronym: "INTC",
    name: "Intel Corporation",
  },
  { value: "KO", label: "Coca-Cola Co.", acronym: "KO", name: "Coca-Cola Co." },
  {
    value: "AMZN",
    label: "Amazon.com Inc.",
    acronym: "AMZN",
    name: "Amazon.com Inc.",
  },
  { value: "WMT", label: "Walmart Inc.", acronym: "WMT", name: "Walmart Inc." },
  {
    value: "JNJ",
    label: "Johnson & Johnson",
    acronym: "JNJ",
    name: "Johnson & Johnson",
  },
  {
    value: "IBM",
    label: "IBM Common Stock",
    acronym: "IBM",
    name: "IBM Common Stock",
  },
  {
    value: "XOM",
    label: "Exxon Mobil Corporation",
    acronym: "XOM",
    name: "Exxon Mobil Corporation",
  },
  {
    value: "SNP",
    label: "China Petroleum & Chemical Corp.",
    acronym: "SNP",
    name: "China Petroleum & Chemical Corp.",
  },
  {
    value: "PTR",
    label: "PetroChina Co. Ltd.",
    acronym: "PTR",
    name: "PetroChina Co. Ltd.",
  },
  {
    value: "CVS",
    label: "CVS Health Corp.",
    acronym: "CVS",
    name: "CVS Health Corp.",
  },

  {
    value: "TM",
    label: "Toyota Motor Corp.",
    acronym: "TM",
    name: "Toyota Motor Corp.",
  },
  {
    value: "VWAGY",
    label: "Volkswagen AG ",
    acronym: "VWAGY",
    name: "Volkswagen AG",
  },

  {
    value: "BABA",
    label: "Alibaba Group Holding Ltd",
    acronym: "BABA",
    name: "Alibaba Groupt Holding Ltd",
  },
  {
    value: "F",
    label: "Ford Motor Company",
    acronym: "F",
    name: "Ford Motor Company",
  },
  {
    value: "VOD",
    label: "Vodafone Group plc",
    acronym: "VOD",
    name: "Vodafone Group plc",
  },

  { value: "ALV", label: "Allianz SE", acronym: "ALV", name: "Allianz SE" },

  {
    value: "GE",
    label: "General Electric Company",
    acronym: "GE",
    name: "General Electric Company",
  },
];

const stockFullNames = [
  "Apple Inc.",
  "Alphabet Inc.",
  "Microsoft Corporation",
  "Tesla Inc.",
  "GameStop Corp.",
  "HP Inc.",
  "Visa Inc.",
  "Cisco Systems Inc.",
  "Boeing Co.",
  "AT&T Inc.",
  "Mcdonald's Corp.",
  "Pfizer Inc.",
  "Facebook Inc.",
  "Walt Disney Co.",
  "Oracle Corporation",
  "PepsiCo Inc.",
  "JPMorgan Chase & Co.",
  "Intel Corporation",
  "Coca-Cola Co.",
  "Amazon.com Inc.",
  "Walmart Inc.",
  "Johnson & Johnson",
  "IBM Commom Stock",
  "Exxon Mobil Corporation",
  "China Petroleum & Chemical Corp.",
  "PetroChina Co. Ltd.",
  "CVS Health Corp.",

  "Toyota Motor Corp.",
  "Volkswagen AG",

  "Alibaba Group Holding Ltd",
  "Ford Motor Company",
  "Vodafone Group PLC",

  "Allianz SE",

  "General Electric Company",
];
function App() {
  // use state ul tau de selected stock
  const [selectedStock, setSelectedStock] = useState(stockNamesOptions[0]);

  return (
    <div className="corp">
      <div>
        <h1 className="titlu">Stock Market App</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              marginBottom: 50,

              width: "400px",
            }}
          >
            <Select
              // on change set selected stock
              value={selectedStock}
              onChange={(e) => setSelectedStock(e)}
              options={stockNamesOptions}
              style={{
                fontFamily: "Righteous",
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <CardComponent selectedStock={selectedStock} />
      </div>
    </div>
  );
}

export default App;
