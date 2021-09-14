//Buscar elementos en bas a un selector
console.log("Buscar elementos en bas a un selector");
var elementos = document.querySelectorAll('li');
console.log(elementos);

elementos[0].addEventListener('click', function(){
    console.log('click');
});

//Buscar elementos con una clase especifica
console.log("\n Buscar elementos con una clase especifica");
var heading = document.getElementsByClassName('heading');
console.log(heading);

//Buscar elementos por nombre de tag
console.log("\n Buscar elementos por nombre de tag");
var ul = document.getElementsByTagName('ul');
console.log(ul);

//Buscar elementos por ID
console.log("\n Buscar elementos por ID");
var principal = document.getElementById('principal');
console.log(principal);

//Manipular las clases de un elemento sin jQuery
console.log("\nManipular las clases de un elemento sin jQuery");
var h1 = document.querySelector('h1'),
         buton = document.querySelector('button'),
         boton2 = document.querySelector('boton2')

    //console.log(h1.classList);
    buton.addEventListener('click', function(){
        if(!h1.classList.contains('rojo')){
            h1.classList.add('rojo');
            h1.classList.remove('azul');
        }else { 
            h1.classList.add('azul');
            h1.classList.remove('rojo');
    };
    
});

boton2.addEventListener('click', function(){
    if(!h2.classList.contains('rojo')){
        h2.classList.add('rojo');
        h2.classList.remove('azul');
    }else { 
        h2.classList.add('azul');
        h2.classList.remove('rojo');
};

});

















































































































































































