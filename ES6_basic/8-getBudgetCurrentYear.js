function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget['income-2021'] = income;
  budget['gdp-2021'] = gdp;
  budget['capita-2021'] = capita;

  return budget;
}
