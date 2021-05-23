import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ListItem } from "components/commons";
import { projectActions } from "redux/actions";

import "./List.scss";

const List = ({ projects, loading, fecthProjects }) => {
  useEffect(() => {
    if (!projects.length) {
      fecthProjects();
    }
  }, [projects]);

  return (
    <div className="list">
      {loading ? (
        <div className="list__loader">
          <i className="bx bx-loader-circle bx-spin bx-flip-horizontal list__icon"></i>
        </div>
      ) : (
        <ul className="list__menu">
          {projects.map((item, index) => {
            return (
              <li className="list__item" key={item.id}>
                <ListItem index={index} item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default connect(
  ({ project }) => ({
    projects: project.projects,
    loading: project.loading,
  }),
  projectActions
)(List);
