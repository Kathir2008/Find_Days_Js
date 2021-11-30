function getDays()
{
    // var birthYear = prompt("Please enter your birth year ");
    // var currentYear = new Date().getFullYear();

    // var No_Of_Days = (currentYear - birthYear) * 365;

    // var h1 = document.createElement("h1");
    // var Text = document.createTextNode("You are "+No_Of_Days+" Days Old");
    // h1.setAttribute("data-id",birthYear)
    // h1.setAttribute("id","birthYear");
    // h1.appendChild(Text);
    // document.getElementById("flexbox-result").appendChild(h1);



    var birthDate = prompt("Please Enter Birth Date in MM-DD-YYYY Format");
    var date = new Date(birthDate);
    var currentDate = new Date();
    var DateDifference = new Date(currentDate) - new Date(birthDate);    
    var DayDifference = Math.floor((DateDifference)/(1000*60*60*24));

    var h1 = document.createElement("h1");
    var Text = document.createTextNode("You are "+DayDifference+" Days Old");
    h1.setAttribute("data-id",birthDate)
    h1.setAttribute("id","birthDate");
    h1.appendChild(Text);
    document.getElementById("flexbox-result").appendChild(h1);


}

function reset()
{
    document.getElementById("birthDate").remove();
}
