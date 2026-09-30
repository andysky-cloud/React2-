import Seccion from './Seccion'
import Tarjeta from './Tarjeta'

const animales = [
  { nombre: 'León',
     especie: 'Panthera leo',
      habitat: 'Sabana' },

  { nombre: 'Delfín',
     especie: 'Delphinus delphis',
      habitat: 'Océano' },

  { nombre: 'Águila real',
     especie: 'Aquila chrysaetos',
      habitat: 'Montañas' },

  { nombre: 'Oso polar',
     especie: 'Ursus maritimus',
      habitat: 'Ártico' },

  { nombre: 'Tortuga marina',
     especie: 'Chelonia mydas',
      habitat: 'Océano' },

  { nombre: 'Elefante',
     especie: 'Loxodonta africana',
      habitat: 'Sabana' },

  { nombre: 'Pingüino emperador',
     especie: 'Aptenodytes forsteri',
      habitat: 'Antártida' },

  { nombre: 'Jaguar',
     especie: 'Panthera onca',
      habitat: 'Selva' },

  { nombre: 'Cóndor andino',
     especie: 'Vultur gryphus',
      habitat: 'Cordillera de los Andes' },

  { nombre: 'Rana dardo',
     especie: 'Dendrobates tinctorius',
      habitat: 'Selva tropical' },
]

function Animales() {
  return (
    <Seccion titulo="Lista de animales">
      <div className="contenedor">
        {animales.map((animal) => (
          <Tarjeta
            key={animal.nombre}
            nombre={animal.nombre}
            especie={animal.especie}
            habitat={animal.habitat}
          />
        ))}
      </div>
    </Seccion>
  )
}

export default Animales
