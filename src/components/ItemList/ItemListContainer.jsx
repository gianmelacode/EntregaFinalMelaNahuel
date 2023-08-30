import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import estilos from "./ItemList.module.css";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;

    const itemCollection = collection(db, "products");

    //query 1-a quien le voy a hacer la consulta ,2- como quiero filtrar esa coleccion
    //where 1- en base a que propiedad quiero filtrar, 2- la comparacion, 3- lo que quiero
    // hace una consulta(query) en itemcollection, donde(where) la categoria("caregory") sea igual("==") a categoryname
    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemCollectionFiltered;
    } else {
      //2 parametros, primera de que base de datos queres sacar la collecion, y la segunda, de esa base de datos cual de todas las colleciones queres
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  //tecnica de renderizado antes de que se vean los productos
  const loading = (
    <div style={{ display: "flex", justifyContent: "center", margin: "150px" }}>
      <MoonLoader color="black" size={120} speedMultiplier={7} />;
    </div>
  );
  return (
    <div>
      {items.length === 0 && loading}

      <h3 className={estilos.titulos}>
        Cartuchos {categoryName ? `${categoryName}` : ""}
      </h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
