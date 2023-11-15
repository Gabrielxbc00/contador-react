// MeuContador.jsx
import { useState } from "react";
import styles from './button.module.css';

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <div className="container">
      <h1>Meu contador:</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
    </div>
  );
}
