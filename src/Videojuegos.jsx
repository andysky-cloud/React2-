import Seccion from './Seccion'
import Tabla from './Tabla'

const videojuegos = [
  { id: 1,
     nombre: 'Minecraft',
      plataforma: 'Multiplataforma',
       genero: 'Sandbox',
        año: 2011 },

  { id: 2,
     nombre: 'Zelda: Breath of the Wild',
      plataforma: 'Nintendo Switch',
       genero: 'Aventura',
        año: 2017 },

  { id: 3,
     nombre: 'Fortnite',
      plataforma: 'Multiplataforma',
       genero: 'Battle royale',
        año: 2017 },

  { id: 4,
     nombre: 'Super Mario Odyssey',
      plataforma: 'Nintendo Switch',
       genero: 'Plataformas',
        año: 2017 },

  { id: 5,
     nombre: 'God of War',
      plataforma: 'PlayStation 4',
       genero: 'Acción',
        año: 2018 },

  { id: 6,
     nombre: 'Red Dead Redemption 2',
      plataforma: 'PS4 / Xbox One',
       genero: 'Acción y aventura',
        año: 2018 },

  { id: 7,
     nombre: 'Portal 2',
      plataforma: 'PC',
       genero: 'Puzzle',
        año: 2011 },

  { id: 8,
     nombre: 'The Witcher 3',
      plataforma: 'PC',
       genero: 'RPG',
        año: 2015 },
]

const columnas = [
  { titulo: 'ID', clave: 'id' },
  { titulo: 'Nombre', clave: 'nombre' },
  { titulo: 'Plataforma', clave: 'plataforma' },
  { titulo: 'Género', clave: 'genero' },
  { titulo: 'Año de lanzamiento', clave: 'año' },
]

function Videojuegos() {
  return (
    <Seccion titulo="Tabla de videojuegos">
      <Tabla columnas={columnas} datos={videojuegos} claveId="id" />
    </Seccion>
  )
}

export default Videojuegos
