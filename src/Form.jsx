import { useState } from "react"

const Form = ({ addColor }) => {
  const [color, setColor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className='container'>
      <h4>color generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          //the value attribute will be updated once i select an input value from the form
          value={color}
          //    By using "e.target.value", the code retrieves the new value entered in the input or selected element
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#15025'
        />
        <button
          className='btn'
          type='submit'
          style={{ background: color }}
          onChange={(e) => setColor(e.target.value)}>
          submit
        </button>
      </form>
    </section>
  )
}
export default Form
