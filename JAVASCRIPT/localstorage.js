const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');
const btnAllDelete = document.getElementById('btnAllDelete');
const autoFILL = document.getElementById('autoFILL');
const inputDelKey = document.getElementById('inputDelKey');
const btnDelete = document.getElementById('btnDelete');
const inputReadDataKey = document.getElementById('inputReadDataKey');
const btnReadData = document.getElementById('btnReadData');
const readedDataHere = document.getElementById('readedDataHere');

btnReadData.onclick=function()
{
    const yourkey=inputReadDataKey.value;
    for( i=0;i<localStorage.length;i++)
    {
        if(localStorage.key(i)===yourkey)
        {
            const value=localStorage.getItem(yourkey)
            readedDataHere.innerHTML=`
            </hr>
            <b>My key is ${localStorage.key(i)}</b></br>
            <b>My Value is ${value}</b>
            </hr></br>`;
            break;
        }
    }
}

btnInsert.onclick=function()
{
    const mykey=inputKey.value;
    const myvalue=inputValue.value;

    if(mykey&&myvalue)
    {
        localStorage.setItem(mykey,myvalue)
        location.reload();
    }
    else{
        alert("please must enter key and values")
    }
}

for(i=0;i<localStorage.length;i++)
{
    // alert(localStorage.length)
    const key1=localStorage.key(i);
    const value1=localStorage.getItem(key);
    lsOutput.innerHTML+=`
    </hr>
    <b>My key is ${key1}</b>||
    <b>My Value is ${value1}</b>
    </hr></br>`;
}

if(localStorage.length===0)
{
    deleteAllBtn.style.display='none';
    autoFILL.innerHTML="add some key and value records"
}

if(localStorage.length!==0)
{
    document.getElementById('Records').innerHTML="Records Available in Local Storage"
}

btnAllDelete.onclick=function(){
    localStorage.clear();
    location.reload();
}

btnDelete.onclick=function()
{
    const deletekey=inputDelKey.value;
    localStorage.removeItem(deletekey);
    location.reload();
}