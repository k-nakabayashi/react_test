import { Link } from 'react-router-dom';

const MyHeader = function () {
  return (
    <nav className="c-Header__Nav">
      <ul>
        <li className="a-Link">
          <a href="/">Top</a>
        </li>
        <li className="a-Link">
          <Link to="/">profile</Link>
        </li>
        <li className="a-Link">
          <Link to="/">task</Link>
        </li>
        <li className="a-Link">
          <Link to="/">news</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyHeader;
