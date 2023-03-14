
 let arr1 = [3,7,34,90,12];
 let last = arr1[arr1.length -1];
console.log(last);

let arr2 = [true, "green", "where",12,56];
let lastElement = arr2[arr2.length -1];
console.log(lastElement);


const b =["Cow", "Bird", "Snake", "Dog"];
 let c = b.join()
 console.log(c)


var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr4 = arr3.sort((a,b)=>a-b);
console.log(arr4);
var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
            function remove(arr) {
                return arr.filter((fruit, 
                    dup) => arr.indexOf(fruit) !== dup);
            }
              
            console.log(remove(arr)); 
  
            function duplicate(arr){
              return arr.filter((currentValue,currentIndex) =>arr.indexOf(currentValue) !==currentIndex);

            }
            console.log(duplicate(arr));

        let k = ["the", "way", "x", 4] ; 
        let search = "we";
        if (k.includes(search)){
          console.log(search)
        }
 else{
  console.log("the search word was not found")
 }
  //Write a JS script to sort the following string
let word = "sevink"
let word2 = word.split('').sort().join('');
console.log(word2);


  