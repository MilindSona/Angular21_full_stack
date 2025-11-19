function firstLetter(fName,mName,lName){
  var capname = fName.charAt(0).toUpperCase() + "-"  + mName.charAt(0).toUpperCase() + "-" + lName.charAt(0).toUpperCase();
console.log(capname);
}
firstLetter("Milind","Gopal","Sonawane");

var myDate=new Date();
console.log(myDate.getHours());