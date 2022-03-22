// https://reactcommunity.org/react-transition-group/

import { useState } from 'react';
import { Transition } from 'react-transition-group';
import Fake from './components/Fake';

function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {(state) => <Fake className={`fade fade-${state}`} />}
      </Transition>

      <button onClick={() => setInProp(true)}>Click to Enter</button>
    </div>
  );
}

export default App;
