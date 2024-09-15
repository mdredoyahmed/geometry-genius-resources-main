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

   console.log(tringelAria);
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

    //calculate area 
    const area = witdh * length ;

    // show rectangla area 

    const rectanglaAreaSpan = document.getElementById('rectangle-area');
    rectanglaAreaSpan.innerText = area ;

}

// reusable function --> reduse duplication code 

function calculateParallelogramArea(){
  
   const base = getInputValue('parallelogram-base')
   

   const height = getInputValue('parallelogram-height');
  

  
   const area = base * height ;
   
   setElementInnerText('parallelogram-area',area) ;
}




function calculateEllipseArea(){

   const majorRadius = getInputValue('ellipse-major-radius');
   const minarRadius = getInputValue('ellips-minor-radius');
   const area = 3.1416 * majorRadius * minarRadius ;
   setElementInnerText('ellips-area',area);


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