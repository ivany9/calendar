//var define

var timeDisplayEl = $('#currentDay');
var calentime9= $('#hourday9');
var calentime10= $('#hourday10');
var calentime11= $('#hourday11');
var calentime12= $('#hourday12');
var calentime13= $('#hourday13');
var calentime14= $('#hourday14');
var calentime15= $('#hourday15');
var calentime16= $('#hourday16');
var calentime17= $('#hourday17');
var screencolors9 =$('#shour9');
var screencolors10 =$('#shour10');
var screencolors11 =$('#shour11');
var screencolors12 =$('#shour12');
var screencolors13 =$('#shour13');
var screencolors14 =$('#shour14');
var screencolors15 =$('#shour15');
var screencolors16 =$('#shour16');
var screencolors17 =$('#shour17');
var showt9=$('#tt9');
var showt10=$('#tt10');
var showt11=$('#tt11');
var showt12=$('#tt12');
var showt13=$('#tt13');
var showt14=$('#tt14');
var showt15=$('#tt15');
var showt16=$('#tt16');
var showt17=$('#tt17');
var time9;
var time10;
var time11;
var time12;
var time13;
var time14;
var time15;
var time16;
var time17;
var arraytime=[];
var screrencolor=[];







// main function
init();



function init()
{
    
  
  displayTime();
  timedefine();
  timestatus();
  savecal();
  render();
 

}
 // function to get  the time O'clock   using moment()
  function timedefine()
  { 
      
     time9=moment('9', "hh").format('LT');
     time10=moment('10', "hh").format('LT');
     time11=moment('11', "hh").format('LT');
     time12=moment('12', "hh").format('LT');
     time13=moment('13', "hh").format('LT');
     time14=moment('14', "hh").format('LT');
     time15=moment('15', "hh").format('LT');
     time16=moment('16', "hh").format('LT');
     time17=moment('17', "hh").format('LT');  

// save the time in an array to manipulate data
      arraytime=[time9,time10,time11,time12,time13,time14,time15,time16,time17];
      screencolor=[screencolors9,screencolors10,screencolors11,screencolors12,screencolors13,screencolors14,screencolors15,screencolors16,screencolors17];  
      console.log(screencolor);
      calentime9.text(time9);
      calentime10.text(time10);
      calentime11.text(time11);
      calentime12.text(time12);
      calentime13.text(time13);
      calentime14.text(time14);
      calentime15.text(time15);
      calentime16.text(time16);
      calentime17.text(time17);

      
    
  }

// function to  get the  current time and compare with the time in each row.
  function timestatus()
{
  

 

  console.log(arraytime[j]);
  var realtime= moment().format('LT'); 
  console.log(realtime);


  for(var j=0;j<arraytime.length;j++)
    {
    // add a class past
    if((moment(arraytime[j],'h:mma').isBefore (moment(realtime,'h:mma'))))  
      screencolor[j].addClass("past");
     
    else  if(arraytime[j]===realtime) 
    // add a class present  
      screencolor[j].addClass("present"); 
      else
       // add a class future
      screencolor[j].addClass("future");
    }
   
}

//function to save the information suing localStorage
function savecal(){

  $('#button9').click(function(){  

  var des9=$("#tt9").val();
  localStorage.setItem("text9",des9);
  
  });

  $('#button10').click(function(){  

    var des10=$("#tt10").val();
    localStorage.setItem("text10",des10);
    
    });

  $('#button11').click(function(){  

  var des11=$("#tt11").val();
  localStorage.setItem("text11",des11);
  
  });

  $('#button12').click(function(){  

    var des12=$("#tt12").val();
    localStorage.setItem("text12",des12);
    
    });
  
    $('#button13').click(function(){  
  
      var des13=$("#tt13").val();
      localStorage.setItem("text13",des13);
      
      });
  
    $('#button14').click(function(){  
  
    var des14=$("#tt14").val();
    localStorage.setItem("text14",des14);
    
    });
    
    
  $('#button15').click(function(){  

    var des15=$("#tt15").val();
    localStorage.setItem("text15",des15);
    
    });
  
    $('#button16').click(function(){  
  
      var des16=$("#tt16").val();
      localStorage.setItem("text16",des16);
      
      });
  
    $('#button17').click(function(){  
  
    var des17=$("#tt17").val();
    localStorage.setItem("text17",des17);
    
    });



}
//show the information that we got in the savecal function

function render()
{

 
  var tex9=localStorage.getItem("text9");
   showt9.text(tex9);
  
   var tex10=localStorage.getItem("text10");
   showt10.text(tex10);
  
   var tex11=localStorage.getItem("text11");
   showt11.text(tex11);
  
   var tex12=localStorage.getItem("text12");
   showt12.text(tex12);
  
   var tex13=localStorage.getItem("text13");
   showt13.text(tex13);
  
   var tex14=localStorage.getItem("text14");
   showt14.text(tex14);
  
   var tex15=localStorage.getItem("text15");
   showt15.text(tex15);
  
   var tex16=localStorage.getItem("text16");
   showt16.text(tex16);
  
   var tex17=localStorage.getItem("text17");
   showt17.text(tex17);
  




}






// function to show the day, month in the header

function displayTime() {
  var timeheader = moment().format('dddd,MMMM, Do');
  timeDisplayEl.text(timeheader);
  
}
