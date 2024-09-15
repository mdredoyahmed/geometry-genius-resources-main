function calculateTriangleArea(){
   // get traingel base value 
   const baseField = document.getElementById('triangle-base');
   const baseValueText =baseField.value ;
   const base = parseFloat(baseValueText);
   
    
   //get tringel height value 

   const heightField = document.getElementById ('triangle-height');
   const heightValueText = heightField.value ;
   const height = parseFloat(heightValueText);
   
   const area = 0.5  * base * height ;
  

   // show tringel aria 

   const tringelAria = document.getElementById('triangle-area');
   tringelAria.innerText = area ;

   addToCalculationEntry('Triangle',area);

}

function calculateRectangleArea(){

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value ;
    const witdh = parseFloat(widthValueText);

    console.log(witdh);

    //get rectangle length 

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value ;
    const length = parseFloat(lengthValueText);
    console.log(length);


    // valid inpute 

    if(isNaN(witdh) || isNaN(length)){
        alert('please insart a number ');
        return;
    }

    //calculate area 
    const area = witdh * length ;

    // show rectangla area 

    const rectanglaAreaSpan = document.getElementById('rectangle-area');
    rectanglaAreaSpan.innerText = area ;

    addToCalculationEntry('Rectangle',area);


}

// reusable function --> reduse duplication code 

function calculateParallelogramArea(){
  
   const base = getInputValue('parallelogram-base')
   const height = getInputValue('parallelogram-height');
  
   // validate 

   if(isNaN(base) || isNaN(height)){
    alert('please insart a number');
    return;
   }

   const area = base * height ;
   setElementInnerText('parallelogram-area',area) ;

   // add to calcualation entry

   addToCalculationEntry('parallelogram', area );

}




function calculateEllipseArea(){

   const majorRadius = getInputValue('ellipse-major-radius');
   const minarRadius = getInputValue('ellips-minor-radius');
   const area = 3.1416 * majorRadius * minarRadius ;
   const areaTwoDecimal = area.toFixed(2);
   setElementInnerText('ellips-area',areaTwoDecimal );

   addToCalculationEntry('Ellipse',areaTwoDecimal );


}

//reusable get input value field in number 

function getInputValue(fieldId){

    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value ;
    const value = parseFloat(inputValueText);
    return value ;



}

// reusable set span p div etc text 

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry 

/* 
1. get the element where you want to add the dynamic html 
2. crecet an element you want to add 
3. if needed add some class 
4. set inneer html it could be dynamic template string 
5. append the crected element as a chaild of the parent   



*/

function addToCalculationEntry(areaType , area){
    
    console.log(areaType+ ' ' + area )
    const calcualationEntry = document.getElementById('calculation-entry');
    const count = calcualationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count +1}. ${areaType} ${area} cm <sup>2</sup> <button class ="btn btn-sm btn-success ">convert</button>`  ;

    calcualationEntry.appendChild(p);


}


// Data validation 
/* 
1. set the proper type of the inpute field (number data email)
2. check type using typeof 
3. NaN means : not a number . isNaN is checking weather the inpute is not a number or not    


*/