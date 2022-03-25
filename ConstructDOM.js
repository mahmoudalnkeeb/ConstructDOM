/* 
THIS => CONSTRACTOR FUNCTION TAKE 4 PARAMETERES 
type => WHICH IS THE TAG NAME 
className => WHICH IS ELEMENT CLASS
id => WHICH IS ELEMENT ID 
styles => WHICH IS ELEMENT STYLING
*/

class Elem {
  constructor(type, className, id, styles) {
    this.styles = styles;
    this.classN = className;
    this.type = type;
    this.id = id;

    // CREATE ELEMENT METHOD
    this.create = function () {
      // CREATE ELEMENT NODE 

      let element = document.createElement(`${this.type}`);
      element.id = this.id;
      element.className = this.classN;

      // ADD ALL STYLES TO STYLE TAG IF EXISTS OR CREATE IT FIRST IF NOT
      let styles = document.querySelector('head>style');
      if (!styles) {
        styles = document.createElement('style');
        document.head.appendChild(styles);
      }

      // TURN STYLES TO CSS SYNTAX
      let selector = `.${this.classN}`;
      const elementStyles = document.createTextNode(`${selector}${this.styles}`);
      styles.appendChild(elementStyles);

      // RETURN CREATED NODE
      return element;
    };

    // APPEND CONTAINER NODE TO BODY METHOD
    this.createContainer = function (containerElement) {
      return document.body.appendChild(containerElement);
    };

  }
}
