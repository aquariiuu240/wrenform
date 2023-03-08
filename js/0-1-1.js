document.body.style.display = "none"
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
  const wrens = document.querySelectorAll(".w");
  for(var wrenc = 0; wrenc < wrens.length;wrenc++){
    var classes = wrens[wrenc].className.split(' ');
    for(var classc = 0; classc < classes.length; classc++){
      if(classes[classc] == "w"){
    
      }else if (classes[classc].match(/^grid-/gims)){
        wrencss += "." + classes[classc] + "{display: grid; grid-template-columns: repeat(" + classes[classc].replace(/grid-/gims, "") + ", 1fr);}";
      }else if (classes[classc].match(/^gap-/gims)){
        wrencss += "." + classes[classc] + "{grid-gap: " + classes[classc].replace(/gap-/gims, "") + "px;}";
      }else if (classes[classc].match(/^ecol-/gims)){
        wrencss += "." + classes[classc] + "{grid-column: span " + classes[classc].replace(/ecol-/gims, "") + ";}";
      }else if (classes[classc].match(/^erow-/gims)){
        wrencss += "." + classes[classc] + "{grid-row: span " + classes[classc].replace(/erow-/gims, "") + ";}";
      }
    }
  }
  document.head.innerHTML += "<style>" + wrencss + "<style>"
  document.body.style.display = "block"
}
