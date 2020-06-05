import regionalCases from "../../data/regional-cases";

export default function reducer(state, action) {
    switch (action.type) {
        case "SET_ALERT_LEVEL": {
            return {
                ...state,
                alertLevel: action.payload
            }
        }
        case "SET_CURRENT_REGION": {
            return {
                ...state,
                currentRegion: regionalCases[action.payload]
            }
        }
        case "SET_CURRENT_SEARCH_QUERY": {
            return {
                ...state,
                currentSearchQuery: action.payload
            }
        }
        default:
            throw new Error('Action type does not exist!')
    }
}