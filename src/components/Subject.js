import React, { Component } from 'react';

class Subject extends Component { // Subject 라는 Component를 만들겠다.
  render() { // 반드시 render() 라는 함수가 있어야한다. (class안에서는 function은 생략)
    return ( // return 아래의 태그는 반드시 최상의 태그에 감싸져 있어야 한다. 
      <header>   
			  <h1><a href="/">{this.props.title}</a></h1>
			  {this.props.sub}
		  </header>
    );
  }
}

export default Subject
 