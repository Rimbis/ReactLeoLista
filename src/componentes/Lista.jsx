
const Lista = ({ texto, isCompleted, onDelete, onToggle }) => {
  return (
    <li className= "decoList" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <span onClick={onToggle}>{texto}</span>

  <button className="btn-eliminar" onClick={onDelete}>x</button>

    </li>
  )
}
export default Lista