import users from './users.js';

const getSortedUniqueSkills = users => {
  const skillSortResult = users
    .reduce((acc, user) => {
      acc = acc.concat(user.skills);
      return acc;
    }, [])
    .reduce((acc, user) => {
      if (!acc.includes(user)) {
        acc.push(user);
        return acc;
      }
      return acc
    }, [])
    .sort()
  return skillSortResult
};

console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]