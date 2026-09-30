import Seccion from './Seccion'
import Tabla from './Tabla'

const peliculas = [
  { id: 1,
     titulo: 'Titanic',
      director: 'James Cameron',
       genero: 'Drama',
        año: 1997,
         duracion: '195 min' },

  { id: 2,
     titulo: 'El Padrino',
      director: 'Francis Ford Coppola',
       genero: 'Crimen',
        año: 1972,
         duracion: '175 min' },

  { id: 3,
     titulo: 'Inception',
      director: 'Christopher Nolan',
       genero: 'Ciencia ficción',
        año: 2010,
         duracion: '148 min' },

  { id: 4,
     titulo: 'Parásitos',
      director: 'Bong Joon-ho',
       genero: 'Thriller',
        año: 2019,
         duracion: '132 min' },

  { id: 5,
     titulo: 'Toy Story',
      director: 'John Lasseter',
       genero: 'Animación',
        año: 1995,
         duracion: '81 min' },

  { id: 6,
     titulo: 'Jurassic Park',
      director: 'Steven Spielberg',
       genero: 'Aventura',
        año: 1993,
         duracion: '127 min' },

  { id: 7,
     titulo: 'El Rey León',
      director: 'Roger Allers y Rob Minkoff',
       genero: 'Animación',
        año: 1994,
         duracion: '88 min' },

  { id: 8,
     titulo: 'Gladiador',
      director: 'Ridley Scott',
       genero: 'Acción',
        año: 2000,
         duracion: '155 min' },

  { id: 9,
     titulo: 'Coco',
      director: 'Lee Unkrich',
       genero: 'Animación',
        año: 2017,
         duracion: '105 min' },

  { id: 10,
     titulo: 'Interstellar',
      director: 'Christopher Nolan',
       genero: 'Ciencia ficción',
        año: 2014,
         duracion: '169 min' },
]

const columnas = [
  { titulo: 'ID', clave: 'id' },
  { titulo: 'Título', clave: 'titulo' },
  { titulo: 'Director', clave: 'director' },
  { titulo: 'Género', clave: 'genero' },
  { titulo: 'Año', clave: 'año' },
  { titulo: 'Duración', clave: 'duracion' },
]

function Peliculas() {
  return (
    <Seccion titulo="Catálogo de películas">
      <Tabla columnas={columnas} datos={peliculas} claveId="id" />
    </Seccion>
  )
}

export default Peliculas
