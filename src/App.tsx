import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Button from './components/Button/Button';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (show: boolean) => {
    setShowForm(show);
  };
  return (
    <>
      <header>
        <h1>Gerenciador de senhas</h1>

      </header>
      {!showForm
        && <Button
          onClick={ () => handleShowForm(true) }
          label="Cadastrar nova senhas"
          className="btnNovaSenha"
        />}

      {showForm
      && (<main><Form handleShowForm={ handleShowForm } /></main>)}

    </>
  );
}

export default App;
