import Seccion from './Seccion'

const platos = [
  { id: 1,
     nombre: 'Empanadas (3 unidades)',
      categoria: 'Entrada',
       precio: 6000 },

  { id: 2,
     nombre: 'Patacones con hogao',
      categoria: 'Entrada',
       precio: 9000 },

  { id: 3,
     nombre: 'Arepa rellena',
      categoria: 'Entrada',
       precio: 10000 },

  { id: 4,
     nombre: 'Bandeja paisa',
      categoria: 'Plato fuerte',
       precio: 28000 },

  { id: 5,
     nombre: 'Sancocho de gallina',
      categoria: 'Plato fuerte',
       precio: 22000 },

  { id: 6,
     nombre: 'Pechuga a la plancha',
      categoria: 'Plato fuerte',
       precio: 20000 },

  { id: 7,
     nombre: 'Limonada natural',
      categoria: 'Bebida',
       precio: 5000 },

  { id: 8,
     nombre: 'Jugo de mora',
      categoria: 'Bebida',
       precio: 6000 },

  { id: 9,
     nombre: 'Tres leches',
      categoria: 'Postre',
       precio: 9000 },

  { id: 10,
     nombre: 'Arroz con leche',
      categoria: 'Postre',
       precio: 7000 },
]

function Menu() {
  return (
    <Seccion titulo="Menú de restaurante">
      {platos.map((plato) => (
        <div key={plato.id}>
          <h3>{plato.nombre}</h3>
          <p>Categoría: {plato.categoria}</p>
          <p>Precio: $ {plato.precio}</p>
        </div>
      ))}
    </Seccion>
  )
}

export default Menu
