import { toast } from "react-toastify"

const SingleColor = ({ color, index }) => {
  console.log(color)
  const { hex, weight } = color
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("color copied to clipboard")
      } catch (error) {
        toast.error("Failed to copy to a clipboard")
      }
    } else {
      toast.error("clipboard access not available  ")
    }
  }
  return (
    <article
      className={index > 32 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}>
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  )
}
export default SingleColor
