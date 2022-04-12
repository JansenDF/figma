import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

function App() {
const [nome , setNome] = useState('');
const [nascimento , setNascimento] = useState('');
const [cpf , setCpf] = useState('');
const [rg , setRg] = useState('');
const [email , setEmail] = useState('');
const [telefone , setTelefone] = useState('');
const [sexo , setSexo] = useState('');
const [cep , setCep] = useState('');
const [logradouro , setLogradouro] = useState('');
const [bairro , setBairro] = useState('');
const [complemento , setComplemento] = useState('');
const [cidade , setCidade] = useState('');
const [uf , setUf] = useState('');

const handleChange =(e)=>{
setNome(e.target.value);
}
const handleNascimentoChange =(e)=>{
setNascimento(e.target.value);
}
const handleCpfChange =(e)=>{
setCpf(e.target.value);
}
const handleRgChange =(e)=>{
setRg(e.target.value);
}
const handleTelefoneChange =(e)=>{
setTelefone(e.target.value);
}
const handleEmailChange =(e)=>{
setEmail(e.target.value);
}
const handleCepChange =(e)=>{
setCep(e.target.value);
}
const handleLogradouroChange =(e)=>{
setLogradouro(e.target.value);
}
const handleBairroChange =(e)=>{
setBairro(e.target.value);
}
const handleComplementoChange =(e)=>{
setComplemento(e.target.value);
}
const handleCidadeChange =(e)=>{
setCidade(e.target.value);
}
const handleUfChange =(e)=>{
setUf(e.target.value);
}
const handleSexoChange =(e)=>{
setSexo(e.target.value);
}
const handleSubmit=(e)=>{
  e.preventDefault();
}
return (
  <div className="App">
    <div className="App-nav">
      <b>Tellus SA</b>
      <ul className="menu">
        <li><a href="#">Plano de ação</a></li>
        <li><a href="#">Cadastro de acompanhamento</a></li>
      </ul>
    </div>
    <header className="App-header">
      <img src="image.jpg"></img>
      <h1> Cadastrar usuário </h1><br/>
      <form className="formCadastro" onSubmit={(e) => {handleSubmit(e)}}>
        {/*Quando o usuario submeter o formulario, a função handleSubmit() será chamada .*/}
        
        <div className="row">
          <div className="col-1">
            <label>Nome Completo</label><br/>
            <input type="text" style={{width: "100%"}}value={nome} placeholder="Nome completo" required onChange={(e) => {handleChange(e)}} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Nascimento</label><br/>
            <input type="date" value={nascimento} placeholder="Nascimento" required onChange={(e) => {handleNascimentoChange(e)}} />
          </div>
          <div className="col-3">
            <label>CPF</label><br/>
            <input type="number" value={cpf} placeholder="CPF" required onChange={(e) => {handleCpfChange(e)}} />
          </div>
          <div className="col-3">
            <label>RG</label><br/>
            <input type="number" value={rg} placeholder="RG" required onChange={(e) => {handleRgChange(e)}} />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label>Email</label><br/>
            <input type="email" value={email} placeholder="Email" required onChange={(e) => {handleEmailChange(e)}} />
          </div>
          <div className="col-3">
            <label>Telefone</label><br/>
            <input type="tel" value={telefone} placeholder="Telefone" required onChange={(e) => {handleTelefoneChange(e)}} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Sexo</label><br/>
            <input type="text" value={sexo} placeholder="Sexo" required onChange={(e) => {handleSexoChange(e)}} />
          </div>
        </div>

        <br/>
        <hr/>
        <br/>

        <div className="row">
          <div className="col-3">
            <label>CEP</label><br/>
            <input type="number" value={cep} placeholder="CEP" required onChange={(e) => {handleCepChange(e)}} />
          </div>
          <div className="col-2">
            <label>Logradouro</label><br/>
            <input type="text" value={logradouro} placeholder="Logradouro" required onChange={(e) => {handleLogradouroChange(e)}} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Bairro</label><br/>
            <input type="text" value={bairro} placeholder="Bairro" required onChange={(e) => {handleBairroChange(e)}} />
          </div>
          <div className="col-2">
            <label> Complemento</label><br/>
            <input type="text" value={complemento} placeholder="Complemento" required onChange={(e) => {handleComplementoChange(e)}} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Cidade</label><br/>
            <input type="text" value={cidade} placeholder="Cidade" required onChange={(e) => {handleCidadeChange(e)}} />
          </div>
          <div className="col-5">
            <label>UF</label><br/>
            <input type="text" value={uf} placeholder="UF" required onChange={(e) => {handleUfChange(e)}} />
          </div>
        </div>
          <div className="button">
            <button type="submit" required onChange={(e) => {handleSubmit(e)}}>Cadastrar</button>
          </div>

      </form>
    </header>
  </div>
  );
  }

export default App;
