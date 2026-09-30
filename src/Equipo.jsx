import Seccion from './Seccion'
import Tabla from './Tabla'

const jugadores = [
  { numero: 1,
     nombre: 'Andrés',
      apellido: 'Molina',
       posicion: 'Portero',
        edad: 28 },

  { numero: 2,
     nombre: 'Carlos',
      apellido: 'Ríos',
       posicion: 'Defensa',
        edad: 24 },

  { numero: 3,
     nombre: 'Juan',
      apellido: 'Pérez',
       posicion: 'Defensa',
        edad: 26 },

  { numero: 4,
     nombre: 'Luis',
      apellido: 'Gómez',
       posicion: 'Defensa',
        edad: 30 },

  { numero: 5,
     nombre: 'Mateo',
      apellido: 'Vargas',
       posicion: 'Defensa',
        edad: 22 },

  { numero: 6,
     nombre: 'Sergio',
      apellido: 'Castro',
       posicion: 'Mediocampista',
        edad: 27 },

  { numero: 7,
     nombre: 'Santiago',
      apellido: 'Díaz',
       posicion: 'Delantero',
        edad: 23 },

  { numero: 8,
     nombre: 'David',
      apellido: 'Torres',
       posicion: 'Mediocampista',
        edad: 25 },

  { numero: 9,
     nombre: 'Camilo',
      apellido: 'Herrera',
       posicion: 'Delantero',
        edad: 31 },

  { numero: 10,
     nombre: 'Felipe',
      apellido: 'Rojas',
       posicion: 'Mediocampista',
        edad: 29 },

  { numero: 11,
     nombre: 'Julián',
      apellido: 'Ortiz',
       posicion: 'Delantero',
        edad: 21 },
]

const columnas = [
  { titulo: 'Número', clave: 'numero' },
  { titulo: 'Nombre', clave: 'nombre' },
  { titulo: 'Apellido', clave: 'apellido' },
  { titulo: 'Posición', clave: 'posicion' },
  { titulo: 'Edad', clave: 'edad' },
]

function Equipo() {
  return (
    <Seccion titulo="Equipo de fútbol">
      <Tabla columnas={columnas} datos={jugadores} claveId="numero" />
    </Seccion>
  )
}

export default Equipo
