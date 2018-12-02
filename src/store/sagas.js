import {takeEvery, put, call} from 'redux-saga/effects'

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, 
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },    
        );
      });
}

function* asyncSetLocation(action){
    const response = yield call (getPosition);
    const {latitude, longitude} = response.coords; 


    yield put({type:'SET_LOCATION', 
            payload:
                {address: action.payload,
                 latitude: latitude,
                 longitude: longitude}
            })
}

export default function* root(){
    yield [
        takeEvery('ASYNC_SET_LOCATION', asyncSetLocation),

    ];
}