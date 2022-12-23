
const DysonPureCoolPlatform = require('./src/dyson-pure-cool-platform');
const UUIDGen = require('./src/dyson-pure-cool-device').UUIDGen;
const device = require('./src/dyson-pure-cool-device').device.info.name;
/**
 * Defines the export of the platform module.
 * @param homebridge The homebridge object that contains all classes, objects and functions for communicating with HomeKit.
 */
module.exports = function (homebridge) {
    homebridge.registerPlatform('homebridge-dyson-pure-cool', 'DysonPureCoolPlatform', DysonPureCoolPlatform, true);
    var FakeGatoHistoryService = require('fakegato-history')(homebridge);
    Accessory.log = this.log;
    this.loggingService.addEntry({time: Math.round(new Date().valueOf() / 1000), temp: this.temperature, humidity: this.humidity, ppm: this.ppm});
    const historyService = new FakeGatoHistoryService(device.info.name, UUIDGen, global.fakegatoOptions);

}
