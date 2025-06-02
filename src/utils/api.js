import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": '89931bf4e5msh1ebb85c5d26420fp18cdd8jsn5a0c7ba08374' || "YOUR_API_KEY",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("Error fetching data from API:", error.message);
        return null;
    }
};
