async function getApi(url) {
  const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch, DataBase received ${res.status}`);
    };
    const data = await res.json();
    console.log('data>', data );
    return data;
    }

export default getApi;