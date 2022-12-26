const loginheader=document.querySelector(".loginheader");
const signupheader=document.querySelector(".signupheader");
const loginswitch=document.querySelector(".loginswitch");
const signupswitch=document.querySelector(".signupswitch");
const signupswitchlink=document.querySelector(".signupswitchlink");
const namefield=document.querySelector(".namefield");
const emailfield=document.querySelector(".emailfield");
const passwordfield=document.querySelector(".passwordfield");
const confirmpasswordfield=document.querySelector(".confirmpasswordfield");
const checkboxfield=document.querySelector(".checkboxfield");
const loginbutton=document.querySelector(".loginbutton");
const signupbutton=document.querySelector(".signupbutton");
// const loginfooter=document.querySelector("#loginfooter");
// const msg=document.querySelector(".msg");
// console.log(loginfooter,signupswitchlink);
const loginsection=document.querySelector(".loginsection");
const signupsection=document.querySelector(".signupsection");
signupswitch.addEventListener('click',() =>
{
    signupswitch.classList.add("bg-gradient-to-r");
    signupswitch.classList.add("from-blue-600");
    signupswitch.classList.add("to-indigo-500");
    loginswitch.classList.remove("bg-gradient-to-r");
    loginswitch.classList.remove("from-blue-600");
    loginswitch.classList.remove("to-indigo-500");
    loginheader.classList.add("hidden");
    loginswitch.classList.add("text-black");
    loginswitch.classList.remove("text-white");
    signupheader.classList.remove("hidden");
    signupswitch.classList.add("text-white");
    signupswitch.classList.remove("text-black");
    loginsection.classList.add("hidden");
    signupsection.classList.remove("hidden");
    // loginfooter.classlist.add("hidden");
    // msg.classlist.add("hidden");
})
signupswitchlink.addEventListener('click',() =>
{
    // alert("h");
    // loginfooter.classlist.add("hidden");
    signupswitch.classList.add("bg-gradient-to-r");
    signupswitch.classList.add("from-blue-600");
    signupswitch.classList.add("to-indigo-500");
    loginswitch.classList.remove("bg-gradient-to-r");
    loginswitch.classList.remove("from-blue-600");
    loginswitch.classList.remove("to-indigo-500");
    loginheader.classList.add("hidden");
    loginswitch.classList.add("text-black");
    loginswitch.classList.remove("text-white");
    signupheader.classList.remove("hidden");
    signupswitch.classList.add("text-white");
    signupswitch.classList.remove("text-black");
    loginsection.classList.add("hidden");
    signupsection.classList.remove("hidden");
    
})
loginswitch.addEventListener('click',() =>
{
    // loginfooter.classlist.remove("hidden");
    signupswitch.classList.remove("bg-gradient-to-r");
    signupswitch.classList.remove("from-blue-600");
    signupswitch.classList.remove("to-indigo-500");
    loginswitch.classList.add("bg-gradient-to-r");
    loginswitch.classList.add("from-blue-600");
    loginswitch.classList.add("to-indigo-500");
    loginheader.classList.remove("hidden");
    loginswitch.classList.remove("text-black");
    loginswitch.classList.add("text-white");
    signupheader.classList.add("hidden");
    signupswitch.classList.remove("text-white");
    signupswitch.classList.add("text-black");
    loginsection.classList.remove("hidden");
    signupsection.classList.add("hidden");
})
