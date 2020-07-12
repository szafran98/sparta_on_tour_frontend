const DATA_KEY = 'user-data'

const TokenService = {
    getUserData() {
        return JSON.parse(localStorage.getItem(DATA_KEY))
    },
    setUserData(data) {
        localStorage.setItem('user-data', JSON.stringify({
            token: data.token,
            staff: data.staff
        }))
    }
}

export  {TokenService}