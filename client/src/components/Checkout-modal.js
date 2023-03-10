import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row
} from 'reactstrap'

const propTypes = {
  infoItem: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  selectedSize: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  totalItemsSelectorStats: PropTypes.number.isRequired
};

const CheckoutModal = ({
  infoItem,
  openModal,
  toggleModal,
  selectedSize,
  selectedColor,
  totalItemsSelectorStats
}) => (
  <Modal isOpen={openModal} toggle={toggleModal} >
    <ModalHeader toggle={toggleModal}>У вас {totalItemsSelectorStats} товар{totalItemsSelectorStats>1 && 'ов'} в корзине</ModalHeader>
    <ModalBody>
      {totalItemsSelectorStats>1 && 'Товар:'}
      <Row>
        <Col xs="6"><img src={infoItem.images[0]} style={{width: '100%'}} alt="" /> </Col>
        <Col xs="6">
          <b>{infoItem.title}</b>
          <div>{infoItem.price} Р</div>
          <div>color: {selectedColor}</div>
          <div>size: {selectedSize}</div>
        </Col>
      </Row>
    </ModalBody>
    <ModalFooter>
      <Link to="/cart" className="text-white"> <Button outline color='secondary' onClick={toggleModal}>Редактировать корзину</Button></Link>{' '}
      <Link to="/checkout" className="text-white"> <Button color='secondary' onClick={toggleModal}>Заказать</Button></Link>
    </ModalFooter>
  </Modal>
);

CheckoutModal.propTypes = propTypes;

export default CheckoutModal;
