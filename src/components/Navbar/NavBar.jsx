import BurgerButtom from "../BurgerButton/BurgerButtom";
import CartWidget from "../CartWidget/CartWidget";
import estilos from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoryResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoryResult);
      })
      .catch((err) => console.log(err));
  }, []);

  const [click, setClick] = useState(false);
  //cuando esta true lo pasa a false y viceversa
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className={estilos.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/difrhbjlk/image/upload/v1680910802/logo_ror0vj.png"
            title="mega drive"
            alt="mega drive"
            className={estilos.logotipo}
          />
        </Link>
        <div
          className={`${estilos.navbar} ${click ? estilos.navbarMobile : ""}`}
        >
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>
        <div className={estilos.burguer}>
          <BurgerButtom click={click} handleClick={handleClick} />
        </div>
        <div className={estilos.carrito}>
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
