//name
    var nome = document.getElementById("name");
    var alert_nome = document.getElementById("obrigatorio_name")
        nome.addEventListener("change", ()=>{ 
            if(nome.value!=""){
            
            nome.classList.add("okay")
            alert_nome.classList.remove("alert")
            nome.classList.remove("block")
            }
            else{
                nome.classList.remove("okay")
                
            }
        })
        
//email
    var email = document.getElementById("email");
    var alert_email = document.getElementById("obrigatorio_email");
    email.addEventListener("change", ()=>{ 
        if(email.value!=""){
        email.classList.remove("block")
        email.classList.add("okay")
        alert_email.classList.remove("alert")
        }
        else{
            email.classList.remove("okay")
        }
    })
//number
    var number = document.getElementById("number");
    var alert_number = document.getElementById("obrigatorio_number");
    number.addEventListener("change", ()=>{ 
        if(number.value!=""){
        number.classList.remove("block")
        number.classList.add("okay")
        alert_number.classList.remove("alert")
        }
        else{
            number.classList.remove("okay")
        }
    })
//msg
    var msg = document.getElementById("msg");
    var alert_msg = document.getElementById("obrigatorio_msg");
    msg.addEventListener("change", ()=>{ 
        if(msg.value!=""){
        msg.classList.remove("block")
        msg.classList.add("okay")
        alert_msg.classList.remove("alert")
        }
        else{
            msg.classList.remove("okay")
        }
    })


function test() {
    nametest()
    emailtest()
    testnumber()
    testmsg()
}



function nametest() {

    if (nome.value == "") {
        nome.classList.add("block")
        alert_nome.classList.add("alert")
        nome.classList.remove("okay")
        return
    }
}
function emailtest() {
    if (email.value == "") {
        email.classList.add("block")
        alert_email.classList.add("alert")
        email.classList.remove("okay")
        return
    }
}
function testnumber(){
    

    if(number.value == ""){
        number.classList.add("block")
        alert_number.classList.add("alert")
        number.classList.remove("okay")
        return
    }
}
function testmsg(){
    

    if(msg.value == ""){
        msg.classList.add("block")
        alert_msg.classList.add("alert")
        msg.classList.remove("okay")
        return
    }
  
}