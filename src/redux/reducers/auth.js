const initialState = {
  loading: false,
  error: null,
  token: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_AUTH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_AUTH_ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "FETCH_AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        token: payload,
      };
    default:
      return state;
  }
}
