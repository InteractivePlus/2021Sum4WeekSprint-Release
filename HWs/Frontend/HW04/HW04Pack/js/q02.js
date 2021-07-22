function testAsyncFunction(func){
    showMsg('请等待5秒如果没有任何错误, 则本题默认通过',false);
    const testSets = [
        [undefined, undefined, 'error!'],
        [123, 124, undefined],
        [-1, 0, undefined]
    ];
    for(let i = 0; i < testSets.length; i++){
        let currentTest = testSets[i];
        let funcProm = func(currentTest[0]);
        if(!(funcProm instanceof Promise)){
            showMsg('必须返回一个Promise!',true);
        }
        funcProm.then((value) => {
            if(value !== currentTest[1]){
                clearMsg();
                showMsg('本题验证失败!', true);
            }
        }).catch((reason) => {
            if(reason !== currentTest[2]){
                clearMsg();
                showMsg('本题验证失败!', true);
            }
        });
    }
}

function alwaysSucceedPromise(succeedData, timeout){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(succeedData);
        },timeout)
    })
}

function alwaysFailPromise(failReason, timeout){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject(failReason);
        },timeout)
    });
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

function registerAsyncFunc(func){
    document.addEventListener("DOMContentLoaded", (ev) => {
        testAsyncFunction(func);
    });
}