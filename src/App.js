import React, { Component } from 'react';
import TOC from "./components/TOC.js"
import Subject from "./components/Subject.js"
import ReadContent from "./components/ReadContent.js"
import CreateContent from "./components/CreateContent.js"
import Control from "./components/Control.js"

import './App.css'; 

class App extends Component { 
  constructor(props){// props를 쓰기 위해서는 왼쪽의 코드들이 필요한데, 이해하려고 하기보단 일단 그려려니 해보자.
    super(props); // state의 값을 초기화 하려고 한다.
                  // 어떠한 component가 실행 될 때, render()보다 먼저 실행되고 
                  // 그 component를 초기화 시켜주고 싶은 코드는 constructor 안에 코드를 작성한다!!!!   
    this.state = { // state 값을 초기화!
      mode: 'create',
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" }, // 여러개의 값을 다룰때는 사용법이 달라진다.
      welcome: {title: 'welcome', desc: 'Hello, React!!'},

      contents : [ // 자료가 여러개라서 배열로 만듭니다.
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    } 
  } // React에서는 'props'나 'state'의 값이 바뀌면 해당되는 component의 render함수가 호출되도록 약속되어 있디.
    // 다시 말하면, 'props'나 'state'의 값이 바뀌면 화면이 다시 그려진다 라는 말!!
  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
        var i = 0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title
            _desc = data.desc        
            break;    
          }
          i = i + 1
        }
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      // _title = this.state.contents[0].title
      // _desc = this.state.contents[0].desc
    } else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    }
    console.log('render', this)
    return (
      <div className="App">
        <Subject 
        // 상위 component의 state값을 하위 component의 props의 값으로 전달하는 것은 언제든지 가능!
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            alert('hi!hi!hi!')
            this.setState({mode:'welcome'})
          }.bind(this)}
          >
        </Subject>
      {/* <header> 
			  <h1><a href="/" onClick={function(e){
          // console.log('event in', this) // 기본적으로 this는 render함수가 속해있는 coponent 자체를 가르킴.
          // return;
          console.log(e);
          e.preventDefault(); //a태그의 기본적인 동작을 방지
          // this.state.mode = 'welcome' // <- 여기서 this는 undefinede임 그래서 bind가 필요!!!
          // 위처럼 값을 바꾸면 react 몰래 값을 바꾼것이 됨.
          // 스프린트에서 함수뒤에 bind쓴것 이제야 이해함. 하지만 이렇게 코드를 짜면 안됨. 공식문서 참조할 것
          this.setState({ // <- this.setState을 쓰는이유가 바로 이거임!! react가 하라는데로 해야함! 공식문서!!
            // bind(), setState() 가 꼭 필요하다!!
            // 동적으로 바꿔줄때는 꼭 setState를 써야함
            mode:'welcome'
          })
        }.bind(this)}>{this.state.subject.title}</a></h1>
			  {this.state.subject.sub}
		  </header> */}
        <TOC 
          onChangePage={function(id){
              this.setState({
              mode:'read',
              selected_content_id: Number(id)
            })
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
         <Control onChangeMode={function(_mode){
           this.setState({
            mode:_mode
          });
         }.bind(this)}></Control>
        {_article}   
      </div>
    )
  }
}
// 이벤트가 실행 됐을때, 실행되어야 하는 함수를 

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

