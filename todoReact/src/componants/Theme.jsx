const Theme = () => {
  return (
    <header className="flex between">
      <h1>Todo</h1>
      <button className="theme-switcher">
        <img src="./images/icon-moon.svg" alt="icon-sun" />
      </button>
    </header>
  );
};

export default Theme;
