import "./Button.scss";

export default function Button({ className, children, type, onClick }) {
  return (
    <button onClick={onClick} className={`button ${className}`} type={type}>
      {children}
    </button>
  );
}
