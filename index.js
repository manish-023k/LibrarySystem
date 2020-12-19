console.log("this is the library Project.......");
display2();
// constructor 
function addBook(bname,bauthor,btype)
{
    this.bname=bname;
    this.bauthor=bauthor;
    this.btype=btype;
}
// display constructor
function display(book1)
{
  let localbook=localStorage.getItem("localbook");
  if(localbook==null)
  {
      barr=[];
  }
  else
  {
      barr=JSON.parse(localbook);
  }
  barr.push(book1);
//   console.log(barr);
  localStorage.setItem("localbook",JSON.stringify(barr));
  console.log("this is the display ...");
//   display2();
}
function display2()
{
    let localbook=localStorage.getItem("localbook");
    if(localbook==null)
    {
        barr=[];
    }
    else{
        barr=JSON.parse(localbook);
    }
    // let barr=JSON.parse('localbook');
    let tbl=document.getElementById('tbl');
    let html=``;
    let i=1;
    barr.forEach(function(element) {
        html+=` <tr class="tblrow">
        <th scope="row">${i}</th>
        <td>${element.bname}</td>
        <td>${element.bauthor}</td>
        <td>${element.btype}</td>
        </tr>`
        i++;
    });
    tbl.innerHTML=html;
    console.log("this is the display ...");
    
}


//to reset the form content
function clear()
{
    let libform=document.getElementById('libform');
    libform.reset();

}
//get elements from html page to add the books
let libform=document.getElementById('libform');
libform.addEventListener('submit',addBks);
function addBks(e)
{
    let bname=document.getElementById('bname').value;
    let bauthor=document.getElementById('author').value;
    let type;
    let fection=document.getElementById('fection');
    let programing=document.getElementById('programing');
    let cooking=document.getElementById('cooking');
    if(fection.checked)
    {
        type=fection.value;
    }
   else if(programing.checked)
    {
        type=programing.value;
    }
   else if(cooking.checked)
    {
        type=cooking.value;
    }
    let book1=new addBook(bname,bauthor,type);
    e.preventDefault();
    // console.log(book1);
    display(book1);
    display2();
    clear();


}
//for the search section 
let search=document.getElementById('search');
search.addEventListener('input',function()
{ let searchtxt=search.value.toLowerCase();
    let card=document.getElementById('tbl').children;
    Array.from(card).forEach(function(element)
    {
        let cardtxt=element.getElementsByTagName('th')[0].innerText;
        let cardtxt1=element.getElementsByTagName('td')[0].innerText;
        let cardtxt2=element.getElementsByTagName('td')[1].innerText;
        let cardtxt3=element.getElementsByTagName('td')[2].innerText;
        // let tfortxt=element.getElementsByTagName('h5')[0].innerText;
        if(cardtxt.includes(searchtxt) || cardtxt1.includes(searchtxt) || cardtxt2.includes(searchtxt) ||cardtxt3.includes(searchtxt) )
        {
            element.style.display='visible';
        }
        else
        {
            element.style.display='none';
        }
    })
})