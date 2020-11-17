import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './form/form';
import Result from './results/results';
import './style.scss';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      header: '',
    };
  }
  handleForm = (counting, resulting) => {
    this.setState({ count: counting, results: resulting });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main handler={this.handleForm} />
        <Result
          title={'Get Star Wars People'}
          header={{ 'Content-Type': 'application/json' }}
          count={this.state.count}
          results={this.state.results}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
//jjj