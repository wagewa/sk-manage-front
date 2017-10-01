let initdata = {}
const LoginReducer = (state = initdata, action: any) => {
    switch (action.type) {
        case "USER":
            sessionStorage.setItem("userName", action.data.name);
            return action.data;
        default:
            return state;
    }
};

export default LoginReducer;
