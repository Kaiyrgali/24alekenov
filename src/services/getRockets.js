const   _apiBase = 'https://api.spacexdata.com/v4/rockets';

const getRockets = async () => {
  const res = await fetch(_apiBase);
    if (!res.ok) {
      throw new Error(`Could not fetch Rockets, DataBase received ${res.status}`);
    };
    const data = await res.json();
    console.log(data);
    return data;
    }

export default getRockets;