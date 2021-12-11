
let count =0;
let counTT=document.getElementById("count-el");
let saveTT=document.getElementById("previous-entries");
function increment()
{
    count =count+1
    counTT.innerText=count
}
function save()
{
    let sam= count+"-";
    saveTT.innerText += sam;
    count=0;

}