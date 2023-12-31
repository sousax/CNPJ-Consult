import React from "react";
import "./app.css";
import { useState } from "react";

function App() {
  const [cnpj, setCnpj] = useState("");
  const [currentCnpj, setCurrentCnpj] = useState(null);

  const handleCnpj = async () => {
    const cnpjData = await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
    );
    const newCnpj = await cnpjData.json();
    setCurrentCnpj(newCnpj);
  };

  return (
    <div className="App">
      <div className="container">
        <input
          placeholder="Digite o CNPJ"
          value={cnpj}
          onChange={(event) => setCnpj(event.target.value)}
        />
        <button onClick={handleCnpj}>Consultar</button>
      </div>
      <div className="info">
        <h4>Informações</h4>
      </div>

      {currentCnpj && (
        <div className="info-cnpj">
          <h3>Razão social:{currentCnpj.razao_social} </h3>
          <h4>Nome fantasia:{currentCnpj.nome_fantasia} </h4>

          <p>CNPJ: {currentCnpj.cnpj}</p>
          <p>Logradouro: {currentCnpj.logradouro}</p>
          <p>Numero: {currentCnpj.numero}</p>
          <p>Bairro:{currentCnpj.bairro}</p>
          <p>complemento: {currentCnpj.complemento}</p>
          <p>CEP: {currentCnpj.cep}</p>
          <p>Estado: {currentCnpj.uf}</p>
          <p>Município: {currentCnpj.municipio}</p>
          <p>Simples Nacional: {currentCnpj.opcao_pelo_simples}</p>
          <p>Microempreendedor: {currentCnpj.opcap_pelo_mei}</p>
        </div>
      )}
    </div>
  );
}

export default App;
