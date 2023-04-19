const Button = ({ addClickHandler, children }) => {
  return <button onClick={addClickHandler}>{children}</button>
}

export default Button