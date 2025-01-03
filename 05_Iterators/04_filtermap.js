const coding = ["javascript","java","python","ruby","swift"];

const values = coding.forEach( (item)=> {
     //console.log(item)
    // return item
})
//console.log(values); undefined(we can't return using for each)

//that's why we use filter that returns the value 
//filter syntax : variable = name.filter(parameter) => condition

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => { // Jab ye {} lagate h to RETURN likhna mandatory h agr nhi likhe to [] ye o/p ayyega
     return num > 4;
})
//console.log(newNums)
//Can aslo be write as thus
const otherNums = myNums.filter( (num) => num > 7)
//console.log(otherNums)

//we can write this code using for..each too

const number = [];
myNums.forEach( (num) => {
    if(num > 4){
        number.push(num);
    }
});
//console.log(number);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //Applying filtering in database books to get specific books
let userBooks = books.filter((bk) => {
        return bk.genre === 'History';
  })

userBooks = books.filter( (bk) => {
      return bk.publish >=1995 && bk.genre==='History';
})
console.log(userBooks);