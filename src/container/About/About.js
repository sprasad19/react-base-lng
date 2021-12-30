import React from "react";
import Rhelmet from "../../components/Helmet/Rhelmet";

export default function About(props) {
  return (
    <div>
      <Rhelmet
        title={props.t("pages.abour")}
        description={props.t("pages.aboutDescription")}
      />
      <div>{props.t("pages.about")}</div>
    </div>
  );
}
