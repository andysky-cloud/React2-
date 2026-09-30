import Seccion from './Seccion'

const titulo = 'Cien años de soledad'
const autor = 'Gabriel García Márquez'
const año = 1967
const editorial = 'Editorial Sudamericana'
const paginas = 471

function Libro() {
  return (
    <Seccion titulo="Información de un libro">
      <h3>{titulo}</h3>
      <ul>
        <li>Autor: {autor}</li>
        <li>Año de publicación: {año}</li>
        <li>Editorial: {editorial}</li>
        <li>Número de páginas: {paginas}</li>
      </ul>
    </Seccion>
  )
}

export default Libro
