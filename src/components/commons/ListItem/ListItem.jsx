import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { InfoBlock } from "components/UI";

import { projectActions } from "redux/actions";

import "./ListItem.scss";

const ListItem = ({
  item,
  index,
  historyLinks,
  getProject,
  setProjectLink,
}) => {
  const onClick = (item) => {
    let projectId;
    let structureId;
    let arrLinks = historyLinks;

    if (historyLinks.length < 2) {
      projectId = item.id;
      structureId = item.root_structure_id;
    } else {
      projectId = item.project_id;
      structureId = item.id;
    }

    arrLinks.push({
      title: item.title,
      projectId,
      structureId,
    });

    setProjectLink(arrLinks);
    getProject(projectId, structureId);
  };

  return (
    <div className="list-item">
      <div className="list-item__text">
        <h5 className="list-item__title">
          {index}. {item.title}
        </h5>
      </div>

      <div className="list-item__info">
        <div className="list-item__block">
          <InfoBlock number={item.notes_cnt_danger} type={"danger"} />
        </div>

        <div className="list-item__block">
          <InfoBlock number={item.notes_cnt_warning} type={"warning"} />
        </div>

        <div className="list-item__block">
          <InfoBlock number={item.notes_cnt_success} type={"success"} />
        </div>

        {historyLinks.length < 3 ? (
          <div className="list-item__btn">
            {historyLinks.length < 2 ? (
              <Link
                to={`/project/${item.id}/project-structure​/${item.root_structure_id}`}
                onClick={() => onClick(item)}
              >
                <i className="bx bx-link-external list-item__icon" />
              </Link>
            ) : (
              <Link
                to={`/project/${item.project_id}/project-structure​/${item.id}`}
                onClick={() => onClick(item)}
              >
                <i className="bx bx-link-external list-item__icon" />
              </Link>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default connect(
  ({ project }) => ({ historyLinks: project.historyLinks }),
  projectActions
)(ListItem);
