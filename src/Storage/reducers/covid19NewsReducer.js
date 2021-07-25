const initialState = {
    coronaNews: [],
    healthNews: [],
    vaccineNews: []
}

const covid19NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COVID_NEWS':
            return {
                ...state,
                coronaNews: [...state.coronaNews, action.news]
            }
        case 'COVID_VACCINE_NEWS':
                return {
                    ...state,
                    vaccineNews: [...state.vaccineNews, action.news]
            }
        case 'HEALTH_NEWS':
                return {
                    ...state,
                    healthNews: [...state.healthNews, action.news]
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default covid19NewsReducer