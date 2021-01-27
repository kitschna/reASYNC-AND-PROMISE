import React, { Component } from 'react';


class CreateContent extends Component {
  render() {
    // this.props.title = 'hi' // component 안에서 자기로 전달 된 props의 값은 금지로 되어있음. 단, 컴퍼넌트 밖에서 바꾸는건 허용됨
    console.log('Content render')
    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){ // 이렇게 이벤트를 주면 아래 서브빗 버튼을 누르면 이벤트가 실행. form태그의 고유기능.
            e.preventDefault();
              this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            alert('submitt!!!!'); 
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p>
            <textarea name="desc" placeholder="description">
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

export default CreateContent