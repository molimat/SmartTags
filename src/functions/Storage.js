import { AsyncStorage } from "react-native"
import Geolocation from 'react-native-geolocation-service';

const storage = {
  pushData: async (key, item) => {
      try {
          var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
          console.log("Salvo em memória")
          return jsonOfItem;
      } catch (error) {
          console.log(error.message);
      }
    
    
  },
  getAllData: async () => {
    var data = [{id:null, address:null, name:null}];
    await AsyncStorage.getAllKeys(async (err, keys) => { // This is async function. 
      await AsyncStorage.multiGet(keys, (err, stores) => { // This is async function also. 
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          var key = store[i][0];
          var value = store[i][1];
          data[i] = {id: i, address: key, name: value}
        });
      });
    });
    console.log(data); // Check your data. 
    return data
},
  
  removeTags: async () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiRemove(keys, (err) => {console.log(err)});
    })
  },
  
  getKeys: async() => {
    AsyncStorage.getAllKeys((err, keys) => {keys = keys})
  },


  RemoveValue(item){
    try {
      AsyncStorage.removeItem(item);
  } catch (error) {
     console.log(error);
  };
},

  mergeItem(key, items) {
    AsyncStorage.mergeItem(key, JSON.stringify(items), () => {
      AsyncStorage.getItem(key, (err, result) => {
        console.log(result);
      });
    });

  }

}


export default storage;

/* 




export default retrieveData = async (key) => {
    try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
     } catch (error) {
        console.log(error.message);
     }
     return 1
  }

export default fetchAllData = async () => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = store[i][1];
        console.log("store")
        console.log(store)
        console.log("key")
        console.log(key)
        console.log("value")
        console.log(value)
      });
    });
  });}
 */