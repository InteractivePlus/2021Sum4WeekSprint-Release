function generateAsyncFunc(throwError,returnData,errorData, timeout){
    function getServerData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(throwError){
                    reject(errorData);
                }else{
                    resolve(returnData);
                }
            }, timeout);
        })
    }
    return getServerData;
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

function maySucceedMayFailPromise(succeedData, failReason, timeout, succeedChance){
    if(Math.random() <= succeedChance){
        return alwaysSucceedPromise(succeedData,timeout);
    }else{
        return alwaysFailPromise(failReason,timeout);
    }
}

function testAsyncFunction(func){
    for(let i=0; i < testErrors.length; i++){
        func(alwaysFailPromise(testErrors[i],2000));
    }
    for(let i=0; i < testDatas.length; i++){
        func(alwaysSucceedPromise(testDatas[i],2000));
    }
}

let allReceivedDatas = [];
let allReceivedErrors = [];
const testDatas = [{}, 'afijijiw', 'ancabuvuemoakodwkpaojfiwo', 'adjwijaihc98ya98u9832uifncanouam'];
const testErrors = ['err1', 'err128', 'aidiwoj', 'faifjiwo', 'faijwifojif', 'faiwjfiojai','dayuyu$2jdj'];

function checkReceivedFinish(){
    console.log(allReceivedDatas, allReceivedErrors);
    console.log(testDatas, testErrors);
    if(allReceivedDatas.length !== testDatas.length || allReceivedErrors.length !== testErrors.length){
        return false;
    }
    let receivedErrorsTestIndexes = [];
    for(let i=0;i<allReceivedErrors.length;i++){
        let indexOfErrInTest = testErrors.indexOf(allReceivedErrors[i]);
        if(indexOfErrInTest === -1){
            return false;
        }
        if(receivedErrorsTestIndexes.indexOf(indexOfErrInTest) !== -1){
            return false;
        }
        receivedErrorsTestIndexes.push(indexOfErrInTest);
    }
    let receivedDatasTestIndexes = [];
    for(let i=0;i<allReceivedDatas.length;i++){
        let indexOfDataInTest = testDatas.indexOf(allReceivedDatas[i]);
        if(indexOfDataInTest === -1){
            return false;
        }
        if(receivedDatasTestIndexes.indexOf(indexOfDataInTest) !== -1){
            return false;
        }
        receivedDatasTestIndexes.push(indexOfDataInTest);
    }
    return true;
}

function errored(reason){
    allReceivedErrors.push(reason);
    if(!checkReceivedFinish()){
        showMsg('本题验证失败...请等待所有请求完成, 若5秒后仍未成功, 请检查代码',true);
    }else{
        clearMsg();
        showMsg('恭喜, 本题您已通过!',true);
    }
}

function dataRcv(data){
    allReceivedDatas.push(data);
    if(!checkReceivedFinish()){
        showMsg('本题验证失败...请等待所有请求完成, 若5秒后仍未成功, 请检查代码',true);
    }else{
        clearMsg();
        showMsg('恭喜, 本题您已通过!',true);
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

function registerAsyncFunc(func){
    document.addEventListener("DOMContentLoaded", (ev) => {
        testAsyncFunction(func);
    });
}



