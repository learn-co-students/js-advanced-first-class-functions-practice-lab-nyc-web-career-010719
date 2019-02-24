// function logDriverNames (persons) {
//   persons.forEach( person => {
//     console.log(person.name)
//   })
// }
//
// function logDriversByHometown (persons, location) {
//   persons.forEach( person => {
//     if (person.hometown === location) {
//       console.log(person.name)
//     }
//   })
// }
//
// function driversByRevenue (persons) {
//   return persons.slice().sort(function (person1, person2) {
//     return person1.revenue - person2.revenue
//   })
// }
//
// function driversByName (persons) {
//   return persons.slice().sort( (person1, person2) => {
//     return person1.name.localeCompare(person2.name)
//   }
// }
//
// function totalRevenue (drivers) {
//   return drivers.reduce( (sum, driver) => sum + driver.revenue, 0)
// }
//
// function averageRevenue (drivers) {
//   return drivers.reduce( (sum, driver, i, drivers) => {
//     sum += driver.revenue
//     if (i === drivers.length) {
//       return sum / drivers.length
//     } else {
//       return sum
//     }
//   })
// }

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

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

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
