import {
  AppBar,
  Toolbar,
  Button,
  Container,
  List,
  ListItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        marginBottom: 4,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <header>
            <nav>
              <List
                sx={{
                  display: "flex",
                }}
              >
                <ListItem>
                  <Button
                    component={NavLink}
                    to="/"
                    sx={{
                      color: "inherit",
                      "&.active": {
                        color: "yellow",
                      },
                    }}
                  >
                    Shop
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    component={NavLink}
                    to="/cart"
                    sx={{
                      color: "inherit",
                      "&.active": {
                        color: "yellow",
                      },
                    }}
                  >
                    Cart
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    component={NavLink}
                    to="/history"
                    sx={{
                      color: "inherit",
                      "&.active": {
                        color: "yellow",
                      },
                    }}
                  >
                    History
                  </Button>
                </ListItem>
              </List>
            </nav>
          </header>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
