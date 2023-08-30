import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import estilos from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 8,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    fontSize: 10,
    color: `white`,
    background: `green`,
  },
}));

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={total} color="secondary">
          <ShoppingCartIcon className={estilos.iconoCarrito} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

export default CartWidget;
