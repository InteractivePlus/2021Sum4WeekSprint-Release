function testSerializeArrayFunc(func){
    const testData = [
        ['1', '3', '5', '7', '9'],
        ['2', '4', '6','1', '18', '8'],
        ['1', '4', '2', '3', '1', '-1' ,'182', '2'],
        ['Giao', 'yigeiWoLiGiao', '卧槽', '好家伙', '绝绝子']
    ];
    for(let i=0; i<testData.length;i++){
        if(testData[i].join(',') !== func(testData[i])){
            return false;
        }
    }
    return true;
}

function showMsg(msg, isErr){
    if(!isErr){
        document.getElementById('msgDisplayPanel').innerHTML += '<p>' + msg + '</p>';
    }else{
        document.getElementById('msgDisplayPanel').innerHTML += '<p style="color:red">' + msg + '</p>';
    }
}

function registerSerializeFunc(func){
    document.addEventListener("DOMContentLoaded", (ev) => {
        if(!testSerializeArrayFunc(func)){
            showMsg('数组字符串化验证失败!',true);
        }else{
            showMsg('数组字符串化验证成功!',false);
            showMsg('恭喜, 本题你已通过!',false);
        }
    });
}