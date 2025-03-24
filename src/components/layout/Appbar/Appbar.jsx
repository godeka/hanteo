import "./Appbar.css";

export default function Appbar({ categories, currCategory, setCurrCategory }) {
  const handleClickCategory = (id) => {
    setCurrCategory(id);
  };

  return (
    <header className="appbar">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
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
