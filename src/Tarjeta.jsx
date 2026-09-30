function Tarjeta({ nombre, especie, habitat }) {
  return (
    <div className="tarjeta">
      <h3>{nombre}</h3>
      <p>Especie: {especie}</p>
      <p>Hábitat: {habitat}</p>
    </div>
  )
}

export default Tarjeta
