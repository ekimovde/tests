import axiosProjects from "axios/axiosProjects";

const actions = {
  fecthProjectStart: () => {
    return {
      type: "FETCH_PROJECT_START",
    };
  },
  fetchProjectError: (error) => {
    return {
      type: "FETCH_PROJECT_ERROR",
      payload: error,
    };
  },
  fecthProjectSuccess: (data) => {
    return {
      type: "FETCH_PROJECT_SUCCESS",
      payload: data,
    };
  },
  fecthProjects: () => (dispatch) => {
    dispatch(actions.fecthProjectStart());

    const token = localStorage.getItem("token");

    axiosProjects
      .getAll(token)
      .then(({ data }) => {
        dispatch(actions.fecthProjectSuccess(data.data));
      })
      .catch((error) => {
        dispatch(actions.fetchProjectError(error));
      });
  },
  getProject: (projectId, structureId) => (dispatch) => {
    dispatch(actions.fecthProjectStart());

    const token = localStorage.getItem("token");

    axiosProjects
      .getProjectStructure(projectId, structureId, token)
      .then(({ data }) => {
        dispatch(actions.fecthProjectSuccess(data.data.children));
      })
      .catch((error) => {
        dispatch(actions.fetchProjectError(error));
      });
  },
  setProjectLink: (link) => {
    return {
      type: "SET_PROJECT_LINK",
      payload: link,
    };
  },
};

export default actions;
