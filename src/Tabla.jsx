function Tabla({ columnas, datos, claveId }) {
  return (
    <table>
      <thead>
        <tr>
          {columnas.map((col) => (
            <th key={col.clave}>{col.titulo}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila) => (
          <tr key={fila[claveId]}>
            {columnas.map((col) => (
              <td key={col.clave}>{fila[col.clave]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabla
