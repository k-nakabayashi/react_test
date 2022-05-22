import '../style/index.scss';

import React from 'react';

const IndexPage = function () {
  return (
    <React.Fragment>
      <header></header>
      <main className="test">
        <section>
          <h1>h1 aaaaa</h1>
          <p className="text-white bg-black w-20">Hello world!</p>
        </section>
        <article>
          <section>
            <h2>h2 title</h2>
            <p>
              aadada
              <br />
              aadada
              <br />
              aadada
              <br />
              aadada
              <br />
              aadada
            </p>
          </section>
        </article>
      </main>
      <footer>footer aa</footer>
    </React.Fragment>
  );
};

export default IndexPage;
