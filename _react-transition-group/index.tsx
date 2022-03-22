// https://reactcommunity.org/react-transition-group/

import { useState } from 'react';
import { Transition } from 'react-transition-group';

function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {(state) => (
          <div
            className={`fade fade-${state}`}
            style={{
              width: 200,
              height: 100,
              backgroundColor: 'red',
            }}
          ></div>
        )}
      </Transition>
      <button onClick={() => setInProp(true)}>Click to Enter</button>
    </div>
  );
}

export default App;
