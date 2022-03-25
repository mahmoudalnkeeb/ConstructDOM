// import componants
import header from './header.js';
import footer from './footer.js';

//style
let containerStyle = `{
 width : 100% ;
 height : 100% ;
 background-color : #ecf0f1 ; 
 display : flex;
 align-items : center;
 justify-content : center;
 font-size: xx-large;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 text-transform: uppercase;
 font-weight:bold;
 color:#2c3e50
}`;

// container constructor
const contComponant = new Elem('div', 'container', 'container', containerStyle);
let container = contComponant.create();
contComponant.createContainer(container);

//append componants
container.appendChild(document.createTextNode('this is body'));
container.appendChild(header);
container.appendChild(footer);
