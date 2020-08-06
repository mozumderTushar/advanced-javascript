//truthy:
//"0", " ", []

//falsy:
//false
//0
//""
//undefined
//null
//NaN

let name = false;
if(name||name == 0){
    console.log('condition is true');
}else{
    console.log('condition is false');
}
