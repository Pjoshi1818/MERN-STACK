let l = document.getElementById('box')
console.log(l);
l.id = "box1";
console.log(`   class name is  =  ${l.className}`);
l.className = "class1";
console.log(l.className)

console.log(l.style)
l.style.backgroundColor = " red"
l.style.borderRadius = "50%"
l.classList.add = "class2"
console.log(l.classList);