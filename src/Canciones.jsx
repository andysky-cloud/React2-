import Seccion from './Seccion'
import Tabla from './Tabla'

const canciones = [
  { id: 1,
     titulo: 'Despacito',
      artista: 'Luis Fonsi',
       album: 'Vida',
        año: 2017 },

  { id: 2,
     titulo: "Hips Don't Lie",
      artista: 'Shakira',
       album: 'Oral Fixation Vol. 2',
        año: 2006 },

  { id: 3,
     titulo: 'Ojos así',
      artista: 'Shakira',
       album: 'Dónde están los ladrones',
        año: 1998 },

  { id: 4,
     titulo: 'La bicicleta',
      artista: 'Carlos Vives y Shakira',
       album: 'Vives',
        año: 2016 },

  { id: 5,
     titulo: 'Yesterday',
      artista: 'The Beatles',
       album: 'Help!',
        año: 1965 },

  { id: 6,
     titulo: 'Bohemian Rhapsody',
      artista: 'Queen',
       album: 'A Night at the Opera',
        año: 1975 },

  { id: 7,
     titulo: 'Believer',
      artista: 'Imagine Dragons',
       album: 'Evolve',
        año: 2017 },

  { id: 8,
     titulo: 'Blinding Lights',
      artista: 'The Weeknd',
       album: 'After Hours',
        año: 2020 },
]

const columnas = [
  { titulo: 'ID', clave: 'id' },
  { titulo: 'Título', clave: 'titulo' },
  { titulo: 'Artista', clave: 'artista' },
  { titulo: 'Álbum', clave: 'album' },
  { titulo: 'Año', clave: 'año' },
]

function Canciones() {
  return (
    <Seccion titulo="Tabla de canciones">
      <Tabla columnas={columnas} datos={canciones} claveId="id" />
    </Seccion>
  )
}

export default Canciones
