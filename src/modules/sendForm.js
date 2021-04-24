const sendForm = ()=>{

    const errorMessage = "Что-то пошло не так",
    loadMessage = "Отправка данных",
    successMasage = "Отправлено!";

    const formControl = document.querySelector(".form-control");
    const required = document.querySelector(".required");
    const feedback = document.querySelector(".feedback");
    const form = document.getElementById("form");
    const callback = document.getElementById("callback");
    const stausMessage = document.createElement("div");
    const modalOverlay  = document.querySelector(".modal-overlay");
 


    callback.append(stausMessage);
    
    formControl.addEventListener('input', ()=>{
        formControl.value = formControl.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    required.addEventListener('input', ()=>{
        required.value = required.value.replace(/[а-яА-Яa-zA-ZёЁ,-.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        if(required.value.length > 13){
            required.value = required.value.slice(0, (required.value.length-1));
        }
    })

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        if(formControl.value.length >= 2 && required.value.length >=7){
            stausMessage.textContent = loadMessage;
            const formData =new FormData(form);
            let body = {};
            for(let val of formData.entries()){
                body[val[0]] = val[1];
            }
            const post = postData(body)
                post
                .then((response)=>{
                    if(response.status !== 200){
                        throw new Error("status network not 200"); 
                    }  
                 stausMessage.textContent = successMasage;
                  })
                  .then(()=>{
                    setTimeout(()=>{
                        stausMessage.textContent = "";
                        callback.style.display = "none";
                        modalOverlay.style.display = "none";
                    },3000);
                  })
                  .catch(()=>{
                    stausMessage.textContent = errorMessage;
                    setTimeout(()=>{
                        stausMessage.textContent = "";
                    },4000);
                  })
            formControl.value = "";
            required.value = "";

        }
    });

    const postData = (body)=>{
        return fetch('./server.php',{
            method: 'POST',
            headers:{
                'Content-Type': 'multipart/json'
            },
            body: JSON.stringify(body)

        });
    }

    
};


export default sendForm;