import X from './helpers';

describe('### X ###', () => {
  describe('___ IMPORT ___', () => {
    it('should be an object', () => {
      expect(X).toBeInstanceOf(Object);
    });
  });

  describe('___ ALL ___', () => {
    let LIST;
    let MAP;

    beforeEach(() => {
      LIST = [1, 2, 3, 4, 5];
      MAP = {
        a: 1,
        b: 2,
        c: 3,
      };
    });

    it('should be a function', () => {
      expect(X.all).toBeInstanceOf(Function);
    });

    it('should throw an error if no ARRAY or OBJECT is passed', () => {
      expect(() => X.all('BAD')).toThrow('Object or Array was not given');
      expect(() => X.all(123)).toThrow('Object or Array was not given');
      expect(() => X.all(null)).toThrow('Object or Array was not given');
      expect(() => X.all(true)).toThrow('Object or Array was not given');
      expect(() => X.all(false)).toThrow('Object or Array was not given');
      expect(() => X.all()).toThrow('Object or Array was not given');
    });

    it('should iterate through the entire list\'s elements', () => {
      const final = [];
      X.all(LIST, item => final.push(item));
      expect(final).toEqual(expect.arrayContaining(LIST));
    });

    it('should iterate through the list with the index of the elements', () => {
      const final = [];
      X.all(LIST, (item, i) => final.push(i));
      expect(final).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
    });

    it('should iterate through the entire objects\'s properties', () => {
      const final = {};
      const expectedObj = {
        a: 1,
        b: 2,
        c: 3,
      };
      X.all(MAP, (item, key) => final[key] = item);
      expect(final).toEqual(expect.objectContaining(expectedObj));
    });

    it('should have access to the object\'s keys', () => {
      const final = [];
      const expectedKeys = ['a', 'b', 'c'];
      X.all(MAP, (item, key) => final.push(key));
      expect(final).toEqual(expect.arrayContaining(expectedKeys));
    })
  });

  describe('___ MAP ___', () => {
    let LIST;
    let MAP;
    beforeAll(() => {
      LIST = [1, 2, 3, 4, 5];
      MAP = {
        a: 1,
        b: 2,
        c: 3,
      };
    });

    it('should be a function', () => {
      expect(X.map).toBeInstanceOf(Function);
    });

    it('should throw an error if no ARRAY or OBJECT is passed', () => {
      expect(() => X.map('BAD')).toThrow('Object or Array was not given');
      expect(() => X.map(123)).toThrow('Object or Array was not given');
      expect(() => X.map(null)).toThrow('Object or Array was not given');
      expect(() => X.map(true)).toThrow('Object or Array was not given');
      expect(() => X.map(false)).toThrow('Object or Array was not given');
      expect(() => X.map()).toThrow('Object or Array was not given');
    });
  });
});
