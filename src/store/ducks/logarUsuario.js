import _ from 'lodash';

export const Types = {
  ADD_REQUEST: 'logarUsuario/ADD_REQUEST',
  ADD_SUCCESS: 'logarUsuario/ADD_SUCCESS',
  ADD_FAILURE: 'logarUsuario/ADD_FAILURE',
  RESET_STATE: 'logarUsuario/RESET_STATE',
};

_userList = input => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    phone: input.phone,
    address: input.address,
  };
};

const initialState = {
  data: null,
  loading: false,
  errorMessage: null,
};

export default function logarUsuario(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      const data = {
        ...action.payload.Data,
        // ..._.map(action.payload.Data, this._userList),
      };
      return {
        ...state,
        data,
        loading: false,
        errorMessage: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      };
    case Types.RESET_STATE:
      return {
        ...state,
        ...initialState, // Retorna para o estado inicial do componente
      };
    default:
      return state;
  }
}

export const Creators = {
  logarUsuarioRequest: (userId, password) => ({
    type: Types.ADD_REQUEST,
    payload: {},
  }),

  logarUsuarioSuccess: Data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      Data,
    },
  }),

  logarUsuarioError: (message = 'Erro ao autenticar.') => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  logarUsuarioResetState: () => ({
    type: Types.RESET_STATE,
  }),
};
