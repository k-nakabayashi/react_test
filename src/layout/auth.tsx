import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../pages/auth/components/header';
import Footer from '../pages/auth/components/footer';
import SideMenu from '../pages/auth/components/sidemenu';

/*動的に表示するMainComponent*/
import IndexPage from '../pages/auth/index';
import ProfilePage from '../pages/auth/profile/index';
import TaskPage from '../pages/auth/tasks/index';
import NewsPage from '../pages/auth/news/index';

/**/
const LayoutAuth = function () {
  return (
    <Fragment>
      <header className="c-Header">
        {/* todo: 表示中のページの印をつける。(状態管理が必要になる) */}
        <Header />
      </header>

      <div className="m-Content">
        <aside className="m-Content__sideMenue">
          <SideMenu />
        </aside>

        <main className="m-Content__main">
          {/* todo: ここを動的に切り替える */}
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="news" element={<NewsPage />} />
          </Routes>
        </main>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="c-Footer">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LayoutAuth;
