const initialState = {
    covidWorldData: [],
    covidAsiaData: [],
    covidAfricanData: [],
    covidEuropeData: [],
    covidSAmericaData: [],
    covidNAmericaData: [],
    covidAustraliaData: [],
    covidCountryMonthData: [],
    covidCountryStateData:[],
    covidCountryData: []
}

const covid19Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COVID_WORLD_STATS':
            return {
                ...state,
                covidWorldData: action.data
            }
        case 'COVID_WORLD_ASIA':
            return {
                ...state,
                covidAsiaData: action.data
            }
        case 'COVID_WORLD_AFRICAN':
            return {
                ...state,
                covidAfricanData: action.data
            }
        case 'COVID_WORLD_EUROPIAN':
                return {
                ...state,
                covidEuropeData: action.data
            }
        case 'COVID_WORLD_SAMERICA':
            return {
                ...state,
                covidSAmericaData: action.data
            }
        case 'COVID_WORLD_NAMERICA':
                return {
                    ...state,
                    covidNAmericaData: action.data
            }
        case 'COVID_WORLD_AUSTRALIA':
                return {
                    ...state,
                    covidAustraliaData: action.data
                }
        case 'COVID_COUNTRY_MONTH_STATS':
            return {
                ...state,
                covidCountryMonthData: action.data
            }
        case 'COVID_COUNTRY_STATE_STATS':
            return {
                ...state,
                covidCountryStateData: action.data
            }
        case 'COVID_COUNTRY_STATS':
            return {
                ...state,
                covidCountryData: action.data[0]
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default covid19Reducer