
document.addEventListener("DOMContentLoaded", (ev) => {
    let selDiv = document.getElementById('contentPanel');
    if(selDiv !== null && selDiv.tagName === 'DIV' && selDiv.style.width==='50px' && selDiv.style.height==='100px'){
        document.getElementById('msgDisplayPanel').innerHTML += '<p>Div元素, id=contentPanel通过验证</p>';
        document.getElementById('msgDisplayPanel').innerHTML += '<p>恭喜, 本题你已通过!</p>';
    }else{
        document.getElementById('msgDisplayPanel').innerHTML += '<p style="color:red">Div元素, id=contentPanel未通过验证</p>';
    }
});
