const getApi = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch, DataBase received ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export default getApi;
