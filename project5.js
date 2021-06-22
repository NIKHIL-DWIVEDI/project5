const container=document.querySelector('.container')
const text=document.querySelector('.loading-text')

let load=0;

let intval = setInterval(blurring,30)
function blurring(){
    load++
    // console.log(load)
    if(load>99)
    clearInterval(intval)

    let st='%'
    text.innerHTML=`${load} ${st}`
    // text.style.opacity = scale(load , 0, 100 ,1 ,0)
    container.style.filter = `blur(${scale(load , 0,100,20,0)}px)`
}

const scale=(num,in_min,in_max, out_min,out_max) => {
    return ((num - in_min) * ( out_max - out_min)) / (in_max - in_min) + out_min
}