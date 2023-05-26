function Input({ name, value, setFunction }) {

  return (
    <label>
      {name}
      <input
        name={name}
        type="text"
        value={value}
        onChange={setFunction} />
    </label>
  )
}

export default Input
