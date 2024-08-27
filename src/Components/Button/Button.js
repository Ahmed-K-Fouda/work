import "./Button.css";
import "../../app.css";
function Button({ children, onClick }) {
  return (
    <button className="view__btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
