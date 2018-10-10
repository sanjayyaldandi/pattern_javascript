let type = process.argv[2];
let width = +process.argv[3];
let height = +process.argv[4];
let star = "*";
let space = " ";
let line = "";
let dash = "-";

if(type == "filled"){
  const filled = function(width,height){
    let outputFilled = "";
    let delimiter = "";
    for(let column=0;column<height;column++){
      for(let row=0;row<width;row++){
        line = line + star;
      }
      outputFilled = outputFilled + delimiter + line;
      delimiter = "\n";
      line = "";
    }
    return outputFilled;
  }
  let output = filled(width,height);
  console.log(output);
}

if(type == "empty"){
  const topLine  = function(width,height){
    let line = "";
    for(let row=0;row<width;row++){
      line = line + star;
    }
    return line
      line = "";
  }

  const middlePart = function(width,height){
    let line = "";
    let delimiter  = "";
    for(let column=0;column<(height-2);column++){
      line = line + delimiter + star;
      delimiter = "\n";
      for(let row=0;row<(width-2);row++){
        line = line + space;
      }
      line = line + star;
    }
    return line;
    line = "";
  }

  const lastLine = function(width,height){
    let line = "";
    for(let row=0;row<width;row++){
      line = line + star;
    }
    return line;
    line = ""
  }
  let outputTopLine = topLine(width,height);
  console.log(outputTopLine);

  let outputMiddlePart = middlePart(width,height);
  console.log(outputMiddlePart);

  let outputLastLine = lastLine(width,height);
  console.log(outputLastLine);
}

if(type == "alternating"){
  const alternating = function(width,height){
    let alternatingLine = "";
    let delimiter = "";
    for(let column=0;column<height;column++){
      if(column%2 == 0){
        for(let row=0;row<width;row++){
          line = line + star
        }
        alternatingLine = alternatingLine + delimiter + line;
        delimiter = "\n";
        line = "";
      } else {
        for(let row=0;row<width;row++){
          line = line + dash;
        }
        alternatingLine = alternatingLine + delimiter + line;
        delimiter = "\n";
        line = "";
      }
    }
    return alternatingLine;
  }
  let output = alternating(width,height);
  console.log(output);
}
