describe('Level 1 Challenges...', function() {
  describe('addTwo', function() {
    it('should add two to inputted number', function() {
      expect(addTwo(0)).to.eql(2);
      expect(addTwo(1)).to.eql(3);
      expect(addTwo(2)).to.eql(4);
      expect(addTwo(-1)).to.eql(1);
    });
  });

  describe('add', function() {
    it('should add two numbers', function() {
      expect(add(5,10)).to.eql(15);
      expect(add(5,6)).to.eql(11);
      expect(add(0,0)).to.eql(0);
      expect(add(-1,1)).to.eql(0);
    });
  });

  describe('multiplyByTwo', function() {
    it('should multiply inputted number by two', function() {
      expect(multiplyByTwo(1)).to.eql(2);
      expect(multiplyByTwo(2)).to.eql(4);
      expect(multiplyByTwo(3)).to.eql(6);
      expect(multiplyByTwo(4)).to.eql(8);
      expect(multiplyByTwo(0)).to.eql(0);
      expect(multiplyByTwo(-1)).to.eql(-2);
    });
  });

  describe('multiply', function() {
    it('should multiply two numbers', function() {
      expect(multiply(1,2)).to.eql(2);
      expect(multiply(2,2)).to.eql(4);
      expect(multiply(3,2)).to.eql(6);
      expect(multiply(3,3)).to.eql(9);
    });
  });

  describe('square', function() {
    it('should square positive numbers', function() {
      expect(square(1)).to.eql(1);
      expect(square(2)).to.eql(4);
      expect(square(3)).to.eql(9);
      expect(square(4)).to.eql(16);
      expect(square(5)).to.eql(25);
    });

    it('should square negative numbers', function() {
      expect(square(-1)).to.eql(1);
      expect(square(-2)).to.eql(4);
      expect(square(-3)).to.eql(9);
      expect(square(-4)).to.eql(16);
      expect(square(-5)).to.eql(25);
    });
  });

  describe('isOdd', function() {
    it('should return true for odd numbers', function() {
      expect(isOdd(2)).to.eql(false);
      expect(isOdd(4)).to.eql(false);
      expect(isOdd(6)).to.eql(false);
      expect(isOdd(8)).to.eql(false);
    });

    it('should return false for event numbers', function() {
      expect(isOdd(1)).to.eql(true);
      expect(isOdd(3)).to.eql(true);
      expect(isOdd(5)).to.eql(true);
      expect(isOdd(7)).to.eql(true);
    });
  });

  describe('isNegative', function() {
    it('should return true for negative numbers', function() {
      expect(isNegative(-1)).to.eql(true);
      expect(isNegative(-2)).to.eql(true);
      expect(isNegative(-3)).to.eql(true);
    });

    it('should return false for positive numbers', function() {
      expect(isNegative(1)).to.eql(false);
      expect(isNegative(2)).to.eql(false);
      expect(isNegative(3)).to.eql(false);
    });

    it('should return false for zero', function() {
      expect(isNegative(0)).to.eql(false);
    });
  });

  describe('positive', function() {
    it('should return only the positive value of the number', function() {
      expect(positive(-1)).to.eql(1);
      expect(positive(1)).to.eql(1);
    });
  });

  describe('isNumber', function() {
    it('should return true for numbers', function() {
      expect(isNumber(0)).to.be(true);
      expect(isNumber(-1)).to.be(true);
      expect(isNumber(1)).to.be(true);
    });

    it('should return false for everything', function() {
      expect(isNumber({})).to.be(false);
      expect(isNumber([])).to.be(false);
      expect(isNumber('a')).to.be(false);
      expect(isNumber(true)).to.be(false);
    });
  });

  describe('isArray', function() {
    it('should return true for array', function() {
      expect(isArray([])).to.be(true);
      expect(isArray([1])).to.be(true);
    });

    it('should return false for everything', function() {
      expect(isArray({})).to.be(false);
      expect(isArray('a')).to.be(false);
      expect(isArray(1)).to.be(false);
      expect(isArray(true)).to.be(false);
    });
  });

  describe('isObject', function() {
    it('should return true for object', function() {
      expect(isObject({})).to.be(true);
      expect(isObject({a:1})).to.be(true);
      expect(isObject([])).to.be(true);
    });

    it('should return false for everything', function() {
      expect(isObject('a')).to.be(false);
      expect(isObject(1)).to.be(false);
      expect(isObject(true)).to.be(false);
    });
  });

  describe('isNull', function() {
    it('should return true for null', function() {
      expect(isNull(null)).to.be(true);
    });

    it('should return false for everything', function() {
      expect(isNull(5)).to.eql(false);
      expect(isNull('string')).to.eql(false);
      expect(isNull({})).to.eql(false);
      expect(isNull([])).to.eql(false);
      expect(isNull(undefined)).to.eql(false);
      expect(isNull(true)).to.eql(false);
      expect(isNull(false)).to.eql(false);
    });

  });

});
describe('Intermediate Level Challenges...', function() {

  describe('returnOdds', function() {
    it('should return odd numbers from an array', function() {
      expect(returnOdds([4, 7, 8, 3, 4, 6])).to.eql([7, 3]);
      expect(returnOdds([1, 9, 8, 3, 5])).to.eql([1, 9, 3, 5]);
    });
  });

  describe('returnEvens', function() {
    it('should return even numbers from an array', function() {
      expect(returnEvens([4, 7, 8, 3, 4, 6])).to.eql([4, 8, 4, 6]);
      expect(returnEvens([1, 9, 8, 3, 5])).to.eql([8]);
    });
  });

  describe('findMax', function() {
    it('should find max number in an array', function() {
      expect(findMax([13, 1, 6, 100])).to.eql(100);
    });
    it('should not be fooled by negative numbers', function() {
      expect(findMax([13, 1, 6, -100])).to.eql(13);
    });
  });

  describe('trim', function() {
    it('should remove leading white spaces', function() {
      expect(trim('hello')).to.eql('hello');
      expect(trim(' hello')).to.eql('hello');
      expect(trim('  hello')).to.eql('hello');
      expect(trim('   hello')).to.eql('hello');
    });

    it('should remove trailing white spaces', function() {
      expect(trim('hello')).to.eql('hello');
      expect(trim('hello ')).to.eql('hello');
      expect(trim('hello  ')).to.eql('hello');
      expect(trim('hello    ')).to.eql('hello');
    });

    it('should remove both', function() {
      expect(trim('  hello  ')).to.eql('hello');
    });

    it('should not remove space in the middle', function() {
      expect(trim('keep the space in the middle  ')).to.eql('keep the space in the middle');
    });
  });

  describe('createArray', function() {
    beforeEach(function() {
      array = new createArray();
    });
    it('should have push and pop method', function() {
      expect(array).to.have.property('push');
      expect(array.push).to.be.a('function');
      expect(array).to.have.property('pop');
      expect(array.pop).to.be.a('function');
    });

    it('should push and pop single value', function() {
      array.push(0);
      expect(array.pop()).to.be(0);
    });

    it('should push and pop multiple values', function() {
      array.push(0);
      array.push(1);
      array.push(2);
      expect(array.pop()).to.be(2);
      expect(array.pop()).to.be(1);
      expect(array.pop()).to.be(0);
    });

    it('should have shift and unshift method', function() {
      expect(array).to.have.property('shift');
      expect(array.shift).to.be.a('function');
      expect(array).to.have.property('unshift');
      expect(array.unshift).to.be.a('function');
    });

    it('should unshift and shift single value', function() {
      array.unshift(0);
      expect(array.shift()).to.be(0);
    });

    it('should unshift and shift multiple values', function() {
      array.unshift(0);
      array.unshift(1);
      array.unshift(2);
      expect(array.shift()).to.be(2);
      expect(array.shift()).to.be(1);
      expect(array.shift()).to.be(0);
    });
  });
});
describe('Advanced Level Challenges...', function() {
  describe('forEach', function() {
    it('should iterate over arrays, providing access to the element, index, and array itself', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      forEach(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });

    it('should only iterate over the array elements, not properties of the array', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      fruits.shouldBeIgnored = 'Ignore me!';
      forEach(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });
  });

  describe('map', function() {
    it('should apply a function to every value in an array', function() {
      var doubled = map([1, 2, 3], function(num) {
        return num * 2;
      });
      expect(doubled).to.eql([2, 4, 6]);
    });
  });

  describe('filter', function() {
    it('should return all even numbers in an array', function() {
      var isEven = function(num) { return num % 2 === 0; };
      var evens = filter([1, 2, 3, 4, 5, 6], isEven);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should return all odd numbers in an array', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      var odds = filter([1, 2, 3, 4, 5, 6], isOdd);
      expect(odds).to.eql([1, 3, 5]);
    });
  });

  describe('reject', function() {
    it('should reject all even numbers', function() {
      var isEven = function(num) { return num % 2 === 0; };
      var odds = reject([1, 2, 3, 4, 5, 6], isEven);
      expect(odds).to.eql([1, 3, 5]);
    });

    it('should reject all odd numbers', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      var evens = reject([1, 2, 3, 4, 5, 6], isOdd);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should reject all odd values in object', function() {
      var obj = {a:1, b:2, c:3, d:4};
      var isOdd = function(value, key, collection) { return value % 2 !== 0; };
      var evens = reject(obj, isOdd);
      expect(evens).to.eql({b:2, d:4});
    })
  });

  describe('uniq', function() {
    it('should return all unique values contained in an unsorted array', function() {
      var list = [1, 2, 1, 3, 1, 4];
      expect(uniq(list)).to.eql([1, 2, 3, 4]);
    });

    it('should handle iterators that work with a sorted array', function() {
      var iterator = function(value) { return value +1; };
      var list = [1, 2, 2, 3, 4, 4];
      expect(uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
    });
  });

  describe('indexOf', function() {
    it('should have 40 in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 40)).to.be(3);
    });

    it('should be able to compute indexOf even when the native function is undefined', function() {
      var numbers = [10, 20, 30];
      expect(indexOf(numbers, 20)).to.be(1);
    });

    it('returns -1 when the target cannot be found not in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 35)).to.be(-1);
    });

    it('returns the first index that the target can be found at when there are multiple matches', function() {
      var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
      expect(indexOf(numbers, 40)).to.be(1);
    });
  });

  describe('once', function() {
    it("should only run a user-defined function if it hasn't been run before", function() {
      var num = 0;
      var increment = once(function() {
        num += 1;
      });
      increment();
      increment();
      expect(num).to.equal(1);
    });
  });

  describe('reduce', function() {
    it('should sum up an array', function() {
      var add = function(tally, item) {return tally + item; };
      var total = reduce([1, 2, 3], add);
      expect(total).to.equal(6);
    });

    it('should find the difference in an array', function() {
      var difference = function(tally, item) {return tally - item; };
      var total = reduce([1, 2, 3], difference);
      expect(total).to.equal(-4);
    });

    it('should sum up an array when start provided', function() {
      var add = function(tally, item) {return tally + item; };
      var total = reduce([1, 2, 3], add, 2);
      expect(total).to.equal(8);
    });

    it('should find the difference in an array when start provided', function() {
      var difference = function(tally, item) {return tally - item; };
      var total = reduce([1, 2, 3], difference, -1);
      expect(total).to.equal(-7);
    });
  });

  describe('every', function() {
    it('should check if all elements are odd', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      expect(every([1, 3, 5], isOdd)).to.be(true);
      expect(every([1, 4, 5], isOdd)).to.be(false);
    });
  });

  describe('flatten', function() {
    it('should flatten nested arrays', function() {
      expect(flatten([1, [2, 3, [4]]])).to.eql([1, 2, 3, [4]]);
    });
  });

  describe('flattenDeep', function() {
    it('should flatten nested arrays recursively', function() {
      expect(flattenDeep([1, [2, 3, [4]]])).to.eql([1, 2, 3, 4]);
    });
  });

  describe('copyShallow', function(){
    it('make a shallow copy of an object', function (){
      const obj1 = {a: 'a', b:{c: 'c'}}
      const obj2 = copyShallow(obj1);
      expect(obj1 === obj2 ).to.eql(false);
      expect(obj1.b === obj2.b).to.eql(true);
    });
  });

  describe('copyDeep', function(){
    it('make a shallow copy of an object', function (){
      const obj1 = {a: 'a', b:{c: 'c'}}
      const obj2 = copyDeep(obj1);
      expect(obj1 === obj2 ).to.eql(false);
      expect(obj1.b === obj2.b).to.eql(false);
    });
  });

});