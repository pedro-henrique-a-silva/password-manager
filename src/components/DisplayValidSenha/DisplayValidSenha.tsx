import { FormDataType } from '../types';

import './DisplayValidSenha.css';

type DisplayValidSenhaProps = {
  formData: FormDataType
};

const PASSWORD_OK = 'valid-password-check';
const PASSWORD_NOT_OK = 'invalid-password-check';

function DisplayValidSenha(props: DisplayValidSenhaProps) {
  const { formData } = props;

  const validarLetrasNumeros = (string: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
    return regex.test(string);
  };

  const validarCaracteresEspeciais = (string: string) => {
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    return regex.test(string);
  };

  return (
    <div className="validSenhaContainer">
      <p
        className={ (formData.senha.length >= 8)
          ? PASSWORD_OK : PASSWORD_NOT_OK }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ (formData.senha.length <= 16)
          ? PASSWORD_OK : PASSWORD_NOT_OK }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={ (validarLetrasNumeros(formData.senha))
          ? PASSWORD_OK : PASSWORD_NOT_OK }
      >
        Possuir letras e números
      </p>
      <p
        className={ (validarCaracteresEspeciais(formData.senha))
          ? PASSWORD_OK : PASSWORD_NOT_OK }
      >
        Possuir algum caractere especial
      </p>
    </div>
  );
}

export default DisplayValidSenha;
