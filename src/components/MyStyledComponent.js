import React from 'react';

function MyStyledComponent(props) {
  const MyStyledComponentStyles = {
    backgroundColor: 'ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
  }
  return (
    <div>
      <h1>Hey, I'm a component</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
    </div>
  );
}

export default MyStyledComponent;