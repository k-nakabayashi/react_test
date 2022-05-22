import { Fragment } from 'react';

import Header from '../pages/index/components/header';
import Footer from '../pages/index/components/footer';
import IndexPage from '../pages/index/index';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

const LayoutIndex = function () {
  return (
    <Fragment>
      <header className="c-Header">
        <Header />
      </header>

      <div className="m-Content">
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
