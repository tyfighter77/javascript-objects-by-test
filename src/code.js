/* LITERALS */
function makeEmptyObject(){
  return {};
}

/* NEW OBJECT */
function makeEmptyObjectNew(){
  return new Object();
}

/* KEY VALUE PAIRS */
function makeFirstObject(){
  return {keyOnTheLeft: "Value on the right"};
}

function makeNumberObject(){
  return {numberKey: 9001};
}

function makeStringObject(){
  return {stringKey: "We are the champions"};
}

function makeBooleanObject(){
  return {booleanKey: true};
}

function makeObjectObject(){
  return {objectKey: {innerObject: "This works"}};
}

function makeArrayObject(){
  return {arrayKey: [1,2,3]};
}

function makeFunctionObject(){
  return {sayHi: function(){ return "Hi"}};
}

function makeObjception(){
  return {
    objectKey: {
      inceptionLevel1:{
        inceptionLevel2: {
          inceptionLevel3: "Objception Complete!"
        }
      }
    }
  };
}

function makeMultikeyObject(){
  return {
    prop1: "So beaucoup",
    prop2: "So mucho",
    prop3: "So many"
  };
}

/* DOT PROPERTY */
function returnUrlProperty(obj){
  return obj.url;
}

function returnSubdomainUserCount(obj) {
  return obj.subdomain.userCount;
}

function getUserCount(obj){
  return obj.userCount;
}

function setUserCount(obj){
  obj.userCount = 7;
}

/* SQUARE BRACKET NOTATION */
function returnUrlPropertySquare(obj){
  return obj["url"];
}

function returnSubdomainUserCountSquare(obj){
 return obj["subdomain"]["userCount"];
}

function getUserCountSquare(obj){
  return obj["userCount"];
}

function setUserCountSquare(obj){
  obj["userCount"] = 7;
}

/* DELETE */
function deleteSecond(obj){
  delete obj.second;
  return obj;
}

/* LOOP */
function getValuesFromObject(obj){
  var arr = [];
  for (var p in obj){
    arr.push(obj[p]);
  }
  return arr;
}

/* FUNCTIONS ARE OBJECTS */
function invokeAnObject(){
  var obj = {};
  obj();
}

//Flyfisherman object exercise
var flyFisherman = {
  clothing: ["hat", "vest", "waders"],
  set: {
    rod: "glass fiber",
    reel: "awesome5x2",
    line: "shark strength",
    flies: [
      {
        nickname: 'little lady',
        type: 'sparkly'
      },
      {
        nickname: 'dirty politician',
        type: 'bribery'
      }
    ]
  },
};

//Real World Problem: CoverBandAPalooza.  To avoid bands covering the same artists, write code.
// Step 1: model the registrations

var coverBands = [
  {
    bandName: 'Tuneyards',
    contact: 'dave@tuneyards.com',
    covering: 'yardbirds'
  },
  {
    bandName: 'Petty Theft',
    contact: 'dave@tuneyards.com',
    covering: 'TomPetty'
  },
  {
    bandName: 'Metalachi',
    contact: 'arriche@wewannametalica.com',
    covering: 'Metalica'
  },
  {
    bandName: 'Led Zeppagain',
    contact: 'Mike@Journagain.com',
    covering: 'Journey'
  },
  {
    bandName: 'Heartbreakers',
    contact: 'breakers@breakers.com',
    covering: 'TomPetty'
  },
  {
    bandName: 'Arnel',
    contact: 'Arnel@Arnel.com',
    covering: 'Journey'
  },
  {
    bandName: 'Meatloaf',
    contact: 'dameat@loafs.com',
    covering: 'Journey'
  }
];

// //Step 2: What output do we want?
//
// function countCoverBands(arrayOfCoverBands) {
//   var resultsObj = {};
//   for (var i = 0; i < arrayOfCoverBands.length; i++) {
//     var bandName = arrayOfCoverBands[i].covering;
//     if (resultsObj.hasOwnProperty(bandName)){
//       resultsObj[bandName]++;
//     } else {
//       resultsObj[bandName] = 1;
//   }
//   return resultsObj;
// }
//
// countCoverBands(coverBands);
//
// var expectedResult = {
//   yardbirds: 1,
//   TomPetty: 2,
//   Metalica: 1,
//   Journey: 3
// }
