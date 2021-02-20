var images = [
    "blob:https://web.whatsapp.com/76a6e194-fd0a-48d4-a1fa-44bf17ecbdf6";
    "https://web.whatsapp.com/fcb12577-e11b-4c05-9ea7-280633859e9f",
    "https://web.whatsapp.com/bd6a1980-41e7-49c6-8546-07bb93f104a7",
    "https://web.whatsapp.com/cd586c8f-a7ca-4330-bac3-9b3c65c0b99e",
    "https://web.whatsapp.com/5d13aa6c-d29d-4599-9af5-4b8986532d30"
  ];
  var names = [
      "Omprakash Gupta-My father",
      "Deepshikha Gupta-My Mom",
      "Saubhagya Raj Sharma-My grandpa",
      "Savita Sharma-My grandma",
      "Mohisha Gupta-Me"
  ];
  var i =0; 
  function nextslide(){
  document.getElementById("album").src = images[i];
  document.getElementById("Nametext").innerHTML = names[i]; 
    i++;
    if(i == 6){
     i=0;
    }
  }
  