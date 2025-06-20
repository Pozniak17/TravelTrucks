import { useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList/CardList.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import Container from "../../components/shared/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/operations.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import { clearFilters, setFilter } from "../../redux/filtersSlice.js";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const { isLoading, error } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers({ limit, filters }));
  }, [dispatch, limit, filters]);

  // скидаю ліміт, при зміні фільтра
  useEffect(() => {
    setLimit(4);
  }, [filters]);

  const loadMore = () => {
    setLimit((limit) => limit + 4);
  };

  // логіка форми
  const formHandleSubmit = (value, { resetForm }) => {
    dispatch(clearFilters());

    let filteredData = {};

    for (const key in value) {
      if (value[key] !== false && value[key] !== "") {
        filteredData[key] = value[key];
      }

      if (value["transmission"] === true) {
        filteredData["transmission"] = "automatic";
      }
    }

    dispatch(setFilter(filteredData));
    resetForm();

    console.log(filteredData);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <FilterForm onSubmit={formHandleSubmit} />
      {error || campers.length === 0 ? (
        <Error />
      ) : (
        <CardList nextPage={loadMore} />
      )}
    </Container>
  );
}
