import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Header, Nav, Link, Logo, Img, MobileNav } from "./AppBar.styled";

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
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
        {isOpen ? (
          <img src="/icons/square-x.svg" onClick={() => setIsOpen(false)} />
        ) : (
          <img src="/icons/Menu.svg" onClick={() => setIsOpen(true)} />
        )}
        <MobileMenu status={isOpen} />
      </MobileNav>
    </Header>
  );
}
