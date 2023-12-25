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
      <div className="info-cnpj">
        <h3>Razão social: Eduardo</h3>
        <h4>Nome fantasia: Emss Consultoria LTDA </h4>
        <ul>
          <li>CNPJ</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
