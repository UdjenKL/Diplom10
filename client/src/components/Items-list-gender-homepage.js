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
    imgSrc:'/images/presents/1.jpg',
    cardTitle:'Сладкие',
    linkCategory:'Букеты'
  },
  {
    imgSrc:'/images/presents/2.jpg',
    cardTitle:'Мясные',
    linkCategory:'Shirts'
  },
  {
    imgSrc:'/images/presents/3.jpg',
    cardTitle:'Праздничные',
    linkCategory:'Pants'
  },
  {
    imgSrc:'/images/presents/4.jpg',
    cardTitle:'Премиум',
    linkCategory:'Jackets'
  }
];

const categoriesWomenData = [
  {
    imgSrc:'/images/presents/5.jpg',
    cardTitle:'Сладкие',
    linkCategory:'Dresses'
  },
  {
    imgSrc:'/images/presents/6.jpg',
    cardTitle:'С цветами',
    linkCategory:'Cardigans'
  },
  {
    imgSrc:'/images/presents/7.jpg',
    cardTitle:'Мясные',
    linkCategory:'Tops'
  },
  {
    imgSrc:'/images/presents/8.jpg',
    cardTitle:'К Дню Рождения',
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
  men: 'Мужщинам'
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
