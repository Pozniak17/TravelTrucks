import { useEffect, useMemo, useState } from "react";

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
// import SortPanel from "../../components/SortPanel/SortPanel";

export type NextPage = {
  loadMore: () => void;
};

export default function Catalog() {
  const [sortKey, setSortKey] = useState("");
  const dispatch = useAppDispatch();
  const campers = useAppSelector((state: RootState) => state.campers.items);
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.campers
  );
  const filters = useAppSelector((state: RootState) => state.filters);
  const [limit, setLimit] = useState<number>(4);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    dispatch(fetchCampers({ limit, filters }));
  }, [dispatch, limit, filters]);

  // скидаю ліміт, при зміні фільтра
  useEffect(() => {
    setLimit(4);
  }, [filters]);

  useEffect(() => {
    if (sortKey) {
      setIsSorting(true);
      const timeout = setTimeout(() => {
        setIsSorting(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [sortKey]);

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

  const sortedCampers = useMemo(() => {
    if (sortKey === "price") {
      return [...campers].sort((a, b) => a.price - b.price);
    }
    if (sortKey === "rating") {
      return [...campers].sort((a, b) => b.rating - a.rating);
    }
    return campers;
  }, [campers, sortKey]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {isSorting ? (
        <Loader />
      ) : (
        <>
          <FilterForm onSubmit={formHandleSubmit} />

          {!isLoading && error && <Error />}

          {!isLoading && !error && campers.length > 0 && (
            <CardList
              sortedCampers={sortedCampers}
              nextPage={loadMore}
              value={sortKey}
              onChange={setSortKey}
              isSorting={isSorting}
            />
          )}

          {!isLoading && !error && campers.length === 0 && <Error />}
        </>
      )}
    </Container>
  );
}
