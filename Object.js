const festivals = [
  {
    month: "January",
    festival: "Lohri",
    date: "13-01-2024",
  },
  {
    month: "January",
    festival: "Makar Sankranti",
    date: "14-01-2024",
  },
  {
    month: "February",
    festival: "Guru Ravidas Jayanti",
    date: "24-02-2024",
  },
  {
    month: "March",
    festival: "Holi",
    date: "25-03-2024",
  },
  {
    month: "April",
    festival: "Ram Navami",
    date: "17-04-2024",
  },
  {
    month: "May",
    festival: "Buddha Purnima",
    date: "23-05-2024",
  },
  {
    month: "July",
    festival: "Hariyali Teej",
    date: "31-07-2024",
  },
  {
    month: "August",
    festival: "Raksha Bandhan",
    date: "19-08-2024",
  },
  {
    month: "August",
    festival: "Janmashtami",
    date: "26-08-2024",
  },
  {
    month: "August",
    festival: "Nag Panchami",
    date: "04-08-2024",
  },
  {
    month: "September",
    festival: "Hartalika Teej",
    date: "06-09-2024",
  },
  {
    month: "October",
    festival: "Dusshera",
    date: "13-10-2024",
  },
  {
    month: "October",
    festival: "Karva Chauth",
    date: "20-10-2024",
  },
  {
    month: "October",
    festival: "Dhanteras",
    date: "28-10-2024",
  },
  {
    month: "October",
    festival: "Diwali",
    date: "31-10-2024",
  },
  {
    month: "November",
    festival: "Chhath Puja",
    date: "09-11-2024",
  },
  {
    month: "November",
    festival: "Guru Nanak Jayanti",
    date: "15-11-2024",
  },
  {
    month: "December",
    festival: "Christmas",
    date: "25-12-2024",
  },
];

const groupedFestivals = Object.groupBy(festivals, (festival) => {
  festival.month;
});

console.log(`Festivals ${JSON.stringify(groupedFestivals)}`);
