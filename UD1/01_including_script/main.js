alert("this alert box was called with the onload event")

function hello(name, surname, years){
    return `Hola ${name} ${surname}, tienes ${years} años de edad`
};

let result = hello('Clara', 'Alonso', 25);
if(result!="Hola Clara Alonso, tienes 25 años de edad"){
    console.log('test fail')
    
}
else{
    console.log('test OK')
}
