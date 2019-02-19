const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(d1, d2) { //slice makes it non-destructive
    return d1.revenue - d2.revenue;
  });
};

const driversByName = function(drivers) {
  return drivers.slice().sort(function(d1, d2) { //slice makes it non-destructive
    return d1.name.localeCompare(d2.name);
  });
};

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total
  }, 0)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
