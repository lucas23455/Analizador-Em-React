import React, { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Analizador de Números</h1>
    </header>
  );
};

const Section = () => {
  const [num, setNum] = useState('');
  const [valores, setValores] = useState([]);
  const [result, setResult] = useState('');

  const isNumero = (n) => {
    const numero = Number(n);
    return numero >= 1 && numero <= 100 && !isNaN(numero);
  };

  const inLista = (n, l) => {
    return l.includes(Number(n));
  };

  const adicionar = () => {
    if (isNumero(num) && !inLista(num, valores)) {
      setValores([...valores, Number(num)]);
      setNum(''); // Limpa o campo de entrada após adicionar o número
    } else {
      alert('Valor inválido ou já encontrado na lista.');
    }
  };

  const finalizar = () => {
    if (valores.length === 0) {
      alert('Adicione valores antes de finalizar.');
    } else {
      const tot = valores.length;
      const maior = Math.max(...valores);
      const menor = Math.min(...valores);
      const soma = valores.reduce((acc, curr) => acc + curr, 0);
      const media = soma / tot;

      console.log(`Total de números: ${tot}`);
      console.log(`Maior valor: ${maior}`);
      console.log(`Menor valor: ${menor}`);
      console.log(`Soma total: ${soma}`);
      console.log(`Média: ${media}`);


      setResult(
        <div>
          <p>Ao todo, temos {tot} números cadastrados</p>
          <p>O maior valor informado foi {maior}</p>
          <p>O menor valor informado foi {menor}</p>
          <p>A soma total será {soma}</p>
          <p>A média total será {media}</p>
        </div>
      )
    }
  };

  return (
    <section>
      <div>
        <label>
          Números (entre 1 e 100):
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </label>
        <button onClick={adicionar}>Adicionar</button>
      </div>
      <div>
        <select name="flista" id="flista" size="6">
          {valores.map((valor, index) => (
            <option key={index}> {valor} </option>
          ))}
        </select>
        <button onClick={finalizar}>Finalizar</button>
      </div>
      <div id="res">{result}</div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy;lucaspassos</p>
    </footer>
  );
};

export default App;
