const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object('Object instance!!!');
    return object;
  }

  return {
    getInstance: function() {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

if(instanceA === instanceB) {
  console.log('Same object');
}