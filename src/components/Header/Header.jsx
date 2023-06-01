import { Box, AppBar, Toolbar, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      disablegutters="true"
      sx={{
        marginBottom: 4,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Button component={NavLink} to="/shop" color="inherit">
            Shop
          </Button>
          <Button component={NavLink} to="/cart" color="inherit">
            Cart
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
