let  click1=0;
function changecolor() {

    var colorList = ['red','green','blue'];

    for (let i= 0; i<colorList.length; i++) {
        
        
        document.getElementById("div").style.backgroundColor = colorList[click1];
        
      if (click1==colorList.length) {
          click1=0;
          
      }
            
        }
        click1++;
       
    }
   


