import ColorList from "./ColorList"
import Form from "./Form"
import Values from "values.js"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

const App = () => {
  const [colors, setColors] = useState(new Values("#f15024").all(5))
  //storing all shades and tints of the hex color in the colors hooks as the default
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(5)
      setColors(newColors)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      {/* The placement of TaostContainer doesnt really matter  since it uses position absolute */}
      <ToastContainer position='top-left' />
    </main>
  )
}
export default App
