import * as ZeroMQ from 'zeromq';

const {
  TRON_EVENTS_URL
} = process.env;

const sock = ZeroMQ.socket('sub');

sock.connect(TRON_EVENTS_URL);
sock.subscribe('blockTrigger');

sock.on('message', function(topic, message) {
  console.log(`received a message related to: ${topic} containing message: ${JSON.stringify(JSON.parse(message))}`);
});