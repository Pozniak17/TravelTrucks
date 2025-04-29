import Container from "../shared/Container/Container";
import { Header, Nav, Link } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <img src="/icons/Logo.svg" alt="Logo" />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </Nav>
    </Header>
  );
}
