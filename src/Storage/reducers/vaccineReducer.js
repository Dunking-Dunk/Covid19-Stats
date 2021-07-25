const initialState = {
    allVaccine: [],
    phase1Vaccine: [],
    phase2Vaccine: [],
    phase3Vaccine: [],
    phase4Vaccine: [],
    approvedVaccine: [],
    vaccine: []
}

const VaccineReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ALL_VACCINE':
            return {
                ...state,
                allVaccine: action.data
            }
        case 'PHASE1_VACCINE':
            return {
                ...state,
                phase1Vaccine: action.data
            }
        case 'PHASE2_VACCINE':
                return {
                    ...state,
                    phase2Vaccine: action.data
            }
        case 'PHASE3_VACCINE':
                return {
                    ...state,
                    phase3Vaccine: action.data
            }
        case 'PHASE4_VACCINE':
                return {
                    ...state,
                    phase4Vaccine: action.data
            }
        case 'APPROVED_VACCINE':
            return {
                 ...state,
                approvedVaccine: action.data
            }
        case 'SINGLE_VACCINE':
            return {
                ...state,
                vaccine: action.data
            }
        default:
            return state
    }
}

export default VaccineReducer