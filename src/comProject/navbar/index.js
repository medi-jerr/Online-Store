import {
  Content,
  Logo,
  LinkBar,
  ListBar,
  Fabars,
  IconBar,
  Ul,
} from "./NavStyle";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ colour }) {
  const [bold, setBold] = useState(false);

  // useEffect(() => {
  //   window.onscroll =
  //     console.log("jj");
  //   };
  // });
  const backgroundColor = () => {
    if (window.scrollY > 80) {
      setBold(true);
    } else {
      setBold(false);
    }
  };
  window.addEventListener("scroll", backgroundColor);
  return (
    <Router>
      <Content colour={colour} bold={bold}>
        <Logo colour={colour}>Jerr</Logo>
        <Ul>
          <ListBar>
            <LinkBar exact to="/">
              Home
            </LinkBar>
          </ListBar>
          <ListBar>
            <LinkBar to="/about">About</LinkBar>
          </ListBar>
          <ListBar>
            <LinkBar to="/support">Support</LinkBar>
          </ListBar>
          <ListBar>
            <LinkBar to="/login">Login</LinkBar>
          </ListBar>
          <ListBar>
            <LinkBar to="/signUp">Sign Up</LinkBar>
          </ListBar>
        </Ul>
        <IconBar>
          <Fabars />
        </IconBar>
      </Content>
    </Router>
  );
}

export default Navbar;
