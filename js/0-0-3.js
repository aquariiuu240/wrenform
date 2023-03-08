const wf = { defaults: {
  s5: 2000,
  s4: 1500,
  s3: 1000,
  s2: 800,
  s1: 400
}
}

function wrender(obj){
  var wrencss = "";
  const wrens = document.querySelector(".w");
  for(var wrenc = 0; wrenc < wrens.length;wrenc++){
    var classes = wrens[wrenc].className.split(' ');
    for(var classc = 0; classc < classes.length; classc++){
      if(classes[classc] == "w"){
        
      }else if (classes[classc].match(/^grid-/gims)){
        wrencss += "." + classes[classc] + "{grid-template-columns: repeat(" + classes[classc].replace(/grid-/gims, "") + ", 1fr)}";
      }
    }
  }
  document.head.innerHTML += "<style>" + wrencss + "<style>"
}
