/* calculateSumBPM()
 * calculate the sum of the HR and count how many data has posted
 * @param none
 * @return none
`*/ 
function calculateSumBPM(msg, metadata, msgType) {
  var newMsg = {};
  if (metadata["sum_bpm"] == undefined) {
      newMsg.sum_bpm = parseInt(msg.bpm)/100;
      newMsg.bpm_count = 1;
  } else {
      newMsg.sum_bpm = parseInt(msg.bpm)/100 + parseInt(JSON.parse(metadata.sum_bpm));
      newMsg.bpm_count = parseInt(JSON.parse(metadata.bpm_count))+1;
  }

  return {msg: newMsg, metadata: metadata, msgType: msgType};
}


/* calculateSumSpO2()
 * calculate the sum of the SpO2 and count how many data has posted
 * @param none
 * @return none
`*/ 
function calculateSumSpO2(msg, metadata, msgType) {
  var newMsg = {};
  if (metadata["sum_spo2"] == undefined) {
      newMsg.sum_spo2 = parseInt(msg.spo2) / 100
      newMsg.spo2_count = 1;
  } else {
      newMsg.sum_spo2 = parseInt(msg.spo2) / 100 + parseFloat(JSON.parse(metadata.sum_spo2));
      newMsg.spo2_count = parseInt(JSON.parse(metadata.spo2_count))+1;
  }

  return {msg: newMsg, metadata: metadata, msgType: msgType};
}


/* calculateSumSpO2()
 * calculate the sum of the Response Time
 * @param none
 * @return none
`*/ 
function calculateSumTime(msg, metadata, msgType) {
  var newMsg = {};
  if (metadata["sum_time"] == undefined) {
      newMsg.sum_time = parseFloat(msg.time)
  } else {
      newMsg.sum_time = (msg.time + parseInt(JSON.parse(metadata.sum_time)))
  }
}

