import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampersWithFilter = async () => {
  const response = await axios.get(`/campers`, {
    params: {
      limit: 4,
      page: 1,
    },
  });
  return response.data.items;
};
