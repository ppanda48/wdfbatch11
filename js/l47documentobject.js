let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL; // file:///C:/Users/D%20E%20L%20L/Documents/wdfbatch11/l47documentobject.html*

val = document.links; // HTMLCollection
val = document.links[0];
val = document.links[3]; // <a href="#" id="delete-item4" class="deleteitem" title="iamtitle" alt="iamalt"> <i class="fas fa-trash-alt"></i> "delete"</a>
val = document.links[3].id; // delete-item4
val = document.links[5].id; // clearall

val = document.links[3].className; // delete-item myitem
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0]; // delete-item
val = document.links[3].classList[1]; // myitem


val = document.forms; // HTMLCollection
val = document.forms[0];
val = document.forms[0].id; // form
val = document.forms[0].className; // form
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action; // file:///C:/Users/D%20E%20L%20L/Documents/wdfbatch11/l47documentobject.html*
val = document.forms[0].method; // get

val = document.images; // HTMLCollection
val = document.images[0]; // <img src="https://i.gifer.com/ZKZg.gif" id="loading" class="loading" alt="loader">
val = document.images[0].id;
val = document. images[0].className;
val = document. images[0]. classList;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;

val = document.scripts; // HTMLCollect:
val = document.scripts[0]; // <script
val = document.scripts[0].src;
val = document.scripts[0].type;

// console.log(val);

// => Change Styling
document.getElementById('tasktitle').style.backgroundColor = "green";
document.getElementById('tasktitle').style.color = "#fff";
document.getElementById('tasktitle').style.padding = "5px";


// => Change Content
// document.getElementById('tasktitle').textContent="My Job";
// document.getElementById('tasktitle').innerText="My Tasks";
document.getElementById('tasktitle') .innerHTML="<span style='color:yellow;'>My Todo</span>";


// Call by Class Name (Class)

const lis = document.getElementsByClassName('list-group-item');
// console.log(lis); // HTMLCollection
// console.log(lis[2]);

// lis[2].style.color = "blue"
// lis[2].textContent = "How to visit";
// lis[2].innerText = "How to cook";
// lis[2].innerHTML = "How to read <a href='#'id='delete-item4 class='deleteitem myitem' title='iamtitle' alt='iamalt> <i class='fas fa-trash-alt'></i> delete </a>";


// => Call by Tag Name (Element)

const litags = document.getElementsByTagName('li');
// console.log(litags);
// console.log(litags[1]);

// litags[1].style.color = "red";
// litags[1].innerHTML = "Have to cook <a href='#'id='delete-item2' class='deleteitem' title='iamtitle' alt='iamalt> <i class='fas fa-trash-alt'></i> delete </a>";

// id ele 
// class htmlcol 
// tag htmlcol 


// => Query Selector

// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h3'));

// console.log(document.querySelector('li')); // only first li
// console.log(document.querySelector('.list-group-item')); // only first li


// console.log(document.querySelector('li').style.color = "blue");
// console.log(document.querySelector('ul li').style.color = "violet");
// console.log(document.querySelector('ul li:nth-child(odd)').style.color = "gray");
// console.log(document.querySelector('ul li:nth-child(even)').style.color = "silver");
// console.log(document.querySelector('ul li:last-child').style.color = "green");
// console.log(document.querySelector('ul li:last-of-type').style.color = "orange");
// console.log(document.querySelector('ul li:nth-of-type(4)').style.color = "steelblue");


// => Query Selector All

// console.log(document.querySelectorAll('#tasktitle')); // NodeList
// console.log(document.querySelectorAll('#tasktitle')[0]);


// console.log(document.querySelectorAll('.card-title')); // NodeList
// console.log(document.querySelectorAll('.card-title')[0]);

// console.log(document.querySelectorAll('li')); // NodeList
// console.log(document.querySelectorAll('li')[2]);

// console.log(document.querySelectorAll('.list-group-item')); // NodeList
// console.log(document.querySelectorAll('.list-group-item')[3]);


const listitems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listitems); // HTMLCollection(5)
// console.log(typeof listitems); // object
// console.log(listitems[1]);

const arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem){
//     console.log(arritem);
// });


const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(listitms); // NodeList(5)
// console.log(typeof listitms); // object
// console.log(listitms[1]);


// listitms.forEach(function(listitm,idx){
//     // console.log(listitm);

//     // listitms.innerText = ` Hello World`;
//     listitm.innerText = `${++idx} Hello World`;
// })

const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds);

const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens);

lisodds.forEach(function(lisodd){
    lisodd.style.backgroundColor = "gray";
});

// lisevens.forEach(function(liseven){
//     liseven.style.backgroundColor = "orange";
// });

for(let i=0; i < lisevens.length;i++){
    // console.log(i); // 0 1
    lisevens[i].style.backgroundColor = "silver";
}


let getli = document.querySelector('ul li');
    getli = document.querySelector('li.list-group-item');
    getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

let chl;
let getul = document.querySelector('ul.list-group');
// console.log(getul);

chl = getul.children; // HTMLCollection(5)
// console.log(chl);
// console.log(chl[2]);

// chl[1].textContent = "Have to go";
// getul.children[3].innerText = "Have to go";
getul.children[4].innerHTML = "Have to cook <a href='#'id='delete-item5' class='deleteitem' title='iamtitle' alt='iamalt> <i class='fas fa-trash-alt'></i> delete </a>";



// => Parent to Children to Children

chl = getul;
chl = getul.children; // HTMLCollection
chl = getul.children[0];
chl = getul.children[0].children; // HTMLCollection

    // ul    li             a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList; // DOMTokenList
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

    // ul    li             a
chl = getul.children[0].children[0].children; // HTMLCollection
    // ul    li             a           i
chl = getul.children[0].children[0].children[0];

// console.log(chl);


// => Child Element Count
chl = getul.children.length; // 5
chl = getul.childElementCount; // 5

chl = getul.children[0].childElementCount; // 1
chl = getul.children[0].children[0].childElementCount; // 1

// console.log(chl);

// => Children to Parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getfirstli);
                // li       ul
let getparent = getfirstli.parentElement;
                // li       ul              div.card-footer
    getparent = getfirstli.parentElement.parentElement;
                // li       ul              div.card-footer   div.card
    getparent = getfirstli.parentElement.parentElement.parentElement;

// console.log(getparent);


// => Next Element Sibling

let getsibling = getfirstli;
            //li1           li2
getsibling = getfirstli.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
            // li1          li2             li3                li4                          li5             null
getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(getsibling);


// => Previous Element Sibling
                // li1  li2                     li3             li2
getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(getsibling);


// Create Element

const newli = document.createElement('li');


// => Add ID
newli.id = "new-item";

// => Add Class
// newli.className = "list-group-item";
// newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add('delete-i');
newli.classList.add('delete-you');
newli.classList.add('delete-we',"delete-your","delete-us");

// console.log(newli);

// => Add Attribute
// setAttribute(attrname, value);
newli.setAttribute('title', 'newitem');

// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = "List Item 6 <a href='#'id='delete-item6' class='deleteitem' title='iamtitle' alt='iamalt> <i class='fas fa-trash-alt'></i> delete </a>";


// const newtext = document.createTextNode("Hello World");
// console.log(newtext);
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode('Hello Thailand'));

const newlink = document.createElement('a');
newlink.href = "#";
newlink.id = "delete-item6";
// newlink.className = "delete-item";
newlink.classList.add('delete-name');
// newlink.innerText ="delete";


const newitalic = document.createElement('i');
newitalic.classList.add('fas','fa-trash-alt');

// console.log(newitalic);

newlink.appendChild(newitalic);
// console.log(newlink);

newlink.appendChild(document.createTextNode('delete'));

newli.appendChild(newlink);
// console.log(newli);

console.log(newli);



// => Replace Element
// replaceChild(new,old)

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4);

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My List");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const getcardfooter = document.querySelector('.card-footer');
// console.log(getcardfooter);
getcardfooter.replaceChild(newtitleh2,oldtitleh4);



// => Remove Element (self)

const getlis = document.querySelectorAll('li'); // Node List
// console.log(getlis);

// getlis[0].remove(); //li1
// getlis[1].remove(); // li 2

// console.log(getlis.length);// 6



// => Remove Child Element

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// console.log(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[2]);
// getfirstul.removeChild(getfirstul.children[1]);



// => Attribute

const firstli = document.querySelector('li');
console.log(firstli);
const firlichild = firstli.children[0];
console.log(firlichild);
console.log(firlichild.id);
console.log(firlichild.href);
console.log(firlichild.alt); // undefined
console.log(firlichild.title); // iamtitle
console.log(firlichild.getAttribute('href')); // #
console.log(firlichild.getAttribute('id')); // delete-item1
console.log(firlichild.getAttribute('alt')); // iamalt
console.log(firlichild.getAttribute('title')); // iamtitle

let hasatt = firlichild.hasAttribute('href');
console. log(hasatt); // true


// => className VS classList
// console.log(firlichild.className); //delete-item
// firlichild.className = "delete-myself";
// firlichild.className = "delete-item delete-myself";
// firlichild.className = "delete-item delete-myself delete-ourserve";
// firlichild.className = "delete-item delete-ourserve";

// console.log(firlichild.classList); // DOMTokenList
// console.log(firlichild.classList[0]); // delete-item
// console.log(firlichild.classList[1]); // undefined

firlichild.classList.add("delete-myself");
firlichild.classList.add("delete-ourserve", "delete-us", "delete-yourself");

firlichild.classList.remove("delete-us");
// firlichild. classList.remove("delete-ourserve","delete-yourself");

console.log(firlichild);
console.log(firlichild.className);

if(firlichild.className === "delete-item delete-myself"){
    console.log("Yes");
}else{
    console.log("No");
}

if(firlichild. classList.contains('delete-ourserve')){
    console.log("Yes");
}else{
    console.log("No");   
}



// => addEventListener(eventtype, callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

// Method 1
// clearbtn.addEventListener('click', function(e) {
//     // console.log("i am working");

//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // console.log(e.target.classList[0]);

//     // console.log(this);
//     // console.log(this.id);

//     e.preventDefault();
// });


// Method 2
clearbtn.addEventListener('click',myclick);

function myclick(e){
    e.preventDefault();

    // console.log('hello');
    // console.log(e.target)

    // console.log(this);
    // console.log(this.id);

    // e.target.innerText = "Finished";
    // this.innerText = "Done";

    // Coordinate Event - relative to the element
    // console.log(e);
    // const offsetx = e.offsetX;
    // const offsety = e.offsetY;
    // console.log(offsetx,offsety);

}

// => Mouse Event ( Pointer Event )

const clbtn = document.querySelector('.clear-tasks');

// Single Click
// clbtn.addEventListener('click',mouseeventtype) ;

// Double Click
clbtn.addEventListener('dblclick',mouseeventtype);

function mouseeventtype(e){
    console.log('i am working');
    console.log(`Event type = ${e.type}`);

    e.preventDefault();
}


const card = document.querySelector('.card');


// Mouse Enter
// card.addEventListener('mouseenter',mouseeventtype);

// Mouse Over ( element to element )
// card.addEventListener('mouseover',mouseeventtype);

// Mouse Leave
// card.addEventListener('mouseleave',mouseeventtype);

// Mouse Out
// card.addEventListener('mouseout',mouseeventtype);

// Mouse Move
// card.addEventListener('mousemove',mouseeventtype);

// function mouseeventtype (e) {
//     // console.log('i am working');
//     // console.log(`Event type = ${e.type}`);

//     headingh2.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;

//     document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.clientX},0.5)`

//     e.preventDefault();
// }



// submit

const getform = document.querySelector('.form');

getform.addEventListener('submit',function(e){
    // console.log(`Event type = ${e.type}`);

    e.preventDefault();
});



// => Input Event ( Keyboard Event )

const getinput = document.querySelector('#task');

// keydown
// getinput.addEventListener('keydown',inputeventtype);
// keypress
// getinput.addEventListener('keypress',inputeventtype);

// keyup
// getinput.addEventListener('keyup',inputeventtype);
// input
// getinput.addEventListener('input',inputeventtype);

// focus
// getinput.addEventListener('focus',inputeventtype);

// blur
// getinput.addEventListener('blur',inputeventtype);

// cut (ctrl+x)
// getinput.addEventListener('cut',inputeventtype);

// copy
// getinput.addEventListener('copy',inputeventtype);

// paste (ctr+v)
getinput.addEventListener('paste',inputeventtype);


function inputeventtype(e){
    // console.log(e.target);
    // console.log(this);
    
    console.log(`Event type = ${e.type}`);

    console.log(e.target.value);
    console.lod(this.value);
    console.lod(getinput.value);
}



const ctitle = document.querySelector('.card-title').addEventListener('click',function(){
    console.log('i am card-title');
});

const cheader = document.querySelector('.card-header').addEventListener('click',function(){
    // console.log('i am card-header');
});

const ccard = document.querySelector('.card').addEventListener('click',function(){
    // console.log('i am card');
});


// => Event Delegation

const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeletitem);

getdeleteitem.addEventListener('click',function(e){
    console.log('i am delete item');

    // console.log(e.target); // a tag
    console.log(this); // i tag
})



// 

document.body.addEventListener('click',eventdeleg);

function eventdeleg(e){
    // console.log(e.target);

    // console.log(e.target.className);

        // i    
    // if(e.target.className === "fas fas-trash-alt"){
    //     console.log('i am working , i am trash');
    // }

                    // i    a
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.className);

            // i    a
    // if(e.target.parentElement.className === "delete-item"){
    //     console.log('i am working , i am a tag');
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        console.log('i am working , i am a tag');

            // i
        // e.target.remove();

            // i    a
        e.target.parentElement.remove();

        // i        a           li
        e.target.parentElement.parentElement.remove();
    }

}



document.querySelector('#form').addEventListener('submit', function(e){

    e.preventDefault();
    // console.log('i am working');
    
    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    let alltasks;

    if(localStorage.getItem('mytasks') === null) {
        alltasks = [];
    }else{
        alltasks = JSON.parse(localStorage.getItem('mytasks'));
        // console.log(alltasks) ;
        // console.log(typeof alltasks);

        alltasks.push(getnewtask); // [have to go, have to cook]
        localStorage.setItem('mytasks',JSON.stringify(alltasks));
    }

    // console.log(alltasks)
    
});

// BROKEN PIECE OF 
    

