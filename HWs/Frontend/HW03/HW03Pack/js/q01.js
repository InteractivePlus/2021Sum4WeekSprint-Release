function performTestOnSYFunc(func){
    const testSets = [
        [1, 0],
        [10, 0],
        [20, 0],
        [40, -1],
        [-20, 50],
        [-20.19283, -129989.293],
        [-1290.120989, 190289308.129],
        [12389, 129389.12389],
        [-12389089.12389, 1382989]
    ];
    for(let i=0; i<testSets.length; i++){
        if(func(...testSets[i]) !== Math.min(...testSets[i])){
            return false
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

function registerSYFunc(func){
    document.addEventListener("DOMContentLoaded", (ev) => {
        if(!performTestOnSYFunc(func)){
            showMsg('三元运算符验证失败!',true);
        }else{
            showMsg('三元运算符验证成功!',false);
            showMsg('恭喜, 本题你已通过!',false);
        }
    });
}



