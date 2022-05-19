const   _apiBase = 'https://api.spacexdata.com/v5/launches/past';

const getPast= async () => {
  const res = await fetch(_apiBase);
    if (!res.ok) {
      throw new Error(`Could not fetch Launches, DataBase received ${res.status}`);
    };
    const data = await res.json();
    console.log(data);
    return data;
    }

export default getPast;