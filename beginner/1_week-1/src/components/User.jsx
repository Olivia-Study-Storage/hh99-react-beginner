const User = ({ item, removeClickHandler }) => {
  return (
    <section key={item.id}>
      {item.age} - {item.name}
      <button
        // onClick={removeClickHandler(item.id)} 이렇게 바로 호출하면 안됨!
        onClick={() => removeClickHandler(item.id)}
      >
        X
      </button>
    </section>
  )
}

export default User