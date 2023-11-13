import Modal from '../Components/Modal/Modal';
import {useState} from 'react';
import Button from '../Components/Button/Button';
import Alert from '../Components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true)

  const onClose = (on) => on ? setShowModal(true) : setShowModal(false);
  const closeAlert = () => setShowAlert(false);

  return (
    <>
      <div className="modal-container mb-2">
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
      <div className="alert-container">
        <Alert type="warning" onDismiss={closeAlert}>
          This is a warning type alert
        </Alert>
        <Alert type="success">This is a success type alert</Alert>
      </div>
    </>
  );
};

export default App;
