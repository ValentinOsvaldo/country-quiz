import { countriesApi } from '../api';
import { Country } from '../interfaces';

const getCountries = async (): Promise<Country[]> => {
  const { data } = await countriesApi.get<Country[]>('/all');

  return data;
};

export const getOptions = async () => {
  const countries = await getCountries();
  const mixedCountries = countries.sort(() => Math.random() - 0.5).splice(0, 4);

  return mixedCountries.map((country) => country.name.common);
};
