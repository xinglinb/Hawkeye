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
