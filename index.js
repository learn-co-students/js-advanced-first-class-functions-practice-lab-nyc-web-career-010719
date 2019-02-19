// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if(driver.hometown == location){
      console.log(driver.name)
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};


const totalRevenue = function (drivers){
  let total = 0
  drivers.forEach(function (driver) {
    return total += driver.revenue
  })
  return total
}

const averageRevenue = function(drivers){
  return (totalRevenue(drivers)/drivers.length)
}
