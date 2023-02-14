function sortStudents(students) {
  students.sort(function(a, b) {
    // 1. First priority: Total marks
    if (b['chemistry marks'] + b['biology marks'] > a['chemistry marks'] + a['biology marks']) {
      return 1;
    }
    if (b['chemistry marks'] + b['biology marks'] < a['chemistry marks'] + a['biology marks']) {
      return -1;
    }

    // 2. Second priority: Biology marks
    if (b['biology marks'] > a['biology marks']) {
      return 1;
    }
    if (b['biology marks'] < a['biology marks']) {
      return -1;
    }

    // 3. Third priority: Date of birth (ascending order)
    const aDob = new Date(a['date of birth'].split('-').reverse().join('-'));
    const bDob = new Date(b['date of birth'].split('-').reverse().join('-'));
    if (bDob > aDob) {
      return -1;
    }
    if (bDob < aDob) {
      return 1;
    }

    // If all else fails, maintain the original order
    return 0;
  });

  return students;
}

// Example usage:
const students = [
  {name: 'John', 'chemistry marks': 85, 'biology marks': 90, 'date of birth': '01-01-2000'},
  {name: 'Jane', 'chemistry marks': 90, 'biology marks': 80, 'date of birth': '02-01-2000'},
  {name: 'Alice', 'chemistry marks': 80, 'biology marks': 90, 'date of birth': '01-01-2000'},
  {name: 'Bob', 'chemistry marks': 80, 'biology marks': 90, 'date of birth': '02-01-2000'},
];
console.log(sortStudents(students));

