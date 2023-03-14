function labels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
var ele1=document.createElement(tagname);
ele1.setAttribute(attrname,attrvalue);
ele1.setAttribute(attrname1,attrvalue1);
ele1.setAttribute(attrname2,attrvalue2);
return ele1;
}
function linebreak(tagname){
  var br=document.createElement(tagname);
  return br;
}

var firstname=labels("label","for","firstname","Firstname");
var br=linebreak("br");
var input=inputs("input","type","firstname","name","Firstname","id","firstname");
var br0=linebreak("br");
var middlename=labels("label","for","middlename","Middlename");
var br1=linebreak("br");
var input0=inputs("input","type","middlename","name","Middlename","id","middlename");
var br2=linebreak("br");
var lastname=labels("label","for","lastname","Lastname");
var br3=linebreak("br");
var input1=inputs("input","type","lastname","name","Lastname","id","lastname");
var br4=linebreak("br");
var email=labels("label","for","email","Email");
var br5=linebreak("br");
var input2=inputs("input","type","email","name","Email","id","email");
var br6=linebreak("br");
var password=labels("label","for","password","Password");
var br7=linebreak("br");
var input3=inputs("input","type","password","name","Password","id","password");
document.body.append(firstname,br,input,br0,middlename,br1,input0,br2,lastname,br3,input1,br4,email,br5,input2,br6,password,br7,input3);