let btn=document.getElementById("btn");
btn.addEventListener("click" , ()=>{
    let inp=document.getElementById("inp").value;
    for(let i=1;i<inp;i++){
        if (i % 15 == 0) document.write("FizzBuzz"+"<br>");
        else if (i % 3 == 0) document.write("Fizz"+"<br>");
        else if (i % 5 == 0) document.write("Buzz"+"<br>");
        else document.write(i+"<br>");
    }
} )