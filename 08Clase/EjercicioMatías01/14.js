let info = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

for(let i=0; i< info.length; i++)
{
    if (info[i] == "laboris")
    {
        info[i]=info[i].toUpperCase();
    }
}

console.log(info);