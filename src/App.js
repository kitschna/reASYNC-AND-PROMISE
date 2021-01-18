import React, { Component } from 'react';
import TOC from "./components/TOC.js"
import Subject from "./components/Subject.js"
import Content from "./components/Content.js"
import './App.css';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Subject title = "WEB" sub = "world wide web"></Subject>
        <Subject title = "React" sub = "For UI"></Subject>
        <TOC></TOC>   
        <Content title = "HTML" desc = "HTML is HyperText Markup"></Content>   
      </div>
    )
  }
}

export default App;

// class TOC extends Component{
//   render() {
//     return (
//       <nav>
// 			<ul>
// 				<li><a href="1.html">HTML</a></li>
// 				<li><a href="2.html">CSS</a></li>
// 				<li><a href="3.html">JavaScript</a></li>
// 			</ul>
// 		</nav>
//     )
//   }
// }

// class Content extends Component {
//   render() {
//     return (
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//       </article>
//     )
//   }
// }



// class Subject extends Component { // Subject 라는 Component를 만들겠다.
//   render() { // 반드시 render() 라는 함수가 있어야한다. (class안에서는 function은 생략)
//     return ( // return 아래의 태그는 반드시 최상의 태그에 감싸져 있어야 한다. 
//       <header>   
// 			  <h1>{this.props.title}</h1>
// 			  {this.props.sub}
// 		  </header>
//     );
//   }
// }

