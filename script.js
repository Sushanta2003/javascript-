// function first()
// {
//     let number = document.getElementById("num").value;
//     {
//         if (number < 0)
//              {
//     document.write("The givn number is negative!"+number)
// }
// else{
//     document.write("The givn number is positive!"+number)
// }

//     }

// }


// program to find the prime number less then 100
// let i;
// let n;

// for ( i=2 ; i<=100 ; i++)
// {
//     for ( n=1; n<=i ; n++)
//     {
//         if(i%n==0)
//         {
//             count++
//         }
//         if (count == 2)
//     {
//         document.write(i +"<br>")
//     }
//     } 
//     count = 0;
// }

// array
// array function
// push()
// pop()
// unshift()
// shift()
// indexof()
// include()

// let student = ["susan", "ram", "shyam", "neupane"];
// document.write(student.length);
// document.write("<br>"+ student[0]);
// student.push("neupane");
// document.write(" "+student[4]);
// student.pop();
// document.write(student[4]);
// student.unshift("<br>"+"neupane");
// document.write(student[0]);
// student.shift();
// document.write("<br>"+ student[0]);
// document.write(indexOf("susan"));  //number
// document.write(student.includes("susan"));  //boolean


// // write js to input any five students name and dsiplay on your browser

// let student  = [];
// for (let i = 0 ; i< 5 ; i++)
// {
//     let name = prompt ( "enter the name of student"+ (i+1)+ " ");
//     student.push(name);
// }
// for (i=0; i<student.length ; i++ )
// {
//     document.write(student[i] + "<br>");
// }

// enter any ten number and display in ascending order
// write js to enter n number and diaplay those number in ascendng order
// wajs to take 2 number for user and swap them

 let num = [];
    for(let i=0;i<10;i++)
    {
        let n = parseInt(prompt("Enter number" + (i+1)+ ":"));
        num.push(n);
    }
    for(i=0;i<num.length;i++)
    {
        for (let j=i+1;j<num.length;j++)
    {
        if (num[i]>num[j])
        {
            let temp = num[i];
            num [i] = num[j];
            num[j] = temp;
        }
    }
    }
    for(let i=0;i<num.length;i++)
    {
        document.write(num[i] );
        document.write(" ");

    }

    // write js to increase height and width while hovering 





