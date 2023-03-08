document.body.style.display = "none";
const wf = {
  defaults: {
    s5: 2000, //Screen size 5 width in pixels
    s4: 1500, //Screen size 4 width in pixels
    s3: 1000, //Screen size 3 width in pixels
    s2: 800, //Screen size 2 width in pixels
    s1: 400, //Screen size 1 width in pixels
    ms: "px", //Measurement system (pixels, ch, em, %, etc.)
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
      t.replace(/grid-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ", 1fr);}"
    );
  } else if (t.match(/^gridr-/gims)) {
    return (
      "." +
      t +
      "{display: grid; grid-template-rows: repeat(" +
      t.replace(/gridr-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ", 1fr);}"
    );
  } else if (t.match(/^gap-/gims)) {
    return (
      "." +
      t +
      "{grid-gap: " +
      t.replace(/gap-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ob.ms +
      ";}"
    );
  } else if (t.match(/^colgap-/gims)) {
    return (
      "." +
      t +
      "{column-gap: " +
      t.replace(/colgap-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ob.ms +
      ";}"
    );
  } else if (t.match(/^rowgap-/gims)) {
    return (
      "." +
      t +
      "{row-gap: " +
      t.replace(/rowgap-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ob.ms +
      ";}"
    );
  } else if (t.match(/^ecol-/gims)) {
    return (
      "." +
      t +
      "{grid-column: span " +
      t.replace(/ecol-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ";}"
    );
  } else if (t.match(/^erow-/gims)) {
    return (
      "." +
      t +
      "{grid-row: span " +
      t.replace(/erow-/gims, "").replace(/^(.*?)-(.*)/gims, "$1") +
      ";}"
    );
  } else if (t.match(/^hide/gims)) {
    return (
      "." +
      t +
      "{display: none;}"
    );
  }  else if (t.match(/^show/gims)) {
    return (
      "." +
      t +
      "{display: block;}"
    );
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
        if (classes[classc].match(/-s1/gims)) {
          wc1 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s2/gims)) {
          wc2 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s3/gims)) {
          wc3 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s4/gims)) {
          wc4 += match(classes[classc], obj);
        } else if (classes[classc].match(/-s5/gims)) {
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
      obj.s5 +
      "px){" +
      wc5 +
      "}" +
      wrenpm +
      obj.s4 +
      "px){" +
      wc4 +
      "}" +
      wrenpm +
      obj.s3 +
      "px){" +
      wc3 +
      "}" +
      wrenpm +
      obj.s2 +
      "px){" +
      wc2 +
      "}" +
      wrenpm +
      obj.s1 +
      "px){" +
      wc1 +
      "}";
    document.head.innerHTML +=
      "<style>" + wrencss.replace(/undefined/gims, "") + "<style>"; //replace is a spahgetti code fix for now until i figure out why its returning undefined
    document.body.style.display = "block";
  } else {
    console.error("No object specified for argument");
  }
}
