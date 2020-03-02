import React,{ useState } from 'react';
import Modal from './Modal';
import useModal from './useModal';
import './App.css';

function App() {
  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      Click to open modal
      <div>
        <button onClick={toggle}>Open modal</button>
      </div>
      {isShowing && <Modal isShowing={isShowing} hide={toggle}>
      Modal Content
      </Modal>}
    </div>
  );
}

export default App;
