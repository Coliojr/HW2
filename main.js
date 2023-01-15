document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {
        let textbox1 = document.getElementById("textbox1").value;
        let textbox2 = document.getElementById('textbox2').value;
        let textbox3 = document.getElementById('textbox3').value;
    document.getElementById("averageNumber").innerHTML = (parseInt(textbox1)+parseInt(textbox2)+parseInt(textbox3))/3

        console.log(textbox1);
        console.log(textbox2);
        console.log(textbox3);
    });
});

