function validate(event){
    
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    let message=document.getElementById("message");
    let mes=document.getElementById("mes");
    const emailtest=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passtest=/^[\d]{6,}$/;
    let valid=true;
    if(email=="" || !emailtest.test(email)){
        
       message.innerHTML="please enter a valid email";
       valid=false;

    }
    
    if(password==""||!passtest.test(password)){
        
        mes.innerHTML="please enter a valid password of atleast 6 digits";
        valid=false;
    }
    if(!valid){
        event.preventDefault();
    }
    
}