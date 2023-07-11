import { useState } from 'react';

import Input from './Input/Input';
import Button from './Button/Button';
import DisplayValidSenha from './DisplayValidSenha/DisplayValidSenha';

import { FormDataType } from './types';
import './Form.css';

type FormProps = {
  handleShowForm: (show: boolean) => void,
  savePassword: (formData: FormDataType) => void
};

const INITIAL_FORM_VALUES: FormDataType = {
  servico: '',
  login: '',
  senha: '',
  url: '',
};

function Form(props: FormProps) {
  const { handleShowForm, savePassword } = props;

  const [btnCadastrarEnable, setBtnCadastrarEnable] = useState(true);
  const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_VALUES);

  function validarSenha(senha: string) {
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;
    return regex.test(senha);
  }

  const validaForm = () => {
    const validaServico = (formData.servico).trim() !== '';
    const validaLogin = ((formData.login).trim() !== '');
    const validaUrl = ((formData.url).trim() !== '');
    const validaSenha = validarSenha(formData.senha);

    setBtnCadastrarEnable(!(validaServico && validaLogin && validaSenha && validaUrl));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    savePassword(formData);
    setFormData(INITIAL_FORM_VALUES);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <section className="formContainer">
      <form className="formCadSenha" onSubmit={ handleSubmit }>
        <div className="formControl">
          <Input
            className="inputForm largeInput"
            id="servico"
            value={ formData.servico }
            onChange={ handleChange }
            onKeyUp={ () => validaForm() }
            label="Nome do Serviço"
          />
        </div>
        <div className="formControl">
          <Input
            className="inputForm smallInput"
            id="login"
            value={ formData.login }
            onChange={ handleChange }
            onKeyUp={ () => validaForm() }
            label="Login"
          />
          <Input
            type="password"
            className="inputForm smallInput"
            id="senha"
            value={ formData.senha }
            onChange={ handleChange }
            onKeyUp={ () => validaForm() }
            label="Senha"
          />
        </div>
        <div className="formControl">
          <Input
            className="inputForm largeInput"
            id="url"
            value={ formData.url }
            onChange={ handleChange }
            onKeyUp={ () => validaForm() }
            label="URL"
          />
        </div>
        <p>* campos Obrigatorios</p>
        <div className="formControl fieldButtons">

          <Button
            label="Cancelar"
            onClick={ () => handleShowForm(false) }
            className="btnCancelar"
          />

          <Button
            label="Cadastrar"
            className="btnCadastrar"
            disabled={ btnCadastrarEnable }
          />
        </div>
      </form>
      <DisplayValidSenha formData={ formData } />
    </section>

  );
}

export default Form;
