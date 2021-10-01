// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const match = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
    return match
}
console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));


function fuzzyMatch(drivers, string) {
    let letters = drivers.filter(drivers => drivers.slice(0, string.length) === string)
    return letters
}
// string is a string of letters, but the length is always different
console.log(fuzzyMatching(drivers, 'Sa'));
console.log(fuzzyMatching(drivers, 'y'));
console.log(fuzzyMatching(drivers, 'mm'));


const drivers = [
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

  function matchName(drivers, string) {
      const members = drivers.filter(drivers => drivers.name === string)
      return members

}

