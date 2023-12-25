import "./app.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <input placeholder="Digite o CNPJ" />
        <button>Consultar</button>
      </div>
      <div className="info">
        <h4>Informações</h4>
      </div>
    </div>
  );
}

export default App;
