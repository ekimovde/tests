import axiosAuth from "axios/axiosAuth";

const actions = {
  fetchAuthStart: () => {
    return {
      type: "FETCH_AUTH_START",
    };
  },
  fetchAuthError: (error) => {
    return {
      type: "FETCH_AUTH_ERROR",
      payload: error,
    };
  },
  fetchAuthSuccess: (token) => {
    return {
      type: "FETCH_AUTH_SUCCESS",
      payload: token,
    };
  },
  fetchAuthLogin: (userData) => (dispatch) => {
    dispatch(actions.fetchAuthStart());

    axiosAuth
      .login(userData)
      .then(({ data }) => {
        localStorage.setItem("token", data.data.accessToken);
        dispatch(actions.fetchAuthSuccess(data.data.accessToken));
      })
      .catch((error) => {
        dispatch(actions.fetchAuthError(error));
      });
  },
};

export default actions;
