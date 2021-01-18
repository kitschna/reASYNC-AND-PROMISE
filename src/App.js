import React, { Component } from 'react';
import TOC from "./components/TOC.js"
import Subject from "./components/Subject.js"
import Content from "./components/Content.js"
import './App.css';

class App extends Component { 
  constructor(props){// props를 쓰기 위해서는 왼쪽의 코드들이 필요한데, 이해하려고 하기보단 일단 그려려니 해보자.
    super(props); // state의 값을 초기화 하려고 한다.
                  // 어떠한 component가 실행 될 때, render()보다 먼저 실행되고 
                  // 그 component를 초기화 시켜주고 싶은 코드는 constructor 안에 코드를 작성한다!!!!   
    this.state = { // state 값을 초기화!
      Subject : { title : "WEB", sub : "World Wide Web!" }
    } 
  } 
  render() {
    return (
      <div className="App">
        <Subject 
        // 상위 component의 state값을 하위 component의 props의 값으로 전달하는 것은 언제든지 가능!
          title = {this.state.Subject.title} 
          sub = {this.state.Subject.title}>
        </Subject>
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

