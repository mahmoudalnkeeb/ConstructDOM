//styles
const headerStyles = `{
 width : 100% ;
 height : 60px ;
 background-color : #2980b9 ;
 position:absolute;
 left:0;
 top :0;
 display : flex;
 align-items : center;
 justify-content : center;
 font-size: xx-large;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 text-transform: uppercase;
 color:#bdc3c7
 }`;

// create componant and it siblings
const Header = new Elem('div', 'header', 'header', headerStyles);
let header = Header.create();
header.appendChild(document.createTextNode('this is header'));

// export componant
export default header;
