import { Header, Nav, Link, Logo, Img, MobileNav } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <Logo to="/">
        <Img src="/icons/Logo.svg" alt="Logo" />
      </Logo>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Nav>

      <MobileNav>
        <Link to="/favorites"></Link>
        <img src="/icons/Menu.svg" />
      </MobileNav>
    </Header>
  );
}
