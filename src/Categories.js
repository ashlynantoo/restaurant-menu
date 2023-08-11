const Categories = (props) => {
  const { categories, filterItemsByCategory } = props;

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="category-btn"
            onClick={() => {
              filterItemsByCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
