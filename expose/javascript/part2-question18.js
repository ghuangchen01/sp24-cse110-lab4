function Localtime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(Localtime,1000);