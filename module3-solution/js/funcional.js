

/*var el_up = document.getElementById("GFG_UP"); 
            var el_down = document.getElementById("GFG_DOWN"); 
            var str = "Click on button to change the background color"; 
          
            el_up.innerHTML = str; */
          
            function changeColor(color) { 
                document.getElementById("elboton").style.borderColor = color;
                document.getElementById("iconouno").style.backgroundColor = color;
                document.getElementById("iconodos").style.backgroundColor = color;
                document.getElementById("iconotres").style.backgroundColor = color;
            } 
              
            function gfg_Run() { 
                if(document.getElementById("elboton").style.borderColor=="white"){
                changeColor('black'); }
                else 
                changeColor('white');

            }          