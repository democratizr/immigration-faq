import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'phenomic';


const PagePreview = ({ __url, title, description }) => {
  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
      <div>{ description }</div>
    </div>
  );
};

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default PagePreview;
