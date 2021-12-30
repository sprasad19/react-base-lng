import React from "react";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';

export default function Rhelmet(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      {props.children && <>{props.children}</>}
    </Helmet>
  );
}

Rhelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
