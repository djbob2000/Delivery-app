import * as STC from "./Header.styled";

export const Header = () => {
  return (
    <STC.AppBar>
      <STC.Nav>
        <STC.StyledNavLink to="/shop">Shop</STC.StyledNavLink>
        <STC.StyledNavLink to="/cart">Cart</STC.StyledNavLink>
      </STC.Nav>
    </STC.AppBar>
  );
};
