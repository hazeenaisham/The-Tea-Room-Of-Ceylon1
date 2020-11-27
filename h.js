
const Name = document.getElementById("Name");
const Numberr = document.getElementById("Number");
const CN = document.getElementById("CN");
const CNU = document.getElementById("CNU");
const CustomerDetails = document.getElementById("CustomerDetails");
CustomerDetails.addEventListener("click",CDetails);
function CDetails(){
  CN.innerText=("Customer Name is : "+ Name.value); 
  CNU.innerText=("Customer Number is : "+ Numberr.value); 
}

var s1 = document.getElementById("s1");
var result = s1.options[s1.selectedIndex].value;
let cm=null;
let total=0;
const CM = document.getElementById("CM");
const COC = document.getElementById("COC");
let out=" ";
const Manufacturers = document.getElementById("Manufacturers");
Manufacturers.addEventListener("change",fbrand);
function fbrand(){
if (result=Dilma){
    cm=`Dilma`;
  total=1000;
}
if (result==Jones){
    cm=`Jones`;
    total=1500;
}
if (result===GeorgeSteuart){
    cm=`George Steuart`;
    total=1000;
}
if (result===MalwatteValleyPlantations){
    cm=`Malwatte Valley Plantations`;
    total=2000;
}
if (result===PrestigeCeylonTeas){
    cm=`Prestige Ceylon Teas`;
    total=1000;
}
if (result===EmpireTeas){
    cm=`Empire teas`;
    total=2000;
}
COC.innerText=`Current  Cost is  ${total}`;
CM.innerText=`The manufacturer selected is ${cm}. `;
out=out + " " + cm; 
}

var s2 = document.getElementById("s2");
var resu = s2.options[s2.selectedIndex].value;
let cs;

let y;
const CS = document.getElementById("CM");
const Size = document.getElementById("Size");
Size.addEventListener("click",fsize);
function fsize(){
if (resu===Small){
 cs=`Small`;
 y=1000;
}
if (resu===Medium){
cs=`Medium`;
y=2500;
}
if (resu===Large){
cs=`Large`;
y=5000;
}
total=total+y;
coc.innerText=`Current  Cost is  ${total}`;
CS.innerText= `The size is ${cs}.`;
}


let cp;
let z;
const Package = document.getElementById("Package");
const CP = document.getElementById("CP")
Package.addEventListener("click",fpackage);
function fpackage(){
if (document.getElementById("pouche").checked){
    cp=`Paper Pouches`
 z=1000;
}
if (document.getElementById("tin").checked){
    cp=`Tins`
z=5000;
}
if (document.getElementById("bag").checked){
    cp=`Bags`
 z=2500;
}
total=total+z;
COC.innerText=`Current  Cost is  ${total}`;
CP.innerText=`The package type is ${cp}.`
}


let mug=0;
let pin=0;
let souvenir=0;
let ttotal=0;
const Extra = document.getElementById("Extra");
Extra.addEventListener("click",fextra);
function fextra(){
  if (document.getElementById("Mug").checked==true){
    mug=500;
  }
  else{
    mug=0;
  }
  if (document.getElementById("SilverPin").checked==true){
    pin=1000;
  }
  else{
    pin=0;
  }
  if (document.getElementById("WoodenSouvenir").checked==true){
    souvenir=1500;
  }
  else{
    souvenir=0;
  }
  total=total+mug+pin+souvenir;
  COC.innerText=`Current  Cost is  ${total}`;
  ttotal=ttotal+total;
}





const PlaceOrder = document.getElementById("PlaceOrder");
PlaceOrder.addEventListener("click",forder)
function orforderder(){
 alert("Thank you for your purchase.Please visit us again"); 
CN.innerText=null; 
CNU.innerText=null;
CM.innerText=null; 
CS.innerText=null;
CP.innerText=null;
COC.innerText=`0`;
OOC.innerText=`0`;
OO.innerText=null;
}

const AddToOrder = document.getElementById("AddToOrder");
let count=0;
const OOC= document.getElementById("OOC");
const OO = document.getElementById("OO");
AddToOrder.addEventListener("click",foverall);
function foverall(){
count=count+1;
OO.innerText=`The tea manufacturers ordered are ${out}`
OOC.innerText=`Overall Cost is ${ttotal}`
}



const AddToFav= document.getElementById("AddToFav");
const OrderFav = document.getElementById("OrderFav");
AddToFav.addEventListener("click",fadd);
let sjson;
function fadd(){
    const entry={
      "Name":Name.value,
      "Numberr":Numberr.value,
      "cm":cm,
      "cp":cp,
      "cs":cs,
      "total":total,
    };
    localStorage.setItem('sjson',JSON.stringify(entry));
  }

  OrderFav.addEventListener("click",fshow);
function fshow(){
pjson=JSON.parse(localStorage.getItem('sjson'));
COC.innerText="The cost is "+pjson.total;
CN.innerText=pjson.Name ;
CNU.innerText= pjson.Number;
CNU.innerText=  pjson.cm;
CNU.innerText= pjson.cp;
CNU.innerText= pjson.cs;
}


let loyalty=0;
const LP=document.getElementById("LP");
const CheckLoyalty=document.getElementById("CheckLoyalty");
CheckLoyalty.addEventListener("click",floyalty);
function floyalty(){
if (count>3){
  loyalty=count*20;
LP.innerText=`The loyalty points is : ${loyalty}`
}
else{
 LP.innerText=`0`;
}
}





