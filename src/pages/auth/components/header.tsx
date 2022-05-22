import { Link } from 'react-router-dom';

const MyHeader = function () {
  return (
    <nav className="c-Header__Nav">
      <ul>
        <li className="a-Link">
          <Link to="/auth">Top</Link>
        </li>
        <li className="a-Link">
          <Link to="/auth/profile">profile</Link>
        </li>
        <li className="a-Link">
          <Link to="/auth/task">task</Link>
        </li>
        <li className="a-Link">
          <Link to="/auth/news">news</Link>
        </li>
        <li className="a-Link">
          <a href="/">ログアウト</a>
        </li>
      </ul>
    </nav>
  );
};

export default MyHeader;
