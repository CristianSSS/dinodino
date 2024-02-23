const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
console.log(canvas.height)

ctx.fillRect(50,canvas.height -40,20,20)


const player =({x=50, y=canvas.height -40, w=20,h=20 })=>({
    x,
    y,
    w,
    h,
    piso:true,
    draw(){

    }
})


const player_1 = player()

document.addEventListener("keypress",function(e){

    if(e.charCode == 32 && !player_1.piso ){

        player_1.piso = false;
        let move = setInterval(function(){
            player_1.y
        },10)
    }

})