import { Header, Nav, Link, Logo } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <Logo to="/">
        <img src="/icons/Logo.svg" alt="Logo" />
      </Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </Nav>
    </Header>
  );
}
