import React from "react";
import estilos from "./Footer.module.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className={estilos.contenedor}>
      <img
        src="https://res.cloudinary.com/difrhbjlk/image/upload/v1680910802/logo_ror0vj.png"
        alt="Megra Drive"
        className={estilos.logotipo}
      />
      <div className={estilos.listas}>
        <Link>Contacto</Link>
        <Link>Nosotros</Link>
      </div>
      <div className={estilos.listas}>
        <Link>
          <InstagramIcon />
        </Link>
        <Link>
          <FacebookIcon />
        </Link>
        <Link>
          <WhatsAppIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
