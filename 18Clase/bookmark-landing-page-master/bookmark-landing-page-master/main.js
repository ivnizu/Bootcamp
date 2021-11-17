let accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) 
{
    accordion[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") 
        {
            panel.style.display = "none";
        } 
        else 
        {
            panel.style.display = "block";
        }
    });
}

let btnContact = document.getElementById('btnContactUs');
let rta = document.getElementById("rta");
let divRed = document.getElementById("emailBox");

btnContact.addEventListener('click', function()
{
    var myTextError = document.createTextNode("Whoops, make sure it´s an email");
    rta.appendChild(myTextError);
   // rta.insertAdjacentElement(afterbegin, myTextError);
    divRed.style="background:red";
});
