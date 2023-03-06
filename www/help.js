username = document.getElementById('name').value
switch (username) {
    case 'Beans':
        console.log('Beans is lonely');
        console.log('Go befriend some nerds');
        break;
    case 'Min':
        console.log('Say hi');
        break;
    default:
        console.log('Say hi');
}


function sayhi() { return "Hi"; }
sayhi();


document.getElementById("travel").onclick = () => {
    document.getElementById("take").innerHTML = "Cool place, you should visit!";
    document.getElementById("take").style.fontSize = "35px"
}

function formchange() { 
    username = document.getElementById('name').value
    alert("hello " + username); 
}