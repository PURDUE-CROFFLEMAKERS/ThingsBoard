/* isResponseFast(HR, SpO2)
 * Detect if response time is fast enough with HR & SpO2 are over the average
 * @param HR, SpO2
 * @return boolean
`*/ 
function isDrowsy(msg, metadata, msgType) {
  var newMsg = false;
  var avg_bpm = parseInt(JSON.parse(metadata.sum_bpm))/parseInt(JSON.parse(metadata.bpm_count));
  var avg_spo2 = parseInt(JSON.parse(metadata.sum_spo2))/parseInt(JSON.parse(metadata.spo2_count));

  var bpm_val = parseInt(msg.params[0]) / 100;
  var spo2_val = parseInt(msg.params[1]) / 100;

  if (bpm_val < avg_bpm && spo2_val < avg_spo2) {
      newMsg = true;
  }

  return {msg: newMsg, metadata: metadata, msgType: msgType};
}


/* isResponseFast(HR, SpO2, time)
 * Detect if response time is fast enough with HR & SpO2 are over the average
 * @param HR, SpO2, time
 * @return string
`*/ 
function isResponseFast(msg, metadata, msgType) {
  var newMsg = "";

  var avg_bpm = parseFloat(JSON.parse(metadata.sum_bpm))/parseInt(JSON.parse(metadata.bpm_count));
  var avg_spo2 = parseFloat(JSON.parse(metadata.sum_spo2))/parseInt(JSON.parse(metadata.spo2_count));
  var avg_time = (parseFloat(JSON.parse(metadata.sum_time))/10).toFixed(3);

  if (msg.params[2] < avg_time) {
      if ((msg.params[0]/100 >= avg_bpm) && (msg.params[1]/100 >= avg_spo2)) {
          newMsg = "good";
      } else {
          newMsg = "wakeup";
      }
  } else {
      newMsg = "tooslow";
  }

  return {msg: newMsg, metadata: metadata, msgType: msgType};
}


/* genRandSec()
 * Generates random second(1.0 - 6.0 sec) for the game action
 * @param none
 * @return float
`*/ 
function genRandSec(msg, metadata, msgType) {
  var newMsg = (Math.random() * 6 + 1).toFixed(1);

  return {msg: newMsg, metadata: metadata, msgType: msgType};
}