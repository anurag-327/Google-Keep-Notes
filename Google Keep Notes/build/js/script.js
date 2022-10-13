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


    displaytrash.innerHTML = "";
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

addnotebtn.addEventListener('click', () => {
    addnotes(titlebox.value.trim(), addnote.value.trim());
});
resetbtn.addEventListener('click', () => {
    localStorage.clear();
});



emptytrashbtn.addEventListener('click', () => {
    localStorage.removeItem("trashtitle");
    localStorage.removeItem("trashindex");
    localStorage.removeItem("trashnotes");
    // emptytrashmsg.innerHTML="Trash bin empty";
    // showtrashnotes();
    // trashsection.classList.add
    window.location.reload();
})
function addnotes(titleboxvalue, addnotevalue) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hrs = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    var id = `${day}${month}${year}${hrs}${minute}${second}`;

    var notesobj, indexobj, titleobj;
    const notes = localStorage.getItem("notes");
    const title = localStorage.getItem("title");
    const index = localStorage.getItem("index");
    if (addnotevalue !== "" && titleboxvalue != "") {

        if (notes == null) {
            notesobj = [];
            titleobj = [];
            indexobj = [];
        }
        else {
            notesobj = JSON.parse(notes);
            titleobj = JSON.parse(title);
            indexobj = JSON.parse(index);
        }
        // console.log(notesobj);
        notesobj.push(addnotevalue);
        titleobj.push(titleboxvalue);
        indexobj.push(id);
        // notesobj.reverse();
        localStorage.setItem("notes", JSON.stringify(notesobj));
        localStorage.setItem("title", JSON.stringify(titleobj));
        localStorage.setItem("index", JSON.stringify(indexobj));

        var random = Math.floor(Math.random() * bgcolours.length);
        shownotes();
        addnote.value = "";
        titlebox.value = "";
    }
    else
        alert("Enter Some content to your note");
}

function shownotes() {
    notessection.innerHTML = "";
    var notesobj, titleobj, indexobj;
    const notes = localStorage.getItem("notes");
    const title = localStorage.getItem("title");
    const index = localStorage.getItem("index");
    if (notes == null) {
        notesobj = [];
        titleobj = [];
        indexobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
        titleobj = JSON.parse(title);
        indexobj = JSON.parse(index);
    }
    notesobj.reverse();
    titleobj.reverse();
    indexobj.reverse();
    for (var i = 0; i < notesobj.length; i++) {
        var random = Math.floor(Math.random() * bgcolours.length);
        const node = document.createElement("div");
        let htmldata = `
        <div class="notescontent hover:bg-white  w-56 ml-3 mt-3 rounded-2xl border-2 ${bgcolours[random]}  shadow-slate-200 shadow-md" data-id="${indexobj[i]}">
        <div class="notesheader  p-2 w-[100%] h-auto  ">
            <h4 class="font-bold inline notestitle  text-fuchsia-800" data-id="${indexobj[i]}">${titleobj[i]}</h4>
            <i class="delete float-right cursor-pointer fa-regular fa-trash-can mt-1 " data-id="${indexobj[i]}"   ></i>
            <button class="editbtn float-right mr-4" data-id="${indexobj[i]}"><i class="fa-regular fa-pen-to-square"></i></button>
            <hr class="my-2">
            <div class="overflow-hidden">
            <p class="notesdescription block h-auto whitespace-pre-wrap text-ellipsis overflow-x-auto overflow-y-auto " data-id="${indexobj[i]}">${notesobj[i]}</p>
            </div>
        </div>
        <div class="p-2" >
            <hr class="pb-1">
            <span class="font-semibold text-yellow-600 ">${indexobj[i]}</span>
        </div>
    </div>`;
        node.insertAdjacentHTML("afterbegin", htmldata);
        notessection.appendChild(node);
        count++;
    }

    var editbtn = document.querySelectorAll(".editbtn");
    for (var i = 0; i < editbtn.length; i++) {
        editbtn[i].addEventListener('click', (event) => {
            // console.log(event.currentTarget.dataset.id);
            // alert("edit ressed");
            editnotes(event.currentTarget.dataset.id);
        });
    }
    var del = document.querySelectorAll(".delete");
    for (var i = 0; i < del.length; i++) {
        del[i].addEventListener('click', (event) => {
            // console.log(event.currentTarget.dataset.id);
            deletenote(event.currentTarget.dataset.id);
        });
    }
}

function editnotes(position) {
    var notescontent = document.querySelectorAll(".notescontent");
    console.log(position);
    var notestitle = document.querySelectorAll(".notestitle");
    var notesdescription = document.querySelectorAll(".notesdescription");
    for (var i = 0; i < notestitle.length; i++) {
        if (notestitle[i].dataset.id === position) {
            titlebox.value = notestitle[i].innerText;
            addnote.value = notesdescription[i].innerHTML;
            deletenote(position);
            addnotebox.classList.add("hidden");
            notescontent[i].classList.add("hidden");
            addnote.classList.remove("hidden");
            titlebox.classList.remove("hidden");
            pinicon.classList.remove("hidden");
            addnoteicon.classList.remove("hidden");
            console.log(notestitle[i].dataset.id);
        }
    }
}

function showtrashnotes() {
    var trashnotesobj, trashindexobj, trashtitleobj;
    const trashnotes = localStorage.getItem("trashnotes");
    const trashtitle = localStorage.getItem("trashtitle");
    const trashindex = localStorage.getItem("trashindex");
    if (trashnotes === null) {
        // alert("No Trash Data");
        emptytrashmsg.innerHTML = "Trash bin empty";
        console.log("no dtaa");

    }
    else {
        // alert("trash alert");
        emptytrashmsg.innerHTML = "Delete trash in 7 days";
        visitedtrash = 1;
        trashnotesobj = JSON.parse(trashnotes);
        trashtitleobj = JSON.parse(trashtitle);
        trashindexobj = JSON.parse(trashindex);

        trashnotesobj.reverse();
        trashtitleobj.reverse();
        trashindexobj.reverse();

        for (var i = 0; i < trashnotesobj.length; i++) {
            var random = Math.floor(Math.random() * bgcolours.length);

            const node = document.createElement("div");
            let htmldata = `
        <div class="trashnotescontent w-56 hover:bg-red-400  ml-3 mt-6 hover:text-white rounded-2xl border-2 ${bgcolours[random]}  shadow-slate-200 shadow-md sm:w-40" data-id="${trashindexobj[i]}">
        <div class="trashnotesheader p-2 w-[100%]  overflow-x-clip overflow-y-visible">
            <h4 class="font-bold inline  text-fuchsia-800" data-id="${trashindexobj[i]}" >${trashtitleobj[i]}</h4>
            <i class="deletetrash float-right fa-regular fa-trash-can mt-1 " data-id="${trashindexobj[i]}"   ></i>
            <button class="retrievebtn float-right mr-4 " data-id="${trashindexobj[i]}"><i class="fa-solid fa-rotate-left"></i></button>
            <hr class="my-2">
            <p class="trashdescription block h-auto whitespace-pre-wrap text-ellipsis overflow-x-auto overflow-y-auto " data-id="${trashindexobj[i]}">${trashnotesobj[i]}</p>
        </div>
        <div class="p-2" >
            <hr class="pb-1">
            <span class="font-semibold  ">${trashindexobj[i]}</span>
        </div>
    </div>`;
            node.insertAdjacentHTML("afterbegin", htmldata);
            displaytrash.appendChild(node);
        }

        var retrievebtn = document.querySelectorAll(".retrievebtn");
        for (var i = 0; i < retrievebtn.length; i++) {
            retrievebtn[i].addEventListener('click', (event) => {
                for (var j = 0; j < retrievebtn.length; j++)
                {
                    if(event.currentTarget.dataset.id===retrievebtn[j].dataset.id)
                    {
                            console.log(trashtitleobj[j],trashnotesobj[j]);
                            addnotes(trashtitleobj[j], trashnotesobj[j]);
                        }
                }
                deletetrashnote(event.currentTarget.dataset.id);
            });
        }

        var deltrash = document.querySelectorAll(".deletetrash");
        for (var i = 0; i < deltrash.length; i++) {
            deltrash[i].addEventListener('click', (event) => {
                // console.log(event.currentTarget.dataset.id);
                deletetrashnote(event.currentTarget.dataset.id);
            });
        }

    }
}
function deletenote(position) {
    // console.log(position);
    // var notescontent = document.querySelectorAll(".notescontent");
    // for (var i = 0; i < notescontent.length; i++) {
    //     if (notescontent[i].dataset.id === position) {
    //         notescontent[i].classList.add("hidden");
    //     }
    // }

    var notesobj = [], titleobj = [], indexobj = [], trashnotesobj, trashtitleobj, trashindexobj;

    const notes = localStorage.getItem("notes");
    notesobj = JSON.parse(notes);
    const title = localStorage.getItem("title");
    titleobj = JSON.parse(title);
    const index = localStorage.getItem("index");
    indexobj = JSON.parse(index);

    const trashnotes = localStorage.getItem("trashnotes");

    const trashtitle = localStorage.getItem("trashtitle");

    const trashindex = localStorage.getItem("trashindex");


    if (trashnotes === null) {
        trashnotesobj = [];
        trashtitleobj = [];
        trashindexobj = [];
    }
    else {
        trashnotesobj = JSON.parse(trashnotes);
        trashtitleobj = JSON.parse(trashtitle);
        trashindexobj = JSON.parse(trashindex);
    }


    var dummy = [];
    var titledummy = [];
    var indexdummy = [];
    for (var i = 0; i < notesobj.length; i++) {
        if (indexobj[i] != position) {
            // console.log(i, position);
            dummy.push(notesobj[i]);
            titledummy.push(titleobj[i]);
            indexdummy.push(indexobj[i]);
        }
        else {
            trashnotesobj.push(notesobj[i]);
            trashtitleobj.push(titleobj[i]);
            trashindexobj.push(indexobj[i]);
        }
    }

    // console.log(dummy);

    localStorage.setItem("notes", JSON.stringify(dummy));
    localStorage.setItem("title", JSON.stringify(titledummy));
    localStorage.setItem("index", JSON.stringify(indexdummy));
    localStorage.setItem("trashnotes", JSON.stringify(trashnotesobj));
    localStorage.setItem("trashtitle", JSON.stringify(trashtitleobj));
    localStorage.setItem("trashindex", JSON.stringify(trashindexobj));
    shownotes();
}

function deletetrashnote(position) {
    // console.log(position);
    var trashnotescontent = document.querySelectorAll(".trashnotescontent");
    for (var i = 0; i < trashnotescontent.length; i++) {
        if (trashnotescontent[i].dataset.id === position) {
            trashnotescontent[i].classList.add("hidden");
        }
    }

    var trashnotesobj, trashtitleobj, trashindexobj;
    const trashnotes = localStorage.getItem("trashnotes");
    const trashtitle = localStorage.getItem("trashtitle");
    const trashindex = localStorage.getItem("trashindex");


    if (trashnotes === null) {
        trashnotesobj = [];
        trashtitleobj = [];
        trashindexobj = [];
    }
    else {
        trashnotesobj = JSON.parse(trashnotes);
        trashtitleobj = JSON.parse(trashtitle);
        trashindexobj = JSON.parse(trashindex);
    }


    var dummy = [];
    var titledummy = [];
    var indexdummy = [];
    for (var i = 0; i < trashnotesobj.length; i++) {
        if (trashindexobj[i] != position) {
            dummy.push(trashnotesobj[i]);
            titledummy.push(trashtitleobj[i]);
            indexdummy.push(trashindexobj[i]);
        }

    }
    localStorage.setItem("trashnotes", JSON.stringify(dummy));
    localStorage.setItem("trashtitle", JSON.stringify(titledummy));
    localStorage.setItem("trashindex", JSON.stringify(indexdummy));
    // showtrashnotes();
}

shownotes();
// showtrashnotes();