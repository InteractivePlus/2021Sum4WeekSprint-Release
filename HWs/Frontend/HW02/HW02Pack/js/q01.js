
document.addEventListener("DOMContentLoaded", (ev) => {
    let selDiv = document.getElementById('selectDiv');
    if(selDiv !== null && selDiv.tagName === 'DIV'){
        document.getElementById('msgDisplayPanel').innerHTML += '<p>Div元素, id=selectDiv通过验证</p>';
        let divChilds = selDiv.children;
        if(divChilds.length !== 1 || divChilds[0].id !== 'selectParagraph' || divChilds[0].tagName !== 'P'){
            document.getElementById('msgDisplayPanel').innerHTML += '<p style="color:red">p元素, id=selectParagraph并未验证成功</p>';
        }else{
            document.getElementById('msgDisplayPanel').innerHTML += '<p>p元素, id=selectParagraph通过验证</p>';
            document.getElementById('msgDisplayPanel').innerHTML += '<p>恭喜你, 本题你已经通过</p>';
        }
    }else{
        document.getElementById('msgDisplayPanel').innerHTML += '<p style="color:red">Div元素, id=selectDiv并未验证成功</p>';
    }
});
