import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList/CardList.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import Container from "../../components/shared/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations.js";
// import { fetchCampersWithFilter } from "../../components/utils/campers-api.js";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const { isLoading, error } = useSelector((state) => state.campers);

  const [limit, setLimit] = useState(4);

  // параметри фільтра
  // const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers(limit));
  }, [dispatch, limit]);

  // const handleSearch = (filterdata) => {
  //   setFilter(filterdata);
  // };

  const loadMore = () => {
    setLimit((limit) => limit + 4);
  };

  return (
    <Container>
      {/* <FilterForm onSearch={handleSearch} /> */}
      <FilterForm />
      {isLoading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {campers.length > 0 && <CardList nextPage={loadMore} />}
    </Container>
  );
}
