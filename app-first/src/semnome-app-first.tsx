import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import index from ".";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: index,
  errorBoundary(err, info, props) {
    return <div>errors</div>;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
