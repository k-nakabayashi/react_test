import { Fragment } from 'react';

import Header from '../pages/auth/components/header';
import Footer from '../pages/auth/components/footer';
import SideMenu from '../pages/auth/components/sidemenu';

/*動的に表示するMainComponent*/
import IndexPage from '../pages/auth/index';

// import { Router, Route } from "react-router-dom";

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
          <IndexPage />
          {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
            </Routes>
          </BrowserRouter> */}
          {/* <Router>
            <Route path="/" component={IndexPage} />
          </Router> */}
        </main>
      </div>
      <footer className="c-Footer">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LayoutAuth;
