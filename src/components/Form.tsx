import Input from './Input/Input';
import Button from './Button/Button';
import './Form.css';

type FormProps = {
  handleShowForm: (show: boolean) => void
};

function Form(props: FormProps) {
  const { handleShowForm } = props;
  return (
    <form className="formCadSenha">
      <div className="formControl">
        <Input
          className="inputForm largeInput"
          id="servico"
          label="Nome do Serviço"
        />
      </div>
      <div className="formControl">
        <Input
          className="inputForm smallInput"
          id="login"
          label="Login"
        />
        <Input
          type="password"
          className="inputForm smallInput"
          id="senha"
          label="Senha"
        />
      </div>
      <div className="formControl">
        <Input
          className="inputForm largeInput"
          id="url"
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
        <Button label="Cadastrar" className="btnCadastrar" />
      </div>
    </form>
  );
}

export default Form;
