document.body.style.display = "none";
const wf = {
  defaults: {
    s5: 2000, //Screen size 5 width in pixels
    s4: 1500, //Screen size 4 width in pixels
    s3: 1000, //Screen size 3 width in pixels
    s2: 800, //Screen size 2 width in pixels
    s1: 400, //Screen size 1 width in pixels
    ms: "px", //Measurement system (pixels, ch, em, %)
  },
};

function match(t, ob) {
  if (t == "w") {
    return;
  } else if (t.match(/^grid-/gims)) {
    return (
      "." +
      t +
      "{display: grid; grid-template-columns: repeat(" +
      t.replace(/grid-/gims, "") +
      ", 1fr);}"
    );
  } else if (t.match(/^gridr-/gims)) {
    return (
      "." +
      t +
      "{display: grid; grid-template-rows: repeat(" +
      t.replace(/gridr-/gims, "") +
      ", 1fr);}"
    );
  } else if (t.match(/^gap-/gims)) {
    return "." + t + "{grid-gap: " + t.replace(/gap-/gims, "") + ob.ms + ";}";
  } else if (t.match(/^ecol-/gims)) {
    return "." + t + "{grid-column: span " + t.replace(/ecol-/gims, "") + ";}";
  } else if (t.match(/^erow-/gims)) {
    return "." + t + "{grid-row: span " + t.replace(/erow-/gims, "") + ";}";
  }
}

function wrender(obj) {
  if (obj) {
    var wrencss = "";
    var wcn = "";
    var wc1 = "";
    var wc2 = "";
    var wc3 = "";
    var wc4 = "";
    var wc5 = "";
    const wrens = document.querySelectorAll(".w");
    for (var wrenc = 0; wrenc < wrens.length; wrenc++) {
      var classes = wrens[wrenc].className.split(" ");
      for (var classc = 0; classc < classes.length; classc++) {
        if (classes[classc].match(/-s1/)) {
          wc1 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s2/)) {
          wc2 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s3/)) {
          wc3 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s4/)) {
          wc4 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s5/)) {
          wc5 += match(classes[classc], obj);
        } else {
          wcn += match(classes[classc], obj);
        }
      }
    }
    var wrenpm = "@media screen and (max-width:";
    wrencss =
      wcn +
      wrenpm +
      obj.s1 +
      "px){" +
      wc1 +
      "}" +
      wrenpm +
      obj.s2 +
      "px){" +
      wc2 +
      "}" +
      wrenpm +
      obj.s3 +
      "px){" +
      wc3 +
      "}" +
      wrenpm +
      obj.s4 +
      "px){" +
      wc4 +
      "}" +
      wrenpm +
      obj.s5 +
      "px){" +
      wc5 +
      "}";
    document.head.innerHTML += "<style>" + wrencss + "<style>";
    document.body.style.display = "block";
  } else {
    console.error("No object specified for argument");
  }
}
