import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/CardList/CardList/CardList.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import Container from "../../components/shared/Container/Container";
import { fetchCampersWithFilter } from "../../components/utils/campers-api.js";

export default function Catalog() {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [filter, setFilter] = useState([]);
  console.log(filter);

  useEffect(() => {
    async function fetchCampers() {
      try {
        setLoading(true);
        const data = await fetchCampersWithFilter();

        setCampers(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }
    //   2. Викликаємо її одну після оголошення
    fetchCampers();
  }, []);

  const handleSearch = (filterdata) => {
    // console.log(filterdata);
    setFilter(filterdata);
  };

  return (
    <Container>
      <FilterForm onSearch={handleSearch} />
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {campers.length > 0 && <CardList items={campers} />}
    </Container>
  );
}
