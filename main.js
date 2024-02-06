
//Typing Effect
var typed = new Typed(".text", {
    strings: ["Java Developer", "Frontend Developer", "Backend Developer" ,"Full-Stack Developer", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

//When click On Logo Window Refresh
let logo = document.querySelector(".logo");
logo.addEventListener("click", ()=>{ 
    window.location.reload()
});

//icons Redurect to My Social Media Handel
let linkDin = document.getElementById("Linkdin");
let Mail = document.querySelector("#Mail");
let Github = document.querySelector("#Github");
let Twitter = document.querySelector("#Twitter");
let Instagram = document.querySelector("#Instagram");

linkDin.addEventListener("click", ()=>{
    window.open('https://www.linkedin.com/in/sahil-patil-35492b232/');
});
Mail.addEventListener("click", ()=>{
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sahilpatil67049@gmail.com');
});
Github.addEventListener("click", ()=>{
    window.open('https://github.com/sahilpatil-009');
});
Twitter.addEventListener("click", ()=>{
    window.open('https://twitter.com/_Sahil_Patil_');
});
Instagram.addEventListener("click", ()=>{
    window.open('https://www.instagram.com/sahilpatil_009/');
});


//Contact Form icons
let linkDin1 = document.getElementById("Linkdin1");
let Mail1 = document.querySelector("#Mail1");
let Github1 = document.querySelector("#Github1");
let Twitter1 = document.querySelector("#Twitter1");
let Instagram1 = document.querySelector("#Instagram1");
linkDin1.addEventListener("click", ()=>{
    window.open('https://www.linkedin.com/in/sahil-patil-35492b232/');
});
Mail1.addEventListener("click", ()=>{
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sahilpatil67049@gmail.com');
});
Github1.addEventListener("click", ()=>{
    window.open('https://github.com/sahilpatil-009');
});
Twitter1.addEventListener("click", ()=>{
    window.open('https://twitter.com/_Sahil_Patil_');
});
Instagram1.addEventListener("click", ()=>{
    window.open('https://www.instagram.com/sahilpatil_009/');
});

//More About me Scroll Down
function MoreAboutMe() {
    const element = document.getElementById("abut");
    element.scrollIntoView();
  }


//Email Validation
const mail = document.getElementById("mail");

mail.addEventListener("keyup", ()=>{
   
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(mail.value == "")
    {
        mail.style.border = "2px solid red";
        document.getElementById("submitBtn").disabled = true;
    }
    if(mail.value.match(pattern)){
        mail.style.border= "2px solid rgb(255, 204, 36)";
        document.getElementById("submitBtn").disabled = false;
    }else{
        mail.style.border = "2px solid red";
        document.getElementById("submitBtn").disabled = true;
    }

});

// Responsive Nav Bar checked 
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
function checkEd(){
    if(document.getElementById("CheckdBox").checked)
    {   
        container.style.height = "280px";
        container.style.paddingTop = "20px";
        container.classList.add("Bar-container");
        nav.classList.add("Bar-nav");
        
    }
    else{
        container.style.height = "80px";
        container.style.paddingTop = "0px";
        container.classList.remove("Bar-container");
        nav.classList.remove("Bar-nav");
    } 
}


// Download Resume
const resumeclick = document.getElementById("ResumeDwnload");

resumeclick.addEventListener("click", ()=> {
    console.log("Resume Button Clicked")
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    // const pdfUrl = 'https://drive.google.com/uc?export=download&id=1fNiQCAZzyO-lSv-rEwuvd_E8hnDd-5BS';
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1wudt1YLRsVLvOKKE8fZU9nEQLalhKSNe';
    // const pdfUrl = 'https://drive.google.com/file/d/1wudt1YLRsVLvOKKE8fZU9nEQLalhKSNe/view?usp=sharing';

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute with the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute with the desired file name
    link.download = 'Sahil_Patil_Resume.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link element to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
});