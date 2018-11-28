import EasyBluetooth from 'easy-bluetooth-classic';

    var config = {
      "uuid": "00001101-0000-1000-8000-00805f9b34fb",
      "deviceName": "Bluetooth Example Project",
      "bufferSize": 1024,
      "characterDelimiter": "\n"
    }

    EasyBluetooth.init(config)
      .then(function (config) {
        console.log("config done!");
      })
      .catch(function (ex) {
        console.warn(ex);
      });

export function connectToDevice(device) {
  EasyBluetooth.connect(device)
      .then(() => {
        console.log("Connected!");
      })
      .catch((ex) => {
        console.warn(ex);
      })
}

export function sendChar() {
  EasyBluetooth.writeln("Oi")
  .then(() => {
    console.log("Writing...")
  })
  .catch((ex) => {
    console.warn(ex);
})
}