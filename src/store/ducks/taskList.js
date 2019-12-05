import _ from 'lodash';

export const Types = {
  ADD_REQUEST: 'taskList/ADD_REQUEST',
  ADD_SUCCESS: 'taskList/ADD_SUCCESS',
  ADD_FAILURE: 'taskList/ADD_FAILURE',
  RESET_STATE: 'taskList/RESET_STATE',
};

const initialState = {
  data: null,
  loading: false,
  errorMessage: null,
};

export default function taskList(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: action.payload.Data,
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
  taskListRequest: () => ({
    type: Types.ADD_REQUEST,
    payload: {},
  }),

  taskListSuccess: Data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      Data,
    },
  }),

  taskListError: (message = 'Erro ao autenticar.') => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  taskListResetState: () => ({
    type: Types.RESET_STATE,
  }),
};
