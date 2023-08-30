import { TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div>
      <h3>Ingresa</h3>
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <button>ingresar</button>
      </form>
    </div>
  );
};

export default Login;
