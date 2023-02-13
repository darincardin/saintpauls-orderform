

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {connect} from 'react-redux'
//import {context} from '/js/reducer/context.js'  , actions, reducer
import {actions} from '/js/reducer/actions.js'
import reducer from '/js/reducer/reducer.js'


let store = createStore(reducer) 

export  {Provider, connect, store, actions};