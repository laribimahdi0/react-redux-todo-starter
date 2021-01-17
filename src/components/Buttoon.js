function Button({ text, color = "primary", ...props }) {
  return (
    <button className={`btn btn-${color} `} {...props}>
      {text}
    </button>
  );
}
export default Button;
