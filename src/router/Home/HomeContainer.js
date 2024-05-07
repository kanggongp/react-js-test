import React from 'react';

function HomeContainer(props) {

  const click3 = () => {
    console.log('rebase test33');
  }

  const click2 = () => {
    console.log('rebase test');
  }

  const click = () => {
    // console.log('clilck test1');
    // console.log('clilck test2');
    console.log('clilck test3');
    console.log('clilck test4');

    console.log('clilck test11');
    console.log('clilck test21');
    console.log('clilck test31');
    console.log('clilck test41');

  }

  return (
    <div>
      HomeContainer
      <div>
        test
      </div>
      <button onClick={click}>click</button>
      <button onClick={click2}>click2</button>
    </div>
  );
}

export default HomeContainer;