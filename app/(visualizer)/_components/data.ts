enum ECurrency {
  USD,
  PESO,
  YEN,
}

interface IBankInfo {
  name: string;
  price: number;
  base: ECurrency;
  date: string;
}

const data: IBankInfo[] = [
  {
    name: "Chase Manhattan Branch",
    price: 125000.5,
    base: ECurrency.USD,
    date: "2024-01-15",
  },
  {
    name: "Bank of America Regional",
    price: 98750.25,
    base: ECurrency.USD,
    date: "2024-02-20",
  },
  {
    name: "Banco Santander México",
    price: 2450000,
    base: ECurrency.PESO,
    date: "2024-03-10",
  },
  {
    name: "BBVA Bancomer",
    price: 1875000,
    base: ECurrency.PESO,
    date: "2024-04-05",
  },
  {
    name: "Mitsubishi UFJ Financial",
    price: 15500000,
    base: ECurrency.YEN,
    date: "2024-05-12",
  },
  {
    name: "Sumitomo Mitsui Banking",
    price: 13200000,
    base: ECurrency.YEN,
    date: "2024-06-18",
  },
  {
    name: "Wells Fargo Investment",
    price: 210000.75,
    base: ECurrency.USD,
    date: "2024-07-22",
  },
  {
    name: "Citibank Global Services",
    price: 175500.0,
    base: ECurrency.USD,
    date: "2024-08-30",
  },
  {
    name: "Mizuho Bank Corporate",
    price: 18900000,
    base: ECurrency.YEN,
    date: "2024-09-14",
  },
  {
    name: "Banamex Commercial",
    price: 3125000,
    base: ECurrency.PESO,
    date: "2024-10-25",
  },
  {
    name: "Banamex Commercial",
    price: 3125000,
    base: ECurrency.PESO,
    date: "2024-10-25",
  },
];

export { data, type IBankInfo };
