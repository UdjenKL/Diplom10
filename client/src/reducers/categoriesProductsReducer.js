import { CATEGORIES_PRODUCTS } from '../constants.js'

const defaultState =
{
	men: ['Мясные', 'Алкогольные', 'Рыбные','Премиум'],
	women: ['Сладкие', 'Фруктовые', 'Цветочные', 'Премиум']
}

export const categoriesProducts = (state = defaultState, action) => {
  switch (action.type) {
		case CATEGORIES_PRODUCTS:
				return state;

		default:
				return state;
  }
}
