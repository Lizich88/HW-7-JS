//#1
//  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i<20; i++) {
//         if(i%2===1){

//                 document.write(`${array[i]} <br>`);
//         }
// }


// //#2
// let longWords = ["Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia"]
// let longest = prompt("Ведите слова больше 10 букв или меньше ");
// for (let i = 0; i < longWords.length; i++) {
// if (longest < longWords[i].length) {
//     longest = longWords[i];
//   }
// }
// document.write(longest);

//#3
// let ar= ['Max', 'Janat', 'Elnura', 'Anara', 'Elzada', 'Saule', 'Yrys', 'Jiidegul'];

// 	for(let i=0;i<ar.length+1; i++){
// 		alert(`Удаляю пользователя ${ar[i]}`)
// 		let t=ar.slice(i,ar.length)

// 		document.write(t+"<br>");
// 	}

// // cамостаятельная работа
// //#1
// let incorrect = '';
// arr = prompt('Poly')
// let poly = arr;
        
// for(let i = 0; i<arr.length; i++){
//     incorrect+=arr[(arr.length-1)-i]
                
// }
// if (arr===incorrect){
// document.write('Polyndrom: ' + poly);
// }else{
// document.write('Is not polyndrom: ' + poly);
// }

// //#2
//  let doc = document.querySelector('.item')

// for(let i = 1; i <10; i++)
//     for (let j = 1; j < 10; j++){
    
//     document.write(`${i}*${j}=${i * j}<br>`);
// }


// 2 вариант 1го cамостаятельного  работы

// function poly(arr) {
//     let uncorrect = '';
// 	for(let i = 0; i<arr.length; i++){
// 		uncorrect+=arr[(arr.length-1)-i]
		
// 	}
// 	if (arr===uncorrect){
//         return ' Polyndrom ';
// 	}else{
//         return 'Is not polyndrom';
// 	}
// }

// document.write(poly('anna'), 'anna' + "<br>");
// document.write(poly('civic'), 'civic' + "<br>");
// document.write(poly('level'), 'level' + "<br>");
// document.write(poly('hanna'), 'hanna');


 
document.write("<h1>Таблица умножения</h1>"); 
 
for (let i = 0; i <=10; i++){  
document.write("<div style='float: left; width: 70px;'>"); 
for (let j = 0; j <=10; j++)  
{ 
document.write(`${i}*${j}=${i * j}<br>`); 
 
}  
document.write ("</div>"); 
 
} 
