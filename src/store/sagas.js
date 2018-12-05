import {takeEvery, put, call, all} from 'redux-saga/effects';
import EasyBluetooth from 'easy-bluetooth-classic';
import moment from 'moment';
import 'moment/min/moment-with-locales';

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, 
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },    
        );
      });
}


//FUNCAO QUE VAI RETORNAR PARA O ESTADO UMA LISTA DE DEVICES
async function getBluetoothDevicesList () {
    var config = {
      "uuid": "00001101-0000-1000-8000-00805f9b34fb",
      "deviceName": "Bluetooth Example Project",
      "bufferSize": 1024,
      "characterDelimiter": "\n" 
    }   
    try { 
        await EasyBluetooth.init(config); }
    catch (e){ 
        console.log( "Erro na configuração do BT" + e );
        return 1}
    try { 
        let scanned = await EasyBluetooth.startScan();
            return scanned; }
    catch (e){ console.log ("Erro ao escanear os dispositivos" + e); 
        return 1}
}



function* asyncSetLocation(action){
    const response = yield call (getPosition);
    const {latitude, longitude} = response.coords; // vai pegar posição
    yield put({type:'SET_LOCATION', 
        payload:
            {address: action.payload,
            latitude: latitude,
            longitude: longitude}
        }
    )  
}


function* asyncGetBluetoothList(){
    try {
    const response = yield call (getPosition); 
    const {latitude, longitude} = response.coords;
    if (typeof latitude != 'undefined') {
        const devices = yield call (getBluetoothDevicesList);
        const date = moment().format('llll')
        if (!devices[0]) {
            yield put({type:'default'})
        } else {
        for (var i =0; i < devices.length; i++ )  {
            yield put({type:'GET_BLUETOOTH_LIST', 
                    payload:
                        {address: devices[i]['address'],
                        updatedAt: date,
                        latitude: latitude,
                        longitude: longitude
                        }
                    }) }  
        }    
    }} catch (error) {alert(error)}
}

export default function* root(){
    yield all ( [
        takeEvery('ASYNC_SET_LOCATION', asyncSetLocation),
        takeEvery('ASYNC_GET_LIST', asyncGetBluetoothList)
  ]);
}
