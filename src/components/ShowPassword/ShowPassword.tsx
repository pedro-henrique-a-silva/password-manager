import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import './ShowPassword.css';

type ShowPasswordProps = {
  isPasswordVisible: boolean,
  showInputPassword: (() => void)
};

function ShowPassword(props: ShowPasswordProps) {
  const { isPasswordVisible, showInputPassword } = props;
  return (
    <button
      className="showHidePassword"
      data-testid="show-hide-form-password"
      onClick={ () => showInputPassword() }
      type="button"
    >
      {(!isPasswordVisible)
        ? <BsFillEyeFill />
        : <BsFillEyeSlashFill />}
    </button>
  );
}

export default ShowPassword;
