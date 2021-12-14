const Button = ({ hendleOnClick }) => {
  return (
    <div>
      <button
        type="button "
        onClick={hendleOnClick}
        className="button load-btn"
      >
        Load more
      </button>
    </div>
  );
};

export default Button;
