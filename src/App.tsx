import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import PasswordList from './components/PasswordList/PasswordList';
import Form from './components/Form';
import Button from './components/Button/Button';

import { FormDataType, FormDataTypeWithId } from './components/types';
import Input from './components/Input/Input';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const [passwordDataList, setPasswordData] = useState<FormDataTypeWithId[]>([]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const savePassword = (formData: FormDataType) => {
    const id = uuidv4();
    setPasswordData(
      [
        ...passwordDataList,
        { ...formData, id },
      ],
    );
    setShowForm(false);
  };

  const handleDelete = (passwordID: string) => {
    setPasswordData(
      passwordDataList
        .filter((passwordInfo) => passwordInfo.id !== passwordID),
    );
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setHidePassword(checked);
  };
  return (
    <>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>

      {!showForm
        && <Button
          onClick={ () => handleShowForm() }
          label="Cadastrar nova senha"
          className="btnNovaSenha"
        />}

      <main>
        {showForm
      && <Form handleShowForm={ handleShowForm } savePassword={ savePassword } />}
        <Input
          type="checkbox"
          label="Esconder Senhas"
          checked={ hidePassword }
          onChange={ handleClick }
        />
        <PasswordList
          passwordDataList={ passwordDataList }
          handleDelete={ handleDelete }
          hidePassword={ hidePassword }
        />
      </main>

    </>
  );
}

export default App;
