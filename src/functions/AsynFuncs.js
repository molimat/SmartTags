import { AsyncStorage } from "react-native"

export async function getAllData() {
    var data = [{id:null, address:null, name:null}];
     AsyncStorage.getAllKeys((err, keys) => {
       AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          var key = store[i][0];
          var value = store[i][1];
          data[i] = {id: i, address: key, name: value}
        });
      });
    });
  return data}

  