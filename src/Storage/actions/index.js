import covid from '../api/covidAPI'

export const getWorldData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/world')
    dispatch({ type: 'COVID_WORLD_STATS', data })
}

export const getWorldAsiaData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/asia')
    dispatch({ type: 'COVID_WORLD_ASIA', data })
}

export const getWorldAfricanData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/africa')
    dispatch({ type: 'COVID_WORLD_AFRICAN', data })
}

export const getWorldEuropianData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/europe')
    dispatch({ type: 'COVID_WORLD_EUROPIAN', data })
}

export const getWorldNorthAmericaData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/northamerica')
    dispatch({ type: 'COVID_WORLD_NAMERICA', data })
}

export const getWorldSouthAmericaData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/southamerica')
    dispatch({ type: 'COVID_WORLD_SAMERICA', data })
}

export const getWorldAustraliaData = () => async (dispatch) => {
    const { data } = await covid.get('/npm-covid-data/australia')
    dispatch({ type: 'COVID_WORLD_AUSTRALIA', data })
}

export const getCountry6MonthData = (iso) => async (dispatch) => {
    const { data } = await covid.get(`/covid-ovid-data/sixmonth/${iso}`)
    dispatch({type: 'COVID_COUNTRY_MONTH_STATS', data})
}

export const getCountryStatesData = (iso) => async (dispatch) => {
    const { data } = await covid.get(`/api-covid-data/reports/${iso}`)
    dispatch({type: 'COVID_COUNTRY_STATE_STATS', data})
}

export const getCountryData = (iso, countryName) => async (dispatch) => {
    const { data } = await covid.get(`/npm-covid-data/country-report-iso-based/${countryName}/${iso}`)
    dispatch({type: 'COVID_COUNTRY_STATS', data})
}

export const getCoronaVirusNews = () => async (dispatch) => {
    for (let i=0; i < 8; i++) {
        const { data } = await covid.get(`/news/get-coronavirus-news/${i}`)
        dispatch({type: 'COVID_NEWS', news: {page: i+1, data: data.news}})
    }
}

export const getVaccineNews = () => async (dispatch) => {
    for (let i = 0; i < 8; i++) {
        const { data } = await covid.get(`/news/get-vaccine-news/${i}`)
        dispatch({type: 'COVID_VACCINE_NEWS', news: {page: i+1, data: data.news}})
    }
}

export const getHealthNews = () => async (dispatch) => {
    for (let i = 0; i < 8; i++) {
        const { data } = await covid.get(`/news/get-health-news/${i}`)
        dispatch({type: 'HEALTH_NEWS', news: {page: i+1, data: data.news}})
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const getAllVaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-vaccines')
    dispatch({type: 'ALL_VACCINE', data})
}

export const getPhase1Vaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-vaccines-phase-i')
    dispatch({type: 'PHASE1_VACCINE', data})
}
export const getPhase2Vaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-vaccines-phase-ii')
    dispatch({type: 'PHASE2_VACCINE', data})
}
export const getPhase3Vaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-vaccines-phase-iii')
    dispatch({type: 'PHASE3_VACCINE', data})
}
export const getPhase4Vaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-vaccines-phase-iv')
    dispatch({type: 'PHASE4_VACCINE', data})
}

export const getApprovedVaccine = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-fda-approved-vaccines')
    dispatch({type: 'APPROVED_VACCINE', data})
}

export const getVaccineData = (category, name) => async (dispatch) => {
    const { data } = await covid.get(`/vaccines/get-vaccines/${category}/${name}`)
    dispatch({type: 'SINGLE_VACCINE', data})
}

export const getAllTreatment = () => async (dispatch) => {
    const { data } = await covid.get('/vaccines/get-all-treatment')
}