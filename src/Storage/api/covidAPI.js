import axios from 'axios'

export default axios.create({
    baseURL: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api',
    headers: {
        'x-rapidapi-key': 'c3f068956amsh907ea833bd87156p12d667jsn4f4ef85a6144',
        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
})