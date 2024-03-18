import axios from "axios";

import {
  areas,
  languages,
  pagination,
  populations,
  sorting,
} from "./utils/filters.js";

const country = async (req, res) => {
  const { name } = req.query;

  if (!name)
    return res
      .status(404)
      .json({ message: "name parameter must be provided!" });

  const response = await axios
    .get(`https://restcountries.com/v3.1/name/${name}`)
    .catch(() => {
      return res.status(404).json({ message: "Country not found" });
    });

  if (response?.status === 200) return res.status(200).json(response.data);

  if (response?.status === 404)
    return res.status(404).json({ message: "Country not found" });
};

const countries = async (req, res) => {
  // That code destructure (separate from req.query object) the variables from req.query.
  const { population, area, language, sort, page, limit } = req.query;

  const response = await axios
    .get(`https://restcountries.com/v3.1/all`)
    .catch(() => {
      return res.status(404).json({ message: "Not found" });
    });

  // Those are 5 function are filter the country data by query.
  // i'm implement a deferent logic for filter each query for better experience

  const filterByPopulation = populations(response?.data, population);

  const filterByLanguage = languages(filterByPopulation, language);

  const filterByArea = areas(filterByLanguage, area);

  const filterByPage = pagination(filterByArea, page, limit);

  const filterByShort = sorting(filterByPage, sort);

  if (filterByShort.length <= 0)
    return res.status(404).json({ message: "Countries not found" });

  res.status(200).json(filterByShort);
};

export { country, countries };
