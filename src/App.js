import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //Logic for converting roman numeral to number  
  convertToRoman(num) {
    var current;
    var arrayToString = [];
    
    var convert = {I:1,
        V:5, 
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000};
    
        var howManyI;
        var howManyV;
        var howManyX;
        var howManyL;
        var howManyC;
        var howManyD;
        var howManyM;
    
    
        function howMany(letter){
            var howManyOfLetter = Math.floor(current/(convert[letter]));
           
            return howManyOfLetter;
            }
    
            current = num;
    
    function thousands(numM){
        var stringM="";
    
        if (numM === 0){
            return stringM;
        }
        for (let i = 0; i<numM; i++){
            stringM = stringM + "M";
    }
    return stringM;
    }
    
    function fiveHundreds(numD){
        var stringD="";
        if(numD===1){
            stringD = "D";
        }
        return stringD;
    }
    
    function hundreds(numC){
        var stringC="";
    
        if (numC === 0){
            return stringC;
        
    
        }
        for (let i = 0; i<numC; i++){
            stringC = stringC + "C";
    
            if(numC === 4){
                stringC="CD"
                return stringC;
            }
    
    }
    return stringC;
    }
    
    function fifties(numL){
        var stringL="";
        if(numL===1){
            stringL = "L";
        }
        return stringL;
    }
    
    function tens(numX){
        var stringX="";
    
        if (numX === 0){
            return stringX;
        
    
        }
        for (let i = 0; i<numX; i++){
            stringX = stringX + "X";
    
            if(numX === 4){
                stringX="XL"
                return stringX;
            }
    
    }
    return stringX;
    
    }
    
    function fives(numV){
        var stringV="";
        if(numV===1){
            stringV = "V";
        }
        return stringV;
    }
    
    function ones(numI){
        var stringI="";
    
        if (numI === 0){
            return stringI;
        
    
        }
        for (let i = 0; i<numI; i++){
            stringI = stringI + "I";
    
            if(numI === 4){
                stringI="IV"
                return stringI;
            }
    
    }
    return stringI;
    
    }
    
    
    
    
    
            
    
    howManyM = howMany("M"); 
    current = current - (howManyM)*convert["M"];
    
    howManyD = howMany("D"); 
    current = current - (howManyD)*convert["D"];
    
    howManyC = howMany("C"); 
    current = current - (howManyC)*convert["C"];
    
    howManyL = howMany("L"); 
    current = current - (howManyL)*convert["L"];
    
    howManyX = howMany("X"); 
    current = current - (howManyX)*convert["X"];
    
    howManyV = howMany("V"); 
    current = current - (howManyV)*convert["V"];
    
    howManyI = howMany("I"); 
    current = current - (howManyI)*convert["I"];
    
    
    arrayToString.push(thousands(howManyM));
    
    if(howManyD===1 & howManyC ===4){
    arrayToString.push("CM");
    }
    else{
    arrayToString.push(fiveHundreds(howManyD));
    arrayToString.push(hundreds(howManyC));
    }
    
    if(howManyL===1 & howManyX===4){
    arrayToString.push("XC");
    }
    else{
    arrayToString.push(fifties(howManyL));
    arrayToString.push(tens(howManyX));
    }
    
    if(howManyV===1 & howManyI===4){
    arrayToString.push("IX");
    }
    else{
    arrayToString.push(fives(howManyV));
    arrayToString.push(ones(howManyI));
    }
    
    return arrayToString.join("");
    }
    //Logic for converting number to roman numeral
    convertToArabicNum(romanstring){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    var convertToNum = {I:1,
        V:5, 
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000};
    
    function letterConverter(letter){
    
    return convertToNum[letter];
    }
    
    function toRomanLogicArray(stringToConvert){
    
        var arrayToAdd = []
    
        for (let i = stringToConvert.length-1;i>-1;i-=2){
    
            
    
            if (i==0){
                arrayToAdd.push(letterConverter(stringToConvert.charAt(i)));
    
                return arrayToAdd;
                }
    
            if (letterConverter(stringToConvert.charAt(i-1))>=letterConverter(stringToConvert.charAt(i))){
    
    arrayToAdd.push(letterConverter(stringToConvert.charAt(i-1))+letterConverter(stringToConvert.charAt(i)))
    
    
            }
    
            else {
    
                arrayToAdd.push(letterConverter(stringToConvert.charAt(i)) - letterConverter(stringToConvert.charAt(i-1)));
            }
    
        if (i==1){
            return arrayToAdd;
        }
    
        }
    
    }
    
    
    return toRomanLogicArray(romanstring).reduce(reducer);
    
    
    }
    
    
        
    constructor(props) {
      super(props);
      this.state = {romanText: '',
    numberText: '',
romanTextConverted: '',
numberTextConverted: ''};
  
      this.handleRomanChange = this.handleRomanChange.bind(this);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      
      /*this.handleSubmitToRoman = this.handleSubmitToRoman.bind(this);
      this.handleSubmitToArabic = this.handleSubmitToArabic.bind(this);
      */
    }
  
    handleRomanChange(event) {
      this.setState({romanText: event.target.value,
    numberTextConverted: this.convertToArabicNum(event.target.value)});
    }
    handleNumberChange(event) {
        this.setState({numberText: event.target.value,
        romanTextConverted: this.convertToRoman(event.target.value) });
      }
  /*
    handleSubmitToRoman(event) {
      alert('The roman numeral is: ' + this.convertToRoman(this.state.numberText));
      event.preventDefault();
    }

    handleSubmitToArabic(event) {
        alert('The Arabic number is: ' + this.convertToArabicNum(this.state.romanText));
        event.preventDefault();
      }
  */
    
    render() {
        return (
            <div>
          <form >
            <label>
              Roman Numeral:
              <input type="text" value={this.state.romanText} onChange={this.handleRomanChange} />
            </label>
            
          </form>
          
         <form>
          <label>
            Number:
            <input type="text" value={this.state.numberText} onChange={this.handleNumberChange} />
          </label>
        
        </form>
        <h1>The Arabic number is: {this.state.romanTextConverted}</h1>
        <h2>The roman numeral is:  {this.state.numberTextConverted}</h2>
        </div>
        );
      }
}


export default App;
