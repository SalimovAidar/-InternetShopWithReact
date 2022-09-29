import './button.css';

function Button ({ handleClick, name, buttonClass}) {
  return (
    <button onClick={handleClick} className={buttonClass}>
      {name}
    </button>
  );
}

export default Button;
