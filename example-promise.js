function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback("City is not found");
}

getTempCallback("London", function(err, temp){
  if(err) {
    console.log("error", err);
  } else {
    console.log("success", temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject("City Not Found!");
  });
}

getTempPromise("London").then(function(temp) {
  console.log("Promise Success", temp);
}, function (err) {
  console.log("Promise Error", err);
})

// ---------------------------------------------------------------------------

// Challenge
function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    if (typeof(a) === "number" && typeof(b) === "number"){
      resolve(a + b);
    } else {
      reject("ERROR: a and b need to be a number");
    }
  });
}

addPromise(2, 6).then(function(sum) {
  console.log("Promise Success", sum);
}, function(err) {
  console.log("Promise Error", err)
});

addPromise("Vish", 6).then(function(sum) {
  console.log("Promise Success", sum);
}, function(err) {
  console.log("Promise Error", err)
});
