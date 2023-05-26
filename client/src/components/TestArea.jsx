function TestArea({ name, value, setFunction }) {
  return (
    <label>
      {name}
      <textarea
        name={name}
        cols="30"
        rows="10"
        value={value}
        onChange={
          setFunction
        } />
    </label>
  )
}

export default TestArea
