const nombre = 'Gimnasio SayaGim'
const direccion = 'Calle 10 # 5-20, Bello Horizonte'
const telefono = '300 123 4567'
const horario = 'Lunes a sábado, 5:00 a.m. a 9:00 p.m.'

const clases = [
  { id: 1,
     nombre: 'Spinning',
      instructor: 'Laura Mejía',
       hora: '6:00 a.m.',
        cupos: 20 },

  { id: 2,
     nombre: 'Yoga',
      instructor: 'Camila Duarte',
       hora: '7:00 a.m.',
        cupos: 15 },

  { id: 3,
     nombre: 'Zumba',
      instructor: 'Andrés Suárez',
       hora: '8:00 a.m.',
        cupos: 30 },

  { id: 4,
     nombre: 'Crossfit',
      instructor: 'Mario León',
       hora: '12:00 m.',
        cupos: 12 },

  { id: 5,
     nombre: 'Pilates',
      instructor: 'Paula Rincón',
       hora: '4:00 p.m.',
        cupos: 15 },

  { id: 6,
     nombre: 'Boxeo',
      instructor: 'Diego Parra',
       hora: '5:00 p.m.',
        cupos: 10 },

  { id: 7,
     nombre: 'Funcional',
      instructor: 'Mario León',
       hora: '6:00 p.m.',
        cupos: 18 },

  { id: 8,
     nombre: 'Estiramiento',
      instructor: 'Camila Duarte',
       hora: '7:00 p.m.',
        cupos: 25 },
]

function PaginaFinal() {
  return (
    <section>
      <h2>{nombre}</h2>

      <div>
        <h3>Información principal</h3>
        <ul>
          <li>Dirección: {direccion}</li>
          <li>Teléfono: {telefono}</li>
          <li>Horario: {horario}</li>
        </ul>
      </div>

      <div>
        <h3>Clases disponibles</h3>
        <p>Estas son las clases que se dictan durante el día.</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Clase</th>
              <th>Instructor</th>
              <th>Hora</th>
              <th>Cupos</th>
            </tr>
          </thead>
          <tbody>
            {clases.map((clase) => (
              <tr key={clase.id}>
                <td>{clase.id}</td>
                <td>{clase.nombre}</td>
                <td>{clase.instructor}</td>
                <td>{clase.hora}</td>
                <td>{clase.cupos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PaginaFinal
