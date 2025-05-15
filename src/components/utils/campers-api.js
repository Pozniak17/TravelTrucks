import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampersWithFilter = async (filter) => {
  const { location, AC, automatic, kitchen, TV, bathroom, form } = filter;

  const params = { limit: 4, page: 1 };

  if (location) {
    params.location = location;
  }
  if (AC) {
    params.AC = true;
  }
  if (automatic) {
    params.transmission = "automatic";
  }
  if (kitchen) {
    params.kitchen = true;
  }
  if (TV) {
    params.TV = true;
  }
  if (bathroom) {
    params.bathroom = true;
  }
  if (form) {
    params.form = form;
  }
  const response = await axios.get(`/campers`, { params });
  return response.data.items;
};
