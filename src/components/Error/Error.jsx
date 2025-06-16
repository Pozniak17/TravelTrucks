import { useDispatch } from "react-redux";
import {
  ClearButton,
  ErrorCard,
  Img,
  Text,
  Title,
  Wrapper,
} from "./Error.styled";
import { clearFilters } from "../../redux/filtersSlice";

export default function Error() {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(clearFilters());
  };
  return (
    <ErrorCard>
      <div>
        <Img src="/images/NotFound/error.jpg" alt="error image" />
      </div>
      <Wrapper>
        <Title>No campers found</Title>
        <Text>Try adjusting your filters or explore other campers.</Text>
        <ClearButton onClick={handleResetFilters}>Clear Filters</ClearButton>
      </Wrapper>
    </ErrorCard>
  );
}
