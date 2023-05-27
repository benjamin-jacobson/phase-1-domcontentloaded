// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let x = document.querySelector('#text')
    console.log(x.textContent)
    x.textContent = 'This is really cool!'
    
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  console.log(
    "Eat my shorts lol"
  );