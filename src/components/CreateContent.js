import React, { Component } from 'react';


class CreateContent extends Component {
  render() {
    // this.props.title = 'hi' // component 안에서 자기로 전달 된 props의 값은 금지로 되어있음. 단, 컴퍼넌트 밖에서 바꾸는건 허용됨
    console.log('Content render')
    return (
      <article>
        <h2>Create</h2>
        <form>
        
        </form>
      </article>
    )
  }
}

export default CreateContent