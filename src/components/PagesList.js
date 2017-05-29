import glamorous from 'glamorous';
import { Link } from 'phenomic';
import PropTypes from 'prop-types';
import React from 'react';


const List = glamorous.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
});

const PagesList = ({ pages }) => (
  <div>
    {pages.length ?
      (
        <List>
          {pages.map(({ __url: url, title }) => (
            <li key={url}>
              <Link to={url}>{title}</Link>
            </li>
          ))}
        </List>
      )
      : 'No posts yet.'}
  </div>
);

const PageData = PropTypes.shape({
  __url: PropTypes.string.required,
  title: PropTypes.string.required,
});

PagesList.propTypes = {
  pages: PropTypes.arrayOf(PageData).isRequired,
};

export default PagesList;
