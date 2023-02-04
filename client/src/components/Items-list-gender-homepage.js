import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  oneKeywordForFilter
} from '../actions/DataFetchingActions';
import {
  Row,
  Col,
  Card,
  CardImg,
  Container
} from 'reactstrap';

const styles = {
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px'
  },
  cardBtn: {
    textAlign:'center'
  },
  card: {
    marginBottom: '20px'
  }
};

const categoriesMenData = [
  {
    imgSrc:'/images/presents/meat/7.jpg',
    cardTitle:'Мясные',
    linkCategory:'Букеты'
  },
  {
    imgSrc:'/images/presents/alco/4.jpg',
    cardTitle:'Алкогольные',
    linkCategory:'Shirts'
  },
  {
    imgSrc:'/images/presents/fish/3.jpg',
    cardTitle:'Рыбные',
    linkCategory:'Pants'
  },
  {
    imgSrc:'/images/presents/premium/1.jpg',
    cardTitle:'Премиум',
    linkCategory:'Jackets'
  }
];

const categoriesWomenData = [
  {
    imgSrc:'/images/presents/sweet/sweet6.jpg',
    cardTitle:'Сладкие',
    linkCategory:'Dresses'
  },
  {
    imgSrc:'/images/presents/fruity/1.jpg',
    cardTitle:'Фруктовые',
    linkCategory:'Cardigans'
  },
  {
    imgSrc:'/images/presents/flowers/2.jpg',
    cardTitle:'Цветочные',
    linkCategory:'Tops'
  },
  {
    imgSrc:'/images/presents/premium/1.jpg',
    cardTitle:'Премиум',
    linkCategory:'Trench Coats'
  }
];

const decorationData = gender => gender === 'women' ? categoriesWomenData : categoriesMenData;

const eachCategory = (gender, oneKeywordForFilter) => (
  decorationData(gender).map(x=>(
    <Col md='4' style={styles.card} key={x.cardTitle}>
      <Card>
          <div style={styles.cardBtn} onClick={()=>oneKeywordForFilter(x.cardTitle)}>
            <Link to={`/productslist/${gender}/`}>
              <CardImg src={x.imgSrc} alt="Card image cap" style={{boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.75)'}}/>
              <div style={{position: 'absolute', top: '40%', textAlign: 'center', width: '100%', color: 'white', fontSize: '200%'}}>
                <b> {x.cardTitle} </b>
              </div>
            </Link>
          </div>

      </Card>
    </Col>
  ))
);

const genderMap = {
  women: 'Женщинам',
  men: 'Мужчинам'
}
const ItemsListGenderHomepage = props => {
  const { gender } = props.match.params
  const { oneKeywordForFilter } = props
  return (
  <Container style={{paddingTop:'30px', paddingBottom:'50px'}}>
    <Col md="12">
      <h1 style={{fontSize: '40px', textAlign:'center', padding:'20px'}}>{genderMap[gender]} </h1>
      <Row>
        {eachCategory(gender, oneKeywordForFilter)}
      </Row>
    </Col>
  </Container>

)};

const mapDispatchToProps = dispatch => ({oneKeywordForFilter: x => dispatch(oneKeywordForFilter(x))});
const mapStateToProps = state => ({oneKeywordForFilter: state.oneKeywordForFilter});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListGenderHomepage);
