import {takeEvery, put} from 'redux-saga/effects'

function* asyncAddTagFake(action){
    yield put({type:'ADD_TAG_FAKE', payload: action.payload})
}

export default function* root(){
    yield [
        takeEvery('ASYNC_ADD_TAG_FAKE', asyncAddTagFake),

    ];
}