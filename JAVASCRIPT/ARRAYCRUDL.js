let fruitslist = new Array("MANGO", "BANANA", "APPLE", "ORANGE");


let Adding = () => {
    let newvalue = document.getElementById('fruit').value;

    fruitslist.push(newvalue);

    alert(newvalue + " this fruit is added in my shop..!")
    Printall()
}
``
var Printall = () => {
    let temp = " "

    fruitslist.map((getting) =>
    //getting is user defined argument .this is get a one by one value in fruits list.
    {
        temp += " <tr><td><ul><li>" + getting + "</li></ul></td></tr>";
    })

    document.getElementById('list').innerHTML = "<table><thead bgcolor='red'><tr><th>MY SHOP FRUITS LIST</th></tr></thead><tbody bgcolor='pink' align='center'>" + temp + "</tbody></table>";
}

let Updating = () => {
    let updateindex = document.getElementById('fruit').value;

    let newvalue = prompt(" please enter your update fruit name" + fruitslist[updateindex])

    fruitslist[updateindex] = newvalue;  //fruitslist[2]=newvalue;

    Printall();
}


var Removing = () => {
    let delete_value = document.getElementById('fruit').value;

    // fruitslist=fruitslist.filter((getting)=>
    // {
    //     if(getting!==delete_value)
    //     {
    //         return getting;
    //     }
    // })

    fruitslist.map((get) => {
        console.log(get)
    });

    Printall();
}


function Finding() {
    let searchingvalue = document.getElementById('fruit').value;

    for (i = 0; i < fruitslist.length; i++) {
        if (fruitslist[i] === searchingvalue) {
            return i;
        }
    }
}

function Findfirst() {
    for (i = 0; i < fruitslist.length; i++) {
        alert(" my shop first fruit is :" + fruitslist[i]);
        break;
    }
}