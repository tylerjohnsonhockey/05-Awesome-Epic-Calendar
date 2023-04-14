// Variables
var hour9 = $("#9AM");
var hour10 = $("#10AM");
var hour11 = $("#11AM");
var hour12 = $("#12PM");
var hour1 = $("#1PM");
var hour2 = $("#2PM");
var hour3 = $("#3PM");
var hour4 = $("#4PM");
var hour5 = $("#5PM");
var hours = [
    hour9,
    hour10,
    hour11,
    hour12,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5
];
var save = $(".saveBtn");
var containerCal = $(".container");

updateTime();

//Time update function using moment.js
function updateTime(){
    var today = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(today);

//Text Blocks Color
var ppf = moment().format("kk");
for (let i =0; i < hours.length;i++){
    hours[i].removeClass("past present future");

    if (ppf > hours[i].attr("data-hour")){
        hours[i].addClass("past");

    } else if(ppf === hours[i].attr("data-hour")){
        hours[i].addClass("present");

    }else{
        hours[i].addClass("future");
    }
}
}

//Save Button Function
function saveCalendar(event) {
    event.preventDefault();
    let saved = $(event.currentTarget);
    let text = saved.siblings("textarea");
    let selectBlock = text.data("hour");
    localStorage.setItem("timeblock " + selectBlock, text.val());
}
save.on("click", saveCalendar);

renderDetails();

//Saving Local Data
function renderDetails(){
    for(ls of hours){
        ls.val(localStorage.getItem("timeblock " + ls.data("hour")));
    }
}