function confettifalling (){
    alert("hello");
    var box = document.getElementById("box");
    var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
    for(var i = 0; i < 1000 ; i++)
    {
        var div = document.createElement('div');
        div.classList.add("confetti");
        if (box) {
            box.appendChild(div);
        }

    }
}
