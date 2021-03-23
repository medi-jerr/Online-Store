import React from "react";
import { Container, Link, Ul, Logo, Input, Button } from "./style";
import { GiShoppingCart } from "react-icons/gi";

function index() {
  return (
    <Container>
      <Logo>
        <span>Jer</span>Shop
      </Logo>
      <form action="">
        <Input type="text" placeholder="What are you lookin for?" />
        <Button>Search</Button>
      </form>
      <Ul>
        <li>
          <Link logo to="/cart">
            <GiShoppingCart size="23px" />
          </Link>
        </li>
        <li>
          <Link to="/loginin">Login in</Link>
        </li>
        <li>
          <Link sign to="/signup">
            Sign Up
          </Link>
        </li>
      </Ul>
    </Container>
  );
}

export default index;
