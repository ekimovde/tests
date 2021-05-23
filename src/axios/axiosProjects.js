import axios from "axios";

const axiosLists = {
  getAll: (token) =>
    axios.get("https://cdsapi.netimob.com/api/project", {
      headers: {
        "Access-Token": token,
      },
    }),
  getProjectStructure: (projectId, structureId, token) =>
    axios.get(
      `https://cdsapi.netimob.com/api/project/${projectId}/project-structure/${structureId}`,
      {
        headers: {
          "Access-Token": token,
        },
      }
    ),
};

export default axiosLists;
