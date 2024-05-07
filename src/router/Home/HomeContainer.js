import React from 'react';

function HomeContainer(props) {

  const click = () => {
    console.log('clilck test1');
    console.log('clilck test2');
    console.log('clilck test3');
    console.log('clilck test4');

  }

  return (
    <div>
      HomeContainer
      <div>
        test
      </div>
      <button onClick={click}>click</button>
    </div>
  );
}

export default HomeContainer;