import CardList from "../../components/CardList/CardList/CardList.jsx";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import Container from "../../components/shared/Container/Container";

export default function Catalog() {
  return (
    <Container>
      <FilterForm />
      <CardList />
    </Container>
  );
}
