describe('Objects', function(){
  /*Model a Credit Card in english. “How would you give your credit card info to someone?”. This naturally creates a “key value pair”
Key/Value Pairs
Object Literal
Access Values with Bracket Notation
new Object vs Object Literal
No Order
Delete
Methods
Looping through Objects
Dot Property
Functions as Objects
*/

  describe('Can be Literals', function(){
      it('is made up of curly braces', function(){
          expect(makeEmptyObject()).toEqual({});
      })

  })

  it('Can be made with "new Object"', function(){
    expect(makeEmptyObjectNew()).toEqual({})
  })

  describe('Use key value pairs', function(){
    it('has a key on the left and a value on the right.  Inside the curly braces', function(){
      expect(
        makeFirstObject()
      ).toEqual(
        {keyOnTheLeft: "Value on the right"}
      )
    })

    it('can have values that are  numbers, like 9001', function(){
      expect(
        makeNumberObject()
      ).toEqual(
        {numberKey: 9001}
      )
    })

    it('can have values that are strings, like "We are the champions"', function(){
      expect(
        makeStringObject()
      ).toEqual(
        {stringKey: "We are the champions"}
      )
    })

    it('can have values that are booleans, like true', function(){
      expect(
        makeBooleanObject()
      ).toEqual(
        {booleanKey: true}
      )
    })

    it('can have values that are objects, like {innerObject: "This works"}', function(){
      expect(
        makeObjectObject()
      ).toEqual(
        {objectKey: {innerObject: "This works"}}
      )
    })

    it('can have values that are arrays, like [1,2,3]', function(){
      expect(
        makeArrayObject()
      ).toEqual(
        {arrayKey: [1,2,3]}
      )
    })

    it('can have values that are functions, like sayHi', function(){
      expect(
        makeFunctionObject().sayHi()
      ).toEqual(
        "Hi"
      )
    })

    it('can nest values deeply', function(){
      expect(
        makeObjception()
      ).toEqual(
        {
          objectKey: {
            inceptionLevel1: {
              inceptionLevel2: {
                inceptionLevel3:
                "Objception Complete!"
              }
            }
          }
        }
      )
    })

    it('uses commas to separate multiple properties', function(){
      expect(
        makeMultikeyObject()
      ).toEqual(
          {
            prop1: "So beaucoup",
            prop2: "So mucho",
            prop3: "So many"
          }
      )
    })
  })

  describe('Can be accessed with dot property', function(){
    var website;
    beforeEach(function(){
        website = {
          url: 'www.worldwideweb.com',
          userCount: 5000000000,
          subdomain: {
            url: 'tubes.worldwideweb.com',
            userCount: 5000,
          }
        }
    })

    it('can access any property by using a dot after the variable name', function(){
      expect(returnUrlProperty(website)).toEqual('www.worldwideweb.com');
    })

    it('can access any property by using a dot after the variable name, nested', function(){
      expect(returnSubdomainUserCount(website)).toEqual(5000);
    })

    it('can get values', function(){
        var count = getUserCount(website);
        expect(count).toBe(5000000000);
    })

    it('can set values', function(){
      setUserCount(website, 7);
      expect(website.userCount).toBe(7);
    })
  })

  describe('Can be accessed with square bracket notation', function(){
    var website;
    beforeEach(function(){
        website = {
          url: 'www.worldwideweb.com',
          userCount: 5000000000,
          subdomain: {
            url: 'tubes.worldwideweb.com',
            userCount: 5000,
          }
        }
    })

    it('can access any property by using a dot after the variable name', function(){
      expect(returnUrlPropertySquare(website)).toEqual('www.worldwideweb.com');
    })

    it('can access any property by using a dot after the variable name, nested', function(){
      expect(returnSubdomainUserCountSquare(website)).toEqual(5000);
    })

    it('can get values', function(){
        var count = getUserCountSquare(website);
        expect(count).toBe(5000000000);
    })

    it('can set values', function(){
      setUserCountSquare(website, 7);
      expect(website.userCount).toBe(7);
    })
  })

  it('Can be created and added to in any order', function(){
    expect({
      first: 'first',
      second: 'second',
      third: 'third'
    }).toEqual({
      second: 'second',
      third: 'third',
      first: 'first'
    })
  })

  it('Can have properties deleted', function(){
    expect(
      deleteSecond({
        first: 'first',
        second: 'second',
        third: 'third'
      })).toEqual({
        first: 'first',
        third: 'third'
      })
  })

  it('Can be looped through with for(var in obj)', function(){
    var myObj = {
      first: "first",
      second: "second",
      third: "third"
    }
    expect(getValuesFromObject(myObj)).toEqual(["first", "second", "third"])
  })

  describe('Are not functions, but functions are objects', function(){
    it('cannot invoke an object', function(){
      expect(invokeAnObject).toThrow();
    })

    it('can add properties to a function', function(){
      var myFunc = function(){

      }
      myFunc.first = "first";
      myFunc.second = "second";
      myFunc.third = "third";

      expect(getValuesFromObject(myFunc)).toEqual(["first", "second", "third"])
    })
  })


})
