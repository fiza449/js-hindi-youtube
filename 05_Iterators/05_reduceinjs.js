const array1 = [1,2,3]

const sum = array1.reduce( (accumulator, currentValue) =>{
    //console.log(`acc: ${accumulator}, currentval: ${currentValue}`);
    return accumulator + currentValue;
}
,0); //initial value: 0(we can give other than 0 too the sum of array will be diff than)
//console.log(sum) // 6
  
/*
acc: 0, currentval: 1
acc: 1, currentval: 2
acc: 3, currentval: 3
*/

const shoppingcart = [
    {
        item : "JS course",
        price: 8765
    },
    {
        item : "python course",
        price: 8967
    },
    {
        item : "Data science course",
        price: 1340
    }
]

const total = shoppingcart.reduce( (acc,item) => {
      return acc+item.price
},0)
console.log(total) //19072