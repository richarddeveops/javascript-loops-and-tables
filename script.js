        // for(starting value; condition, steps,/iteration || decrement)
 /* for(let i = 0; i <=50; i++){
    // console.log(i);
    document.write(`<p>${i}</p>`)
}  */
 
    /* let show = document.getElementById('display')
    for (let i = 1; 1<=100; i++){
        // console.log(i);
        show.innerHTML += `<p>${i}</p>`
    }  */

          let show = document.getElementById('display')
        for(let i = 1; i<=100; i++){
            console.log(i);
            if(i%2 == 0){
                show.innerHTML += `<p style="color:white;">${i} This is an even number</p>`
            }else{
                show.innerHTML += `<p>${i} This is an odd number</p>`
            }
        }  

            //let userInput = document.getElementById('input').value.trim
            //let show = document.getElementById('display')
