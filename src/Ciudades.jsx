import Seccion from './Seccion'

const ciudades = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Bucaramanga',
  'Cúcuta',
  'Pereira',
  'Santa Marta',
  'Manizales',
]

function Ciudades() {
  return (
    <Seccion titulo="Lista de ciudades">
      <ul>
        {ciudades.map((ciudad) => (
          <li key={ciudad}>{ciudad}</li>
        ))}
      </ul>
    </Seccion>
  )
}

export default Ciudades
