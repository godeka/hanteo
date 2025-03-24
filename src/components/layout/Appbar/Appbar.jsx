import "./Appbar.css";

export default function Appbar({
  categories,
  currCategory,
  handleClickCategory,
}) {
  return (
    <header className="appbar">
      <ul className="category-list">
        {categories.map((category) => {
          return (
            <li key={category.id} className="category-item">
              <button
                className={
                  currCategory === category.id ? "current-category" : ""
                }
                onClick={() => handleClickCategory(category.id)}
              >
                {category.title}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
