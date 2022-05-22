import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = function () {
  return (
    <Fragment>
      <h1>お探しのページは見つかりません。</h1>
      <Link to="/">Top Page</Link>
    </Fragment>
  );
};

export default NotFound;
