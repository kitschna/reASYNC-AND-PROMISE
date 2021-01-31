import React, { Component } from 'react';


class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this); // .bind(this)를 깔끔하게 처리하는 방법
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value}) //최신문법 [e.target.name]

  }
  render() {
    // this.props.title = 'hi' // component 안에서 자기로 전달 된 props의 값은 금지로 되어있음. 단, 컴퍼넌트 밖에서 바꾸는건 허용됨
    console.log('UpdateContent render')
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){ // 이렇게 이벤트를 주면 아래 서브빗 버튼을 누르면 이벤트가 실행. form태그의 고유기능.
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title} //props의 data는 read only 임, 그래서 {this.props.data.title}로 value값을 넣으면 수정이 안됨.
              onChange={this.inputFormHandler}
            ></input>
            </p>
          <p>
            <textarea
              onChange={this.inputFormHandler}
              name="desc" 
              placeholder="description" 
              value={this.state.desc}>
            </textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
         </form>
      </article>
    )
  }
}

export default UpdateContent

/* 아래 함수가 중복이 되면 코드가 깔끔하지 않으니까,
 onChange={function(e){
                 console.log(e.target.value);
                 this.setState({title:e.target.value})
               }.bind(this)}

밖에 함수를 빼고, 

 onChange={this.inputFormHandler.bind(this)}

로 깔끔하게 처리

*/