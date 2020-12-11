import Axios from "axios";

export const getUserIp = async () => {
    const urlId = 'https://api.ipify.org/?format=json'
    const responseIdInfo = await Axios.get(urlId);
    const { data } = responseIdInfo;
    const ip = data.ip;
    console.log(`user ip - ${ip}`);
};