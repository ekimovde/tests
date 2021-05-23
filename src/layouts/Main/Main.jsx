import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import "./Main.scss";

import { Navbar } from "components/UI";
import { List } from "components/commons";

import { projectActions } from "redux/actions";

const Main = ({
  historyLinks,
  fecthProjects,
  setProjectLink,
  getProject,
  history,
}) => {
  const onClickLink = (link) => {
    let arrHistoryLinks = historyLinks.slice(0);

    if (link.title === "#") {
      arrHistoryLinks = historyLinks.filter((item) => item.title === "#");

      fecthProjects();
      setProjectLink(arrHistoryLinks);
      history.push("/");
    } else {
      let currentIndex = historyLinks.findIndex(
        (item) => item.title === link.title
      );

      arrHistoryLinks.splice(currentIndex + 1);
      setProjectLink(arrHistoryLinks);
      getProject(link.projectId, link.structureId);
      history.push(
        `/project/${link.project_id}/project-structure​/${link.structureId}`
      );
    }
  };

  return (
    <div className="main">
      <Navbar />

      <div className="main__wrapper container">
        <div className="main__top">
          <h3 className="main__title">Мои проекты</h3>
        </div>

        <ul className="main__navigation">
          {historyLinks.map((link, index) => {
            return (
              <li
                className="main__link"
                key={link.title + index}
                onClick={() => onClickLink(link)}
              >
                <h6
                  className={classNames("main__text", {
                    main__text_active: index + 1 !== historyLinks.length,
                  })}
                >
                  {link.title}
                </h6>
              </li>
            );
          })}
        </ul>

        <div className="main__offer">
          <List />
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ project }) => ({
    historyLinks: project.historyLinks,
  }),
  projectActions
)(Main);
