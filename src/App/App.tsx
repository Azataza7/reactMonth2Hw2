import Modal from '../Components/Modal/Modal';
import {useState} from 'react';
import Button from '../Components/Button/Button';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = (onn) => onn ? setShowModal(true) : setShowModal(false)

  return (
    <div>
      <Button onClick={() => onClose(true)}/>
      <Modal
        show={showModal}
        title="Modal window"
      >
        <div className="modal-body">
          Lorem ipsum dolor and something bla bla
        </div>
        <button
          className="btn btn-danger close-btn"
          onClick={() => onClose(false)}/>
      </Modal>
    </div>
  );
};

export default App;
