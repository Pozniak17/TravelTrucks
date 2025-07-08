import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormikHelpers } from "formik";

import {
  useAppDispatch,
  useAppSelector,
} from "../../components/utils/hooks.js";
import { clearFilters, setFilter } from "../../redux/filtersSlice.js";
import CardList from "../../components/CardList/CardList/CardList.js";
import FilterForm from "../../components/FilterForm/FilterForm.js";
import Container from "../../components/shared/Container/Container.jsx";
import { Loader } from "../../components/Loader/Loader.js";
import Error from "../../components/Error/Error.js";
import { FilterValues } from "../../types/Form.types.js";
import { RootState } from "../../redux/store.js";
import { fetchCampers } from "../../redux/operations.js";

export type NextPage = {
  loadMore: () => void;
};

export default function Catalog() {
  const dispatch = useAppDispatch();
  const campers = useAppSelector((state: RootState) => state.campers.items);
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.campers
  );
  const filters = useAppSelector((state: RootState) => state.filters);
  const [limit, setLimit] = useState<number>(4);

  useEffect(() => {
    dispatch(fetchCampers({ limit, filters }));
  }, [dispatch, limit, filters]);

  // скидаю ліміт, при зміні фільтра
  useEffect(() => {
    setLimit(4);
  }, [filters]);

  function loadMore() {
    setLimit((limit) => limit + 4);
  }

  // логіка форми
  const formHandleSubmit = (
    values: FilterValues,
    { resetForm }: FormikHelpers<FilterValues>
  ) => {
    dispatch(clearFilters());

    const filteredData: Partial<FilterValues> = {};

    Object.entries(values).forEach(([key, val]) => {
      if (val !== false && val !== "") {
        filteredData[key as keyof FilterValues] = val as any;
      }
    });

    // перезапис, якщо transmission === true
    if (values.transmission === true) {
      filteredData.transmission = "automatic";
    }

    console.log(values);
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
