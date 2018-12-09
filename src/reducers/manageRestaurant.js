
import cuid from 'cuid';
export const cuidFn = cuid;

const defaultState = {
    restaurants: [],
    reviews: []
}

export default function manageRestaurants(state=defaultState, action) {
    // console.log(action.restaurant)
    switch(action.type){

        case "ADD_RESTAURANT":
            const newRestaurant = {
                id: cuid(),
                text: action.restaurant.text
            }

            return {
                ...state,
                restaurants: [...state.restaurants, newRestaurant]
            }

        case "DELETE_RESTAURANT":
            return {
                ...state,
                restaurants: state.restaurants.filter(restaurant => {
                    return restaurant.id !== action.restaurant.id
                })
            }
        
        case "ADD_REVIEW":
            const newReview = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text,
            }

            return {
                ...state,
                reviews: [...state.reviews, newReview]
            }

        case "DELETE_REVIEW":
            return {
                ...state,
                reviews: state.reviews.filter(review => {
                    return review.id !== action.review.id
                })
            }

        default:
            return state
    }
}
