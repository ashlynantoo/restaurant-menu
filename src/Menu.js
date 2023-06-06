import React from "react";

const Menu = (props) => {
  const { items } = props;
  return (
    <div className="menu-section">
      {items.map((item) => {
        const { id, title, img, price, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="img" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
