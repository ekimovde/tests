import React from "react";
import classNames from "classnames";

import "./InfoBlock.scss";

const InfoBlock = ({ number, type }) => {
  return (
    <div
      className={classNames("info-block", {
        ["info-block_" + type]: type,
      })}
    >
      <h6 className="info-block__number">{number}</h6>
    </div>
  );
};

export default InfoBlock;
