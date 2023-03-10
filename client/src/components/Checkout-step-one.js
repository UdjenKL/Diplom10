import PropTypes from 'prop-types';
import React from 'react'
import {
  Row,
  Col,
  Input,
  Badge,
  Button,
  ListGroupItem,
  Collapse,
  Label
} from 'reactstrap';

const propTypes = {
  email: PropTypes.string.isRequired,
  step1: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  handleEmailValidation: PropTypes.func.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
};

const CheckoutStepOne = ({
  styles,
  email,
  step1,
  toggle,
  stepsUnlock,
  emailIsValid,
  handleEmailValidation,
  onChangeEmail
}) => {
  const emailValidation = (/^(([^<>()\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i).test(String(email).toLowerCase())
  return (
    <ListGroupItem disabled={!step1} style={styles.collapsePannel}>
      <h3 style={styles.collapasePannelTitle} onClick={()=>toggle('step1')} >
        <Badge color="secondary" pill size='sm'>1</Badge>  E-mail
      </h3>
      <Collapse isOpen={step1}>
      <p>Введите свою электронную почту</p>
      <Label for="exampleEmail">Почта</Label>
      <Row>
        <Col md="6">
          <Input
            invalid={!emailIsValid}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@gmail.com"
            value={email}
            onChange={onChangeEmail}
          />

        </Col>
        <Col md="6">
          <Button disabled={false} onClick={()=>{
            if (emailValidation) {
              stepsUnlock('step2');
              handleEmailValidation(true)
            } else {
              handleEmailValidation(false)
            }
            }}>Продолжить</Button>
        </Col>
        <Col xs="12">
        <div style={{margin: '20px'}}>
        </div>
        </Col>
      </Row>
      </Collapse>
    </ListGroupItem>
  )
}

CheckoutStepOne.propTypes = propTypes;

export default CheckoutStepOne
