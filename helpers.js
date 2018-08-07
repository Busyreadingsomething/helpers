export default {
  all(obj, callback) {
    if (Array.isArray(obj)) {
      for(let i = 0; i < obj.length; i += 1) {
        if (callback) callback(obj[i], i, obj);
      }
    } else if (obj !== null && typeof obj === 'object') {
      for (const key in obj) {
        if (callback) callback(obj[key], key, obj);
      }
    } else {
      throw new Error('Please submit an Array or Object');
    }
  },
  map(obj, callback) {
    let result;
    if (Array.isArray(obj)) {
      result = [];
      this.all(obj, (item, index, obj) => {
        result.push(callback(item, index, obj));
      });
    } else if (obj !== null && typeof obj === 'object') {
      result = {};
      this.all(obj, (item, key, obj) => {
        result[key] = callback(item, key, obj);
      });
    } else {
      throw new Error('Object or Array was not given');
    }
  }
};
