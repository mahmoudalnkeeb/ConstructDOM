//styles
const footerStyles = `{
 width : 100% ;
 height : 30px ;
 background-color : #34495e ;
 position:absolute;
 left:0;
 bottom :0;
 display : flex;
 align-items : center;
 justify-content : center;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 text-transform: uppercase;
 font-weight:100 !important;
 color:#ecf0f1;
 font-size: large;
 }`;

// create componant and it siblings
const Footer = new Elem('div', 'footer', 'footer', footerStyles);
const footer = Footer.create();
footer.appendChild(document.createTextNode('this is footer'));


// export componant
export default footer;
