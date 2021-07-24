import HiddenFlagInfo from "./jsToImport.js";

function validateFlag(flag){
    if(flag === new HiddenFlagInfo().getFlagInfo()){
        showMsg('恭喜, 本题你已通过!',false);
    }else{
        showMsg('对不起, Flag错误',true);
    }
}

function showMsg(msg, isErr){
    if(!isErr){
        document.getElementById('msgDisplayPanel').innerHTML += '<p>' + msg + '</p>';
    }else{
        document.getElementById('msgDisplayPanel').innerHTML += '<p style="color:red">' + msg + '</p>';
    }
}


function clearMsg(){
    document.getElementById('msgDisplayPanel').innerHTML = '';
}

export {validateFlag};