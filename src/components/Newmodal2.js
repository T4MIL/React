import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example({ str1, fn }) {
    const [show, setShow] = useState(str1);

    const handleClose = () => fn('');
    //   const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Card Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-4'>
                    <form >
                        <div>
                            <label> Card Holder Name</label>
                            <p><input className='form-control-md' type='text' required style={{ width: '100%' }}></input></p>
                        </div>
                        <div>
                            <label>Enter Your Card Number</label>
                            <p><input className='form-control-md' type='number' required style={{ width: '100%' }}></input></p>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <label>Expiration</label>
                                <div className='d-flex gap-3'>
                                    <input type='number' required placeholder='MM' style={{ width: '22%' }}></input>
                                    <input type='number' required placeholder='YY' style={{ width: '27%' }}></input>
                                </div>
                            </div>
                            <div>
                                <label>Cvv</label>
                                <div>
                                    <input type='nmber' required></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;