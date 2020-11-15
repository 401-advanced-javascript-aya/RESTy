import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './form/form';
import './style.scss';





//functional component | stateless component
function App() {
  return (
    <>
                <Header />
                <Main />
                <Footer />
              </>
  );
}

export default App;