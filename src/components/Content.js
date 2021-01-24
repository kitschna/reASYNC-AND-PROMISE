import React, { Component } from 'react';


class Content extends Component {
  render() {
    // this.props.title = 'hi' // component 안에서 자기로 전달 된 props의 값은 금지로 되어있음. 단, 컴퍼넌트 밖에서 바꾸는건 허용됨
    console.log('Content render')
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

export default Content