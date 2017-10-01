function login(data: any) {
    return {
        type: "USER",
        data
    }
}

function login1(data: any) {
    return {
        type: "LOGINSUBMIT",
        data
    }
}

function updateCityName(data: any) {
    return {
        type: "UPDATE_USER",
        data
    }
}

export default {login, login1, updateCityName}