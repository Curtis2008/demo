const num = [1, 2, 3, 34, 12, 50, 2, 1, 2, 6];
const sortedNums = num.sort((a, b) => a - b);
console.log(sortedNums);

//sorted objects
const objs1 = [
    {year: 2012, make: "Ford" },
    {year: 2017, make: "Porshe" },
    {year: 1999, make: "Volvo" },
    {year: 2022, make: "Chevy" },
];

const sortedObjs1 = objs1.sort((a, b) => a.year - b.year)
console.log(sortedObjs1);


const objs = [
    {year: 2012, make: "Ford" },
    {year: 2017, make: "Porshe" },
    {year: 1999, make: "Volvo" },
    {year: 2022, make: "Chevy" },
    {year: 2022, make: "Honda" },
    {year: 2022, make: "Kia" },
    {year: 2012, make: "Honda" },
];

const sortedObjs = objs.sort((a, b) => {
    const diffInYear = b.year - a.year;
    if (diffInYear === 0) {
        if (a.make > b.make) {
            return 1
        } else if (a.make < b.make) {
            return -1
        } else {
            return 0
        }
    }
    return diffInYear
});
console.log(sortedObjs);