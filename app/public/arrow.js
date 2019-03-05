// {
//   connectEnd: 304.69999999877473
//   connectStart: 2.599999999802094
//   decodedBodySize: 362
//   domComplete: 2546.0999999995693
//   domContentLoadedEventEnd: 1275.8999999987282
//   domContentLoadedEventStart: 1274.2999999991298
//   domInteractive: 1274.0999999987253
//   domainLookupEnd: 2.599999999802094
//   domainLookupStart: 2.599999999802094
//   duration: 2554.8999999991793
//   encodedBodySize: 362
//   entryType: "navigation"
//   fetchStart: 1.299999999901047
//   initiatorType: "navigation"
//   loadEventEnd: 2554.8999999991793
//   loadEventStart: 2546.299999999974
//   name: "http://localhost:8000/#/"
//   nextHopProtocol: ""
//   redirectCount: 0
//   redirectEnd: 0
//   redirectStart: 0
//   requestStart: 304.7999999998865
//   responseEnd: 308.7999999988824
//   responseStart: 305.8000000000902
//   secureConnectionStart: 0
//   serverTiming: []
//   startTime: 0
//   transferSize: 210
//   type: "reload"
//   unloadEventEnd: 313.39999999909196
//   unloadEventStart: 310.89999999858264
//   workerStart: 0
// }

const sendData = (moniterData) => {
  const img = document.createElement('img');
  img.src = `http://127.0.0.1:7001/getMoniterData?moniterData=${JSON.stringify(moniterData)}`;
};

window.onload = () => {
  const [{
    domComplete,
  }] = performance.getEntriesByType('navigation');
  sendData({
    domComplete,
  });
  console.log('domComplete', domComplete / 1000);
};
