import axios, { AxiosError } from "axios";
import config from "../config";
import { House } from "../types/house";
import { useQuery } from "react-query";

const useFetchHouses = ()  => {
        return useQuery<House[], AxiosError>('houses', () =>
        axios.get(`${config.baseApiUrl}/houses`).then(
            (resp) => resp.data)
    );
};

export default useFetchHouses;