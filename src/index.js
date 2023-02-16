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
      
      tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
      for(let i = 0 ; i < aElements.length; i++)
      {
          aElements[i].classList.remove("text-white");
          aElements[i].classList.remove("text-base");
          aElements[i].classList.remove("underline");
          aElements[i].classList.remove("underline-offset-8");
          aElements[i].classList.add("text-slate-200");
          aElements[i].classList.add("text-sm");
          
        
          tabContents[i].classList.add("hidden");
          tabContents[i].classList.remove("block");
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