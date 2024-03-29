import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const App = () => {
  const newCategories = [
    "All",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const filterItemsByCategory = (category) => {
    if (category === "All") {
      setMenuItems(items);
    } else {
      setMenuItems(
        items.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  return (
    <main>
      <section className="section menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItemsByCategory={filterItemsByCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
