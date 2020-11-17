import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      // init state
      this.state = {
        method: 'get',
        url: 'URL'
      };
      // we cant directly change the state
      // if you dont create arrow functions you would have to bind
      // this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange = (e) => {
      // console.log('hi', this.state);
      this.setState({ url: e.target.url.value , body:e.target.body.value });
      /// DONT UPDATE THE STATE DIRECTLY
      // this.state.url = e.target.value;
      // console.log('helloooooo', this.state);
    };
    handleMethodChange = (e) => {
      // console.log('hi', this.state);
      this.setState({ method: e.target.value });
      /// DONT UPDATE THE STATE DIRECTLY
      // this.state.words = e.target.value;
      // console.log('helloooooo', this.state);
    };
    handleClick = (e) => {
      e.preventDefault();
      const url = this.state.url;
      const method = this.state.method;
  
      this.setState({ url , method }); /// {url:"reverse"}
      fetch(`${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          this.props.handler(data.count, data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      console.log('hello');
    };
    render() {
      return (
        <main>
          <form data-testid="ancestor">
            <label>URL <input data-testid="descendantText" name='url' id='urlInput' type="text" onChange={this.handleChange} />
            <label><input  id='bodyInput' name='body' type="text" onChange={this.handleChange} /></label>
            <button data-testid="descendantSubmit" onClick={this.handleClick}>GO!</button></label><br></br><br></br>
            <label class='labels' for="container1">GET<input defaultChecked
              aria-checked="true" data-testid="testId" value='GET' type="radio" id="container" name="radio" onChange={this.handleMethodChange}></input></label>
              <label class='labels' for="container2">POST<input value='POST' type="radio" id="container2" name="radio" onChange={this.handleMethodChange}></input></label>
              <label class='labels' for="container3">PUT<input value='PUT' type="radio" id="container3" name="radio" onChange={this.handleMethodChange}></input></label>
              <label class='labels' for="container4">DELETE<input value='DELETE' type="radio" id="container4" name="radio" onChange={this.handleMethodChange}></input></label>
         </form>
         <div>
         <span>{this.state.method}</span>
         <span>{this.state.url}</span>
         </div>
        </main>
      );
    }
  }
  export default Main;