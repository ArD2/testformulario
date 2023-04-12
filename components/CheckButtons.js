export function CheckButtons(){
    var getSelectedValue1 = document.querySelector( 'input[name="pregunta1"]:checked'); 
    var getSelectedValue2 = document.querySelector( 'input[name="pregunta2"]:checked'); 
    var getSelectedValue3 = document.querySelector( 'input[name="pregunta3"]:checked'); 
    var getSelectedValue4 = document.querySelector( 'input[name="pregunta4"]:checked'); 
    var getSelectedValue5 = document.querySelector( 'input[name="pregunta5"]:checked');
    
    if(getSelectedValue1.value == "verdadero"){
        alert("Selected radio button values is: " + getSelectedValue1.value);  
    }else{
        alert("Selected radio button: " + getSelectedValue1.value);  
    }
    return getSelectedValue1.value
  }