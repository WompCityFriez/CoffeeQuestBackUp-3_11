const transimg = document.getElementById("trans"); // trans
const finimg = document.getElementById("finstat");

const sleep = ms => new Promise(r => setTimeout(r, ms)); // sleep function, must be async

// vars for transitioning of the images (aka config)
const waittime = 9000; // in ms
const transtime = 1000; // time that the transition can take
const frames = 60; // frames taken for each trans rep

// just because i wanna leave config/sleep here
async function doWaittime(){
    await sleep(waittime);
}
function setTransparency(img,value){
    // NOTE: 0 == transparent
    // https://stackoverflow.com/questions/8517173/change-image-opacity-using-javascript //just in case i loose it
    img.style.opacity = value;
    img.style.filter  = 'alpha(opacity='+value*100+')'; // IE fallback
}
function setTrans(elementID,value){
    setTransparency(document.getElementById(elementID),value);
}

async function transImage(imgPaf){
    delaytime = transtime/frames;
    // presets before stuff happens
    setTransparency(transimg,0);
    transimg.src=imgPaf;
    for(let x = 0; x<frames;x++){
        setTransparency(transimg,1/frames*x);
        await sleep(delaytime);
    }
    // wrap up everything
    finimg.src=imgPaf;
    setTransparency(transimg,0);
}