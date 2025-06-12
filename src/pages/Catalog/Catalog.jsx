import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList/CardList.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import Container from "../../components/shared/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations.js";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const { isLoading, error } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);

  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers({ limit, filters }));
  }, [dispatch, limit, filters]);

  const loadMore = () => {
    setLimit((limit) => limit + 4);
  };

  return (
    <Container>
      <FilterForm />
      {isLoading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {campers.length > 0 && <CardList nextPage={loadMore} />}
    </Container>
  );
}
