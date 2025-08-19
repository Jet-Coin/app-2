const manage = {

    password:"275",

    
};



//=======================================================================
 const loginButton = document.getElementById("log-send");
        const password = document.getElementById("password");
        loginButton.addEventListener("click",function(){if(password.value == manage.password){
            document.getElementById("cover").style.display = "none";
            document.getElementById("log").style.display = "none";

        }else{return;}
    })

// ================================================================================================

        let i = 0;
        const select = document.getElementById("select");
        const select2 = document.getElementById("select2");
        const button1 = document.getElementById("button+");
        const button2 = document.getElementById("button-");    
        const amount = document.getElementById("amount");
        const submit = document.getElementById("submit");


    
    const userOm = document.getElementById("user-omar");
    const userabd = document.getElementById("user-abd");
    const userMoh = document.getElementById("user-moh");
    const userG = document.getElementById("user-G");
        button1.addEventListener("click",increase);
        button2.addEventListener("click",decrease);
        submit.addEventListener("click",send);
        const amounts = {
            om:0,
            abd:0,
            moh:0,
            G:0

            }
    
            function check(){
                /*let  x = prompt("enter password: ");
            if(x == manage.password){send();}else{ alert("access denied ! ");return;}*/



            }
        
        function send(){
            
            if(select.value == "Choose"){return;}
            if(select2.value == "Choose"){return;}
            switch(select.value){
                
                case "Mohamed":

                amounts.moh  -=i;
                break;

                case "Omar":
                amounts.om -= i;
                break;

                case "Gaith":
                amounts.G -= i;
                break;

                case "Abdullah":
                amounts.abd -= i;
                break;

                case "system":
                break;
            }

            switch(select2.value){
                 
                

                case "Mohamed":

                amounts.moh  +=i;
                break;

                case "Omar":
                amounts.om += i;
                break;

                case "Gaith":
                amounts.G += i;
                break;

                case "Abdullah":
                amounts.abd += i;
                break;
            }

            save();
            update();
            
        }

setInterval(()=>{console.log(amounts)},1000);
        function save(){
            localStorage.setItem("Omar",amounts.om);
            localStorage.setItem("Abdullah",amounts.abd);
            localStorage.setItem("Gaith",amounts.G);
            localStorage.setItem("Mohamed",amounts.moh);
            
        }

        function restore(){ 
            userOm.innerHTML = localStorage.getItem("Omar");
            userG.innerHTML = localStorage.getItem("Gaith");
            userMoh.innerHTML = localStorage.getItem("Mohamed");
            userabd.innerHTML = localStorage.getItem("Abdullah");

            amounts.om = Number(localStorage.getItem("Omar"));
            amounts.G = Number(localStorage.getItem("Gaith"));
            amounts.moh = Number(localStorage.getItem("Mohamed"));
            amounts.abd = Number(localStorage.getItem("Abdullah"));

        }
        function update(){ 
            
            userOm.innerHTML = amounts.om;
            userG.innerHTML = amounts.G;
            userMoh.innerHTML = amounts.moh;
            userabd.innerHTML = amounts.abd;
        }
        function increase(){ i = i + 1; amount.innerHTML = i;}
        function decrease(){ if(i==0){return} i = i - 1; amount.innerHTML = i;}