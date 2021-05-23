const initialState = {
  loading: false,
  projects: [],
  historyLinks: [
    {
      title: "#",
    },
  ],
  error: null,
};

export default function projectReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "FETCH_PROJECT_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PROJECT_ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "FETCH_PROJECT_SUCCESS":
      return {
        ...state,
        loading: false,
        projects: payload,
      };
    case "SET_PROJECT_LINK":
      return {
        ...state,
        historyLinks: payload,
      };
    default:
      return state;
  }
}
