import { BsFillLockFill, BsLink45Deg, BsTrash3Fill } from 'react-icons/bs';
import { FormDataTypeWithId } from '../types';

import './PasswordList.css';

type PasswordListProps = {
  passwordDataList: FormDataTypeWithId[],
  handleDelete: (passwordID: string) => void,
  hidePassword: boolean
};

function PasswordList(props: PasswordListProps) {
  const { passwordDataList, hidePassword, handleDelete } = props;

  const hidingPassword = (string: string) => {
    return string.replace(/[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,!.<>/?]/g, '*');
  };

  return (
    <ul className="passwordListContainer">
      {(passwordDataList.length === 0)
      && <p className="withoutPasswordItem">Nenhuma senha cadastrada</p>}

      {(passwordDataList.length > 0)
        && passwordDataList.map((passData) => (
          <li key={ passData.id } className="passwordItem">
            <div>
              <BsFillLockFill color="white" />
              <a href={ passData.url }>
                {passData.servico}
                {' '}
                <BsLink45Deg color="white" />
              </a>
            </div>
            <div>
              <span>Login:</span>
              {' '}
              <span>{passData.login}</span>

            </div>
            <div>
              <span>Senha:</span>
              {' '}
              <span>
                {
              (hidePassword)
                ? hidingPassword(passData.senha)
                : passData.senha
                }
              </span>
            </div>
            <div>
              <button
                data-testid="remove-btn"
                onClick={ () => handleDelete(passData.id) }
              >
                <BsTrash3Fill color="#F58989" />
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default PasswordList;
