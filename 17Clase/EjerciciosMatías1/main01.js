const p = document.querySelectorAll('p');
//const enlace = document.querySelector('#linkNulo');
let cont = 0;
let imagen = document.createElement("img");

//1
p.forEach(element => {
    element.style="background:red";
});

//2
p.forEach(element => {
    cont += '${element.textContent.length}'
    /*
    for(i = 0; i < element.length; i++)
    {
        cont++;
    }
    */
});

let rta = document.createElement("h3");
rta.textContent = cont;
document.body.insertAdjacentElement("beforebegin",rta)
console.log(cont);

//3

document.addEventListener("click", element =>{

    if(element.target.match("a"))
    {
        element.preventDefault();
        document.body.insertAdjacentElement("beforebegin", element.target.href);
    }
})

/*
function noIrAgugl()
{
    
}

enlace.addEventListener('click', noIrAgugl);
*/

//4
imagen.setAttribute("src", "data:image/jpeg;base64,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L0TSt2QjOCrDVlc9u+a3yg7VoXVyr2gIoLRo0lGkoOiDkBTwAJx9IGTl0gfatRW3hntge06qdPO/6znyu2ZStNrG3oLppLUttK5LY1KjHed/EmY+XNQJtSo54K1sx7cClTJk8qNq073apuKGo03qWwXI0sdIRTu+YMC28vuTdK3vmv7u7o6HqpWFroZ6zounKaeGCFxk4Eo9HaC1dppcUUFFWuaToi4AQGouBu3cPpvm05bXKjbVR6+WpJcUdQPSHNroJXHWNOd06W0b+nc7X5+j+U9zRZN2no61A6J4cOEDt8r7d7Haz1rmlziGublVcdCrTLagAeBwOj8xLFyN5O0b6/F/Z3FJFSsLg2ZQrVppqzpAG4jfjI3Tp7X5S1am03tNpVA1ktzURqbomFp6iFIYLqXcVOQczV8i00bZppZsWpiu6q+8aqA1aie0aO34QPpWJEmAnETlOIgTERIExESQiIgIiICIiAiIgIiICIiAiIgIiICVnbnIexvqvP3NEvUKqurW6bl4DCkDrlmiBT7LycbOoVErUqDLURldW52qcMpyDgtgzJtryf2F45q1aGKhOWZGamWPWWAOCfjjMtkQNNsHk3bWClbWitPONTb2ZscMsck/rNdtfkBYXdU169uDUb2mV3TUe0hSAT8ZaogVXaXIGwuUpU6lDdRVaSEOysEXgpYHLD59sw3nk52dVKl7f2EWmoV6igKuSNykZO87+JlwiBU77yf2FesbirQJqEoS3OVACVAVeiDjgok2fICwo1/OqdACoDrUamKK2c6lUnAP8pa4gVjbXIaxvaouLihqqbskMyascNQU7+r9JgfyebPasLjmMVAyVAVd1UMmNOFBwANI3YluiBWeUHIiyv25y4og1MAc4rFHOOGSvH6zNsDkjZ2BLWtFVYjBcku+OzU2SB8BLBEBERATiJynEQKV6yrXu7rw0/vk+sq17u68NP74iThB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98esq17u68NP74iMB6yrXu7rw0/vj1lWvd3Xhp/fERgPWVa93deGn98j1lWvd3Xhp/fERgf/Z");

document.body.appendChild(imagen);