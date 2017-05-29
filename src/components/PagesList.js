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
    { pages.length ?
      (
        <List>
          {
          pages.map(({ __url, title }) => (
            <li key={ __url }>
              <Link to={ __url }>{title}</Link>
            </li>
          ))
        }
        </List>
      )
      : "No posts yet." }
  </div>
)

const PageData = PropTypes.shape({
  title: PropTypes.string.required,
});

PagesList.propTypes = {
  pages: PropTypes.arrayOf(PageData).isRequired,
}

export default PagesList
