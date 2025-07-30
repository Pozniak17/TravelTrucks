import { MenuNav, List, Item, StyledLink } from "./MobileMenu.styled";
import HeartIcon from "../icons/heart-2.svg"; // або "../icons/heart-2.svg"

type Props = {
  status: boolean;
};

export default function MobileMenu({ status }: Props) {
  return (
    <MenuNav $status={status}>
      <List>
        <Item>
          <StyledLink to="/">
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? "/icons/truck-red.svg" : "/icons/truck.svg"}
                />
                <span>Home</span>
              </>
            )}
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/catalog">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "/icons/catalog-red.svg" : "/icons/catalog.svg"
                  }
                />
                <span>Catalog</span>
              </>
            )}
          </StyledLink>
        </Item>
        <Item>
          <StyledLink to="/favorites">
            {({ isActive }) => (
              <>
                <img
                  src={
                    isActive ? "/icons/heart-red2.svg" : "/icons/heart-2.svg"
                  }
                />
                <span>Favorites</span>
              </>
            )}
          </StyledLink>
        </Item>
      </List>
    </MenuNav>
  );
}
