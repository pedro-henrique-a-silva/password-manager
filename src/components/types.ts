export type FormDataType = {
  servico: string,
  login: string,
  senha: string,
  url: string,
};

export type FormDataTypeWithId = FormDataType & { id: string };
