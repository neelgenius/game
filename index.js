let homecnt=0;
let guestcnt=0;

function home(x)
{
 homecnt+=x;
document.getElementById("home-team").innerText=homecnt;
}

function guest(x)
{
guestcnt+=x;
document.getElementById("guest-team").innerText=guestcnt;
    
}