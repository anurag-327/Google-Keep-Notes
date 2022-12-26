var navheading = document.querySelector(".navheading");
var addnote = document.querySelector(".addnote");
var addnotedisplay = document.querySelector(".addnotedisplay");
var addnoteicon = document.querySelector(".addnoteicon");
var pinicon = document.querySelector(".pinicon");
var closeaddnote = document.querySelector(".closeaddnote");
var addnotebtn = document.querySelector(".addnotebtn");
var addnotebox = document.querySelector(".addnotebox");
var titlebox = document.querySelector(".titlebox");
var searchboxicon = document.querySelector(".searchboxicon");
var hamburgericon = document.querySelector(".hamburger");
var hamburgermenu = document.querySelector(".hamburgermenu");
var togglesidebarmsg = document.querySelectorAll(".togglesidebarmsg");
var togglesidebardiv = document.querySelectorAll(".togglesidebardiv");
var togglesidebaricon = document.querySelectorAll(".togglesidebaricon");

var displaysection = document.querySelector(".displaysection");
var notessection = document.querySelector(".notessection");
var remindersection = document.querySelector(".remindersection");
var editlabelsection = document.querySelector(".editlabelsection");
var archivesection = document.querySelector(".archivesection");
var detailsection = document.querySelector(".detailsection");
var trashsection = document.querySelector(".trashsection");
var displaytrash = document.querySelector(".displaytrash");

var content = document.querySelector(".notescontent");
var resetbtn = document.querySelector(".resetbtn");

var notescontent = document.querySelectorAll(".notescontent");

var notes = document.querySelector(".notes");
var reminder = document.querySelector(".reminder");
var details = document.querySelector(".detail");
var editlabel = document.querySelector(".editlabel");
var archive = document.querySelector(".archive");
var trash = document.querySelector(".trash");

var emptytrashbtn = document.querySelector(".emptytrash");
var emptytrashmsg = document.querySelector(".trashmsg");

var count = 1;
var visitedtrash = 0;
const bgcolours = ["bg-red-200", "bg-blue-100", "bg-yellow-100", "bg-slate-200", "bg-orange-200", "bg-green-100", "bg-cyan-100", "bg-indigo-100", "bg-pink-200", "bg-rose-200"];

notes.addEventListener('click', () => {
    navheading.innerText = "Keep";
    addnotedisplay.classList.remove("hidden");
    notessection.classList.remove("hidden");
    trashsection.classList.add("hidden")
    remindersection.classList.add("hidden");
    editlabelsection.classList.add("hidden");
    archivesection.classList.add("hidden");
    detailsection.classList.add("hidden");

    notes.classList.add("bg-orange-200");
    notes.classList.remove("hover:bg-orange-100");
    trash.classList.add("rounded-r-full");

    trash.classList.remove("bg-orange-200")
    trash.classList.add("rounded-r-full")
    reminder.classList.remove("bg-orange-200");
    reminder.classList.add("hover:bg-orange-100");
    editlabel.classList.add("hover:bg-orange-100");
    editlabel.classList.remove("bg-orange-200");
    archive.classList.add("hover:bg-orange-100");
    archive.classList.remove("bg-orange-200");
    details.classList.add("hover:bg-orange-100");
    details.classList.remove("bg-orange-200");
});

trash.addEventListener('click', () => {
    navheading.innerText = "Trash";
    addnotedisplay.classList.add("hidden");
    notessection.classList.add("hidden");
    remindersection.classList.add("hidden");
    editlabelsection.classList.add("hidden");
    archivesection.classList.add("hidden");
    detailsection.classList.add("hidden");
    trashsection.classList.remove("hidden");

    trash.classList.add("bg-orange-200");
    trash.classList.add("rounded-r-full");

    notes.classList.remove("bg-orange-200");
    notes.classList.add("hover:bg-orange-100");
    editlabel.classList.remove("bg-orange-200");
    editlabel.classList.add("hover:bg-orange-100");
    archive.classList.remove("bg-orange-200");
    archive.classList.add("hover:bg-orange-100");
    details.classList.remove("bg-orange-200");
    details.classList.add("hover:bg-orange-100");
    reminder.classList.remove("bg-orange-200");
    reminder.classList.add("hover:bg-orange-100");


    // displaytrash.innerHTML = "";
    showtrashnotes();
});

reminder.addEventListener('click', () => {
    navheading.innerText = "Reminder";
    addnotedisplay.classList.add("hidden");
    notessection.classList.add("hidden");
    trashsection.classList.add("hidden");
    remindersection.classList.remove("hidden");
    editlabelsection.classList.add("hidden");
    archivesection.classList.add("hidden");
    detailsection.classList.add("hidden");

    reminder.classList.add("bg-orange-200");
    reminder.classList.add("rounded-r-full");

    notes.classList.remove("bg-orange-200");
    notes.classList.add("hover:bg-orange-100");
    trash.classList.add("hover:bg-orange-100");
    trash.classList.remove("bg-orange-200");
    editlabel.classList.add("hover:bg-orange-100");
    editlabel.classList.remove("bg-orange-200");
    archive.classList.add("hover:bg-orange-100");
    archive.classList.remove("bg-orange-200");
    details.classList.add("hover:bg-orange-100");
    details.classList.remove("bg-orange-200");
});
details.addEventListener('click', () => {
    navheading.innerText = "Details";
    addnotedisplay.classList.add("hidden");
    notessection.classList.add("hidden");
    trashsection.classList.add("hidden");
    remindersection.classList.add("hidden");
    editlabelsection.classList.add("hidden");
    archivesection.classList.add("hidden");
    detailsection.classList.remove("hidden");

    details.classList.add("bg-orange-200");
    details.classList.add("rounded-r-full");

    notes.classList.remove("bg-orange-200");
    notes.classList.add("hover:bg-orange-100");
    trash.classList.add("hover:bg-orange-100");
    trash.classList.remove("bg-orange-200");
    editlabel.classList.add("hover:bg-orange-100");
    editlabel.classList.remove("bg-orange-200");
    archive.classList.add("hover:bg-orange-100");
    archive.classList.remove("bg-orange-200");
    reminder.classList.add("hover:bg-orange-100");
    reminder.classList.remove("bg-orange-200");
});
editlabel.addEventListener('click', () => {
    navheading.innerText = "Edit Label";
    addnotedisplay.classList.add("hidden");
    notessection.classList.add("hidden");
    trashsection.classList.add("hidden");
    remindersection.classList.add("hidden");
    archivesection.classList.add("hidden");
    detailsection.classList.add("hidden");
    editlabelsection.classList.remove("hidden");

    editlabel.classList.add("bg-orange-200");
    editlabel.classList.add("rounded-r-full");

    notes.classList.remove("bg-orange-200");
    notes.classList.add("hover:bg-orange-100");
    trash.classList.add("hover:bg-orange-100");
    trash.classList.remove("bg-orange-200");
    details.classList.add("hover:bg-orange-100");
    details.classList.remove("bg-orange-200");
    archive.classList.add("hover:bg-orange-100");
    archive.classList.remove("bg-orange-200");
    reminder.classList.add("hover:bg-orange-100");
    reminder.classList.remove("bg-orange-200");
});

archive.addEventListener('click', () => {
    navheading.innerText = "Archive";
    addnotedisplay.classList.add("hidden");
    notessection.classList.add("hidden");
    trashsection.classList.add("hidden");
    remindersection.classList.add("hidden");
    detailsection.classList.add("hidden");
    editlabelsection.classList.add("hidden");
    archivesection.classList.remove("hidden");

    archive.classList.add("bg-orange-200");
    archive.classList.add("rounded-r-full");

    notes.classList.remove("bg-orange-200");
    notes.classList.add("hover:bg-orange-100");
    trash.classList.add("hover:bg-orange-100");
    trash.classList.remove("bg-orange-200");
    details.classList.add("hover:bg-orange-100");
    details.classList.remove("bg-orange-200");
    editlabel.classList.add("hover:bg-orange-100");
    editlabel.classList.remove("bg-orange-200");
    reminder.classList.add("hover:bg-orange-100");
    reminder.classList.remove("bg-orange-200");
});







hamburgericon.addEventListener('click', () => {


    hamburgermenu.classList.toggle("sm:hidden");
    // hamburgermenu.classList.toggle("sm:bg-white")
    hamburgermenu.classList.toggle("ml-2");
    for (var i = 0; i < togglesidebardiv.length; i++) {
        togglesidebardiv[i].classList.toggle("rounded-r-full");
        togglesidebardiv[i].classList.toggle("rounded-full");
        togglesidebardiv[i].classList.toggle("w-[75%]");
        togglesidebardiv[i].classList.toggle("w-[12%]");
        togglesidebardiv[i].classList.toggle("hover:rounded-r-full");
        togglesidebardiv[i].classList.toggle("hover:rounded-full");

    }
    for (var i = 0; i < togglesidebardiv.length; i++) {
        togglesidebaricon[i].classList.toggle("ml-8");
        togglesidebaricon[i].classList.toggle("ml-[1rem]");

    }
    if (hamburgermenu.classList != "sm:hidden") {
        for (var i = 0; i < togglesidebarmsg.length; i++) {
            togglesidebarmsg[i].classList.toggle("invisible");

        }
    }
});

addnotebox.addEventListener('click', () => {
    addnotebox.classList.remove("hidden");
    addnote.classList.toggle("hidden");
    addnotebox.classList.toggle("hidden");
    addnotebox.classList.toggle("inline");
    titlebox.classList.toggle("hidden");
    addnoteicon.classList.toggle("hidden");
    pinicon.classList.toggle("hidden");
    // searchboxicon.classList.toggle("hidden");
    addnotebox.placeholder = "Title";
    addnote.placeholder = "Take a note...";
});

closeaddnote.addEventListener('click', () => {
    addnotebox.classList.toggle("hidden");
    addnotebox.classList.toggle("inline");
    titlebox.classList.toggle("hidden");
    addnote.classList.toggle("hidden");
    addnoteicon.classList.toggle("hidden");
    pinicon.classList.toggle("hidden");
    // searchboxicon.classList.toggle("hidden");
    addnote.placeholder = "Take a note...";
    addnote.value = "";
    titlebox.value = "";
    addnotebox.placeholder = "Take a note...";

});

// addnotebtn.addEventListener('click', () => {
//     addnotes(titlebox.value.trim(), addnote.value.trim());
// });
// resetbtn.addEventListener('click', () => {
//     localStorage.clear();
// });



// emptytrashbtn.addEventListener('click', () => {
//     localStorage.removeItem("trashtitle");
//     localStorage.removeItem("trashindex");
//     localStorage.removeItem("trashnotes");
//     // emptytrashmsg.innerHTML="Trash bin empty";
//     // showtrashnotes();
//     // trashsection.classList.add
//     window.location.reload();
// })

