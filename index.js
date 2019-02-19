function logDriverNames(drivers) {
  return drivers.map(d => console.log(d.name));
};

// function logDriversByHometown(drivers, hometown) {
//   let newDrivers = drivers.filter(d => d['hometown'] === hometown);
//   return newDrivers.forEach(function(d) {console.log(d.name)});
// };

// refactorized? or made worselier?
function logDriversByHometown(drivers, hometown) {
  return (drivers.filter(d => d['hometown'] === hometown))
  .forEach(function(d) {console.log(d['name'])});
};

function driversByRevenue(drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a, b) {
    return a['revenue'] - b['revenue'];
  });
};

function driversByName(drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function (a, b) {
    return a['name'].localeCompare(b['name']);
  });
};

function totalRevenue(drivers) {
  const reducer = (acc, cur) => acc + cur['revenue'];
  return drivers.reduce(reducer, 0);
};

function averageRevenue(drivers) {
  const reducer = (acc, cur) => acc + cur['revenue'];
  return drivers.reduce(reducer, 0) / drivers.length;
};
