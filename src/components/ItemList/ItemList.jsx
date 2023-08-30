import ItemCard from "./ItemCard";
import estilos from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={estilos.flex}>
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
