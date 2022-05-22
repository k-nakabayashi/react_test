import { Fragment } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import SideMenu from '../components/sidemenu';
import IndexPage from '../pages/index';

const LayoutIndex = function () {
  return (
    <Fragment>
      <header className="c-Header">
        <Header />
      </header>

      <div className="m-Content">
        <aside className="m-Content__sideMenue">
          <SideMenu />
        </aside>

        <main className="m-Content__main">
          <IndexPage />
        </main>
      </div>
      <footer className="c-Footer">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default LayoutIndex;
