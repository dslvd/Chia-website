let counter = document.querySelector('h1');
let count = 5;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 1) location.replace('https://discord.gg/MKXzrb8wfN')
    
},9000)
