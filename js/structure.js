let pageLink=document.getElementById('navbar');
let main=document.getElementById('main');
let currentStyle = null;
let currentScript = null;

pageLink.addEventListener('click',function(e){
    e.preventDefault();
    let page;
      let cssFile;
      let jsFile;
   switch(e.target.textContent.trim()){
    case "الصفحة الرئيسية":
        page="../home.html";
        cssFile = "../css/home.css";
        jsFile="../js/home.js";
        break;
    case "من نحن":
        page="../about.html";
         cssFile = "../css/about.css";
          jsFile="../js/about.js";
        break;
    case "انشطتنا":
        page="../activitis.html";
         cssFile = "../css/activitis.css";
         jsFile="../js/activitis.js";
        break;
    case "اعضاؤنا":
        page="../membres.html";
        cssFile = "../css/membres.css";
        jsFile="../js/membres.js";
        break;
    case "اتصل بنا":
        page="../contact.html";
         cssFile = "../css/contact.css";
         jsFile="../js/contact.js";
        break;
      
   }
   fetch(page)
   .then(response=> response.text())
   .then(data=>{
       main.innerHTML=data;
         if(currentStyle && currentScript) {
             currentStyle.remove();
             currentScript.remove();
             
        }
           const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = cssFile;
        document.head.appendChild(style);
        currentStyle = style;

        const script=document.createElement('script');
        script.src=jsFile;
        document.body.appendChild(script);
        currentScript = script;
       
}
    
   )
   .catch(error=>console.log(error))
})