var last_position_of_x,last_position_of_y;
color = "black";
width_of_line = 2;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 170;
        if(width < 992)
        {

document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
        }

        canvas.addEventListener("touchstart", my_touchstart);

        function my_touchstart (e)
        {
            console.log("my_touchstart");
            //Additional Activity
            color = document.getElementById("color").value;
            width_of_line = document.getElementById("width_of_line").value;

            last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
            last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        }