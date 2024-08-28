function getDOB() {

let data = document.getElementById('birthdate').value ; 
        
let dob = new Date(data);
let day = dob.getDate();
let month = dob.getMonth();
let year = dob.getFullYear();

let cdate = new Date();
let cday = cdate.getDate();
let cmonth = cdate.getMonth();
let cyear = cdate.getFullYear();

let myDay = cday - day;
let myMonth = cmonth - month;
let myYear = cyear - year; 

if (myMonth < 0)
{
    myMonth = ''
}

if (myDay < 0)
    {
        myDay = ''
    }
    
document.getElementById('y').innerHTML = myYear + " years";
document.getElementById('m').innerHTML = myMonth + " months";
document.getElementById('d').innerHTML = myDay + " days";



    }
    