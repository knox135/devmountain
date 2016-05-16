//code here for sayHi

//  sayHi('Hi Katie', function(thingToSay){
//     alert(thingToSay);
//  });
//
//
// and what you should write is the sayHi function that makes the code above work,
//
//
//  var sayHi = function(str, cb){
//   cb(str);
//  }
//
//  sayHi('Hi Katie', function(thingToSay){
//     alert(thingToSay); //should alert ('Hi Katie')'
//  });
//



// problem 1

  var first = function(group, x) {
      var firstOne = group[0];
      x(firstOne);
  };
  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

  first(names, function(firstName){
    console.log('The first name in names is ' + firstName);
  });

//problem 2

var last = function (z, y) {
  var lastOne = z[names.length - 1];
  y(lastOne);
};


last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});

//problem 3

 var multiply = function(x, y, z) {
     var end = (x * y);
      z(end);
  };

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})

//problem 4

var contains = function(a, b, c) {
  for (var i = 0; i < a.length; i++){
 	if(a[i] === b) {
 	var bo = true;
 	break;
 	}
  else {
    bo = false;
 	 }
  }
  c(bo);
};
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

// problem 5

function uniq(a, b) {
 var arr = [];
 for (i = 0; i <a.length; i++){
   if ( arr.indexOf(a[i]) === -1){
     arr.push(a[i]);
   }
 }
 return b(arr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

// prblem 6

function each(a, b){
  for (var i = 0; i < a.length; i++) {
  b(a[i], i);
  }
}
each(names, function(item, indice){
 console.log('The item in the ' + indice + ' position is ' + item);
});

//problem 7

var getUserById = function(users, a, b) {
  for (var i = 0; i < users.length; i++){
    if(users[i].id === a){
      b(users[i]);
    }
  }
};
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});
