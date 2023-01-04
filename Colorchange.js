function colorchange()

        {

          var red=document.getElementById('red').value;   

         var green=document.getElementById('green').value;

       var blue=document.getElementById('blue').value;

       

       document.querySelector('h1').style.color='RGB('+red+','+green+','+blue+')';

       document.querySelector('.out').style.background='RGB('+red+','+green+','+blue+')';

       document.querySelector('.rgb_value').innerHTML='RGB('+red+','+green+','+blue+')';

       

        }

      

