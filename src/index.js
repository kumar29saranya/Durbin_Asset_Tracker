const checkbox = document.querySelector("#checkmode");
      const html = document.querySelector("html");

      const toggleDarkMode = function () {
        if(checkbox.checked)
        {html.classList.add("dark");
          document.getElementById("nav-tab").classList.add("bg-none")
        }
        else
        { html.classList.remove("dark");
        }
      }
      toggleDarkMode();
      checkbox.addEventListener("click",toggleDarkMode);

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("dark");
  
  var label=document.getElementById("mode-label")
  var prof_dropdown=document.getElementById("profile-dropdown");
  var notif_dropdown=document.getElementById("notification-content");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    //----Darkmode button
    label.innerHTML="Light Mode";
    label.classList.remove("bg-white");
    label.classList.add("bg-slate-500");
    label.classList.remove("text-slate-700");
    label.classList.add("text-slate-200");
    document.body.style.backgroundColor = "#232a3b";
    
    
  } else {
    //----Darkmode button
    label.innerHTML="Dark Mode";
    label.classList.remove("bg-slate-500");
    label.classList.add("bg-white");
    label.classList.remove("text-slate-200");
    label.classList.add("text-slate-700");
    document.body.style.backgroundColor = "#1e40af";
    
    
    
  }
}


function changeActiveTab(event,tabID)
{
    darkcheck=document.getElementById("checkmode")
    if(true)
    {
      let element = event.target;
      while(element.nodeName !== "A"){
        element = element.parentNode;
      }
      ulElement = element.parentNode.parentNode;
      aElements = ulElement.querySelectorAll("li > a");
      tabDisp=document.getElementsByClassName('tabList')
      
      for(let i = 0 ; i < aElements.length; i++)
      {
          aElements[i].classList.remove("text-white");
          aElements[i].classList.remove("text-base");
          aElements[i].classList.remove("underline");
          aElements[i].classList.remove("underline-offset-8");
          aElements[i].classList.add("text-slate-200");
          aElements[i].classList.add("text-sm");
          
        
          tabDisp[i].classList.add("hidden");
          tabDisp[i].classList.remove("block");
      }
      
      element.classList.remove("text-slate-200");
      element.classList.remove("text-sm");
      element.classList.add("text-white");
      element.classList.add("text-base");
      element.classList.add("underline");
      element.classList.add("underline-offset-8");
      
      document.getElementById(tabID).classList.remove("hidden");
      document.getElementById(tabID).classList.add("block");
      
      
    }
    
    
}

function change_text(text)
{
    document.getElementById("head-tab").innerHTML=text;
}
  
function display_column(name)
{
    document.getElementById(name).style.display="block";
}
function hide_column(name)
{
    document.getElementById(name).style.display="none";
}
var SelectText = new Array()
SelectText[0] = "Last Week";
SelectText[1] = "Last Month";
SelectText[2] = "Last Year";
SelectText[3] = "Cumulative";
function getUsageHrs(txt){
txtSelected = txt.selectedIndex;
document.getElementById('usage_hrs').innerHTML = SelectText[txtSelected];
}
function getActualHrs(txt){
  txtSelected = txt.selectedIndex;
  document.getElementById('actual_hrs').innerHTML = SelectText[txtSelected];
  }
  const data = {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: 3,
        y: 2
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      },  {
        x: 6,
        y: 0
      },{
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };
  const config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  };
  new Chart("myChart", config);

  /*function newDate(days) {
    return moment().add(days, 'd');
  }
  
  var config = {
    type: 'line',
    data: {
      labels: [newDate(-4), newDate(-3), newDate(2), newDate(3), newDate(4)],
      datasets: [{
        label: "My First dataset",
        data: [1, 3, 4, 2, 1],
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              
              'day': 'DD MM YYYY',
              
            }
          }
        }],
      },
    }
  };
  
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, config);*/
 
  
  /*const config = {
    type: 'scatter',
    data: {
      datasets: [{
        data: [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}]
      }]
    },
    options: {
      scales: {
          xAxes: {
              type: 'time',
              time: {
                  unit: 'day'
              }
          }
      }
    }
  };
  new Chart("myChart", config);*/


  function initMap() {
    
    const uluru = { lat: -25.344, lng: 131.031 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  function changeActiveTeleTab(event, tabID,tabName)
  {
        document.getElementById('tele-heading').innerHTML=tabName;
        element=event.target;
        tabSelected=document.getElementsByClassName("tele-tab");
        sectionDiv=document.getElementsByClassName("teleDiv");
        
        for(let i = 0 ; i < tabSelected.length; i++)
      {
        tabSelected[i].classList.remove("active");
        sectionDiv[i].classList.remove("block");
        sectionDiv[i].classList.add("hidden");        
      }
      element.classList.add("active");
      document.getElementById(tabID).classList.remove("hidden");
      document.getElementById(tabID).classList.add("block");
      
      if(tabID=='gps-tracker')
      {
          document.getElementById('gps-buttons').classList.remove("hidden");
          document.getElementById('gps-buttons').classList.add("block");

      }
      else
      {
        document.getElementById('gps-buttons').classList.remove("block");
        document.getElementById('gps-buttons').classList.add("hidden");
      }
  }
  function changeActiveDevEventsTab(event, tabID)
  {
        element=event.target;
        tabSelected=document.getElementsByClassName("dev-event");
        sectionDisp=document.getElementsByClassName("devEvents");
        for(let i = 0 ; i < tabSelected.length; i++)
      {
        tabSelected[i].classList.remove("active");
        sectionDisp[i].classList.remove("block");
        sectionDisp[i].classList.add("hidden");
                  
      }
      element.classList.add("active");
      document.getElementById(tabID).classList.remove("hidden");
      document.getElementById(tabID).classList.add("block");
  }
 
  function showDiv(newID, oldID)
  {
    document.getElementById(oldID).classList.remove("block");
    document.getElementById(oldID).classList.add("hidden");
    document.getElementById(newID).classList.remove("hidden");
    document.getElementById(newID).classList.add("block");
  }

  let modal = document.getElementById("my-modal");

   function openModal(nm) {
    modal.style.display = "block";
    document.getElementById(nm).style.display="block";
    }
    
    function closeModal(nm) {
    modal.style.display = "none";
    document.getElementById(nm).style.display="none"
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

    function commDetails(){
      var checkBox = document.getElementById("showComm");
      
      var content = document.getElementsByClassName("showOnComm");
      
      if (checkBox.checked == true){
        for(let i = 0 ; i < content.length; i++)
          {
            
            content[i].classList.remove("hidden");
                     
          }
      } 
      else {
        for(let i = 0 ; i < content.length; i++)
          {
            
            content[i].classList.add("hidden");
                      
          }
      }
    }

    new TomSelect("#select-state",{
      maxItems: 3
    });