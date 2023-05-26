function Select({ name,options, value, setFunction }) {
  return (
    <select
     name={name} 
     value={value}
      onChange={
      setFunction
    }>
      <option disabled>Select Category</option>
      {options.map(option=> <option key={option} value={option}>{option}</option>)}
    </select>
  )
}

export default Select
