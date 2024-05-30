const getSteamUsers = async () => {
    const response = await fetch('https://playerdb.co/api/player/steam/');
    const myJson = await response.json();
    return myJson;
}