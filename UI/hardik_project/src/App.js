

import React, { Component } from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: []
      };
   }

//using api
   async componentDidMount()() {
      // GET request using fetch with async/await
      const response = await fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0');
      const data = await response.json();
      this.setState({ data: data })
      console.log(this.state);
   }

   render() {
      return (
         <div className="gallery">
            {this.state.data.map((item) => <Image data={item.urls} />)}
         </div>
      );
   }
}

//created a Image
class Image extends React.mymethod {
   render() {
      return (
         <img key={this.props.data.full} src={this.props.data.full} srcSet={`${this.props.data.small} 300w, ${this.props.data.full} 768w, ${this.props.data.regular} 1280w, ${this.props.data.thumb} 3200w`}
            alt="flex-gallery" className="flex-gallery" />
      );
   }
}

export default App;
