import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  Input,
  Badge,
  Button,
  ListGroupItem,
  Collapse,
  Label,
  Alert
} from 'reactstrap';

const propTypes = {
  addUserAddress: PropTypes.func.isRequired,
  step2: PropTypes.bool.isRequired,
  step2Unlock: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  shippingMethod: PropTypes.number.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  onChangeFirstName: PropTypes.func.isRequired,
  onChangeLastName: PropTypes.func.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeProvince: PropTypes.func.isRequired,
  onChangePostalCode: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  onChangeAdress1: PropTypes.func.isRequired,
  onChangeAdress2: PropTypes.func.isRequired,
  onChangeShipppingMethod: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  stepsUnlock: PropTypes.func.isRequired,
  formValidator: PropTypes.func.isRequired
};

const CheckoutStepTwo = ({
  styles,
  step2,
  step2Unlock,
  toggle,
  stepsUnlock,
  onChangeFirstName,
  onChangeLastName,
  onChangeCountry,
  onChangeCity,
  onChangeProvince,
  onChangePostalCode,
  onChangePhoneNumber,
  onChangeAdress1,
  onChangeAdress2,
  onChangeShipppingMethod,
  firstName,
  lastName,
  country,
  city,
  province,
  postalCode,
  phoneNumber,
  address1,
  address2,
  shippingMethod,
  formValidator,
  formIsValid,
  addUserAddress
}) => {

  const validatorClient = {
    firstName: firstName.length > 2 && typeof firstName === 'string',
    lastName: lastName.length > 2 && typeof lastName === 'string',
    country: typeof country === 'string',
    city: city.length > 2 && typeof city === 'string',
    province: province.length > 2 && typeof province === 'string',
    postalCode: typeof postalCode === 'number',
    phoneNumber: typeof phoneNumber === 'number',
    address1: address1.length > 2 && typeof address1 === 'string'
  }

  const warningValidator = (x) => {
    if(x) {
      if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0] === false){
        return(
          <Row>
            <Alert color="danger">
            ????????????????????, ?????????????????? ?????? ???????? ??????????????????:
              {!validatorClient.firstName && <div>??????</div>}
              {!validatorClient.lastName && <div>??????????????</div>}
              {!validatorClient.country && <div>????????????</div>}
              {!validatorClient.city && <div>??????????</div>}
              {!validatorClient.province && <div>??????????????</div>}
              {!validatorClient.postalCode && <div>???????????????? ????????????</div>}
              {!validatorClient.phoneNumber && <div>??????????????</div>}
              {!validatorClient.address1 && <div>??????????</div>}
            </Alert>
          </Row>
        )
      } else {
        return(
          <Alert color="success">
            ??????????????! ?????????????? ???????????? "????????????????????"
          </Alert>
        )
      }
    }
  }

  return (
    <div style={styles.collapsePannel}>
    <ListGroupItem disabled={!step2}>
    <h3 style={styles.collapasePannelTitle} onClick={()=>step2Unlock && toggle('step2')}>
      <Badge color="secondary" pill size='sm'>2</Badge>  ??????????
    </h3>
    <Collapse isOpen={step2}>
      <Row>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="First name">??????</Label>
          <Input type='text' onChange={onChangeFirstName} value={firstName} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label for="exampleEmail">??????????????</Label>
          <Input type='text' onChange={onChangeLastName} value={lastName} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label for="exampleSelect">????????????</Label>
          <Input type="select" name="select" onChange={onChangeCountry} value={country}>
            <option value='Belarus'>????????????????</option>
            <option value='Poland'>????????????</option>
            <option value='Ukraine'>??????????????</option>
          </Input>
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>??????????</Label>
          <Input type='text' onChange={onChangeCity} value={city} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>??????????????</Label>
          <Input type='text' onChange={onChangeProvince} value={province} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>???????????????? ????????????</Label>
          <Input type='number' onChange={onChangePostalCode} value={postalCode} />
        </Col>
        <Col md={6} style={styles.formFieldsSpace}>
          <Label>??????????????</Label>
          <Input type='number' onChange={onChangePhoneNumber} value={phoneNumber} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label for="Address1">??????????</Label>
          <Input type='text' onChange={onChangeAdress1} value={address1} />
        </Col>
        <Col md={12} style={styles.formFieldsSpace}>
          <Label>?????????? 2</Label>
          <Input type='text' onChange={onChangeAdress2} value={address2} />
        </Col>
        <div className='d-flex align-items-center'>
          <Button disabled={false} onClick={()=>{
              if([...new Set(Object.entries(validatorClient).map(([k, v]) => (v)))].sort()[0]){
                 addUserAddress({
                  firstName,
                  lastName,
                  country,
                  city,
                  province,
                  postalCode,
                  phoneNumber,
                  address1,
                  address2
                })
                return stepsUnlock('step3')
              } else {
                formValidator(true)
              }

              }}>????????????????????</Button>
        </div>
      </Row>
      {warningValidator(formIsValid)}
    </Collapse>
  </ListGroupItem>
  </div>
  )
}

CheckoutStepTwo.propTypes = propTypes;

export default CheckoutStepTwo;
