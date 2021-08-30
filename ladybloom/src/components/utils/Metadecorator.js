import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, keywords, imageAlt }) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

// MetaDecorator.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default MetaDecorator;
