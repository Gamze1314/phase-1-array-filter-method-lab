let newArr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, name) { // takes 2 args
    
    return array.filter(function(arg) {
        return arg.toLowerCase() === name.toLowerCase();
        });
}

findMatching(newArr, 'Bobby');



function fuzzyMatch(array, letters) { 
    let drivers = []; 
    let filtered = array.filter(function(arg) {
      return arg.charAt(0) === letters.charAt(0);
    });
  
    drivers.push(...filtered);
    return drivers;
  }
  
  fuzzyMatch(newArr, "Sa");



let drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(array, name) { 
    return drivers.filter(function (arg) {
        return arg.name === name; 
       
    });

  }

  matchName(drivers, 'Bobby');

