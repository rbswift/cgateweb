
//cbus ip address
exports.cbusip = '127.0.0.1';


//cbus project name
exports.cbusname = "BURS1303";

//mqtt server ip:port
exports.mqtt = '127.0.0.1:1883';

//username and password (unncomment to use)
exports.mqttusername = 'user';
exports.mqttpassword = 'pass';

// net and app for automatically requesting values
exports.getallnetapp = '254/56';

// whether to request on start (requires getallnetapp set as well)
exports.getallonstart = true;

// how often to request after start (in seconds), (requires getallnetapp set as well)
exports.getallperiod = 60*60;

// Sets MQTT retain flag for values coming from cgate
exports.retainreads = true;

exports.messageinterval = 0;

//logging > 0 writes logs except NOOP. logging = 9 includes NOOP logging.
exports.logging = 0;