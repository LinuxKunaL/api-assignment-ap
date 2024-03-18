const pagination = (data, page, limit) => {
  if (!page) return data;
  if (!limit) return data;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.slice(startIndex, endIndex);
};

const populations = (data, population) => {
  if (!population) return data;

  const filterData = data?.filter((i) => i?.population <= population);
  return filterData;
};

const areas = (data, area) => {
  if (!area) return data;

  const filterData = data.filter((i) => i.area <= area);
  return filterData;
};

const languages = (data, language) => {
  if (!language) return data;

  const filterData = data?.filter((e) =>
    JSON.stringify(e.languages)
      ?.toLowerCase()
      ?.includes(language?.toLowerCase())
  );

  return filterData;
};

const sorting = (data, sort) => {
  if (!sort) return data;

  if (sort === "asc") {
    return data.sort((a, b) => {
      return a.name?.common.localeCompare(b.name?.common);
    });
  } else if (sort === "desc") {
    return data.sort((a, b) => {
      return b.name?.common.localeCompare(a.name?.common);
    });
  } else {
    return data;
  }
};

export { pagination, populations, areas, languages, sorting };
