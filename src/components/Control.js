import React, { Component } from 'react';

class Control extends Component { // Subject 라는 Component를 만들겠다.
  render() { // 반드시 render() 라는 함수가 있어야한다. (class안에서는 function은 생략)
    return ( // return 아래의 태그는 반드시 최상의 태그에 감싸져 있어야 한다. 
      <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>creat</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
      </ul>  
    );
  }
}

export default Control
 