import {createStore} from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(initialState: any) {
    const store = createStore(rootReducer, initialState
        // 触发 redux-devtools
    )
    return store
}