let string ="";

let button = document.querySelectorAll(".buttons");

Array.from(button).forEach((buttons)=>{
     buttons.addEventListener('click',(x)=>{

          if(x.target.innerHTML == '='){
               try{
                    string= eval(string);
                    document.querySelector('#displayx').value = string;
               }
               catch{
                    document.querySelector('#displayx').value = 'Error';
                    string = "";
               }
          }
          else if(x.target.innerHTML == 'AC'){
               string="";
               document.querySelector('#displayx').value = string;
          }
          else if(x.target.innerHTML == '←'){
               string = string.slice(0,-1);
               document.querySelector('#displayx').value = string;
          }
          else{
          console.log(x.target);
          string += x.target.innerHTML;
          document.querySelector('#displayx').value = string;}
     })

})