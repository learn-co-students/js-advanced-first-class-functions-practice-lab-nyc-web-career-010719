// Code your solution in this file!
let logDriverNames = function(drivers){
  drivers.forEach( function(driver){
    console.log(driver.name)
  })
}

let logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location)
      {console.log(driver.name)}
  })
}

let driversByRevenue = function(drivers){
  let driverRevenues = [...drivers]
    return driverRevenues.sort(function (driverOne, driverTwo){
      return driverOne.revenue - driverTwo.revenue
    })
  }
  //   .forEach(function(driver){
  //   return driver.revenue
  // })
  // .sort

let driversByName = function(drivers){
  let driverNames = [...drivers]
    return driverNames.sort(function (driverOne, driverTwo){
      return driverOne.name.localeCompare(driverTwo.name);
    })
}

let totalRevenue = function(drivers){
  return drivers.reduce(function (total, currentDriver){
    return currentDriver.revenue + total;
  }, 0);
};

let averageRevenue = function(drivers){
  return (totalRevenue(drivers) / drivers.length)
}
