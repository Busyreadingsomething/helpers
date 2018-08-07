const X = {
  all(obj, callback) {
    if (Array.isArray(obj)) {
      for(let i = 0; i < obj.length; i += 1) {
        if (callback) callback(obj[i]);
      }
    } else if (obj !== null && typeof obj === 'object') {
      for (const key in obj) {
        if (callback) callback(obj[key]);
      }
    } else {
      throw 'Please submit an Array or Object';
    }
  },
};

export default X;
