import { CATEGORIES_PRODUCTS } from '../constants.js'

const defaultState =
{
	men: ['Сладкие', 'Мясные', 'Праздничные', 'Премиум'],
	women: ['Сладкие', 'Мясные', 'Праздничные', 'Премиум']
}

export const categoriesProducts = (state = defaultState, action) => {
  switch (action.type) {
		case CATEGORIES_PRODUCTS:
				return state;

		default:
				return state;
  }
}
