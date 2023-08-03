export function ContactForm() {
    const d=document,
     $from=d.createElement("form"),
     $styles=d.getElementById("dynamic-styles")

    $from.classList.add("contact-form")
    
    $styles.innerHTML=`.contact-form{
        --form-ok-color: #4caf50;
        --form-error-color:#f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    
    .contact-form input,
    .contact-form textarea{
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }
    
    
    .contact-form textarea{
        resize: none;
    }
    
    .formulario_texto_exito, 
    .contact-form legend{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    
        margin: 50px;
    }
    
    
    .contact-form input, 
    .contact-form textarea{
        font-size: 1rem;
        font-family: sans-serif;
    }
    
    
    .formulario_boton{
        width: 50%;
        font-weight: bold;
        font-size: 1rem;
        display: block;
        padding: 0.5rem;
        margin: auto;
    }
    
    .contact-form *::placeholder{
        color: black;
    }
    
    .contact-form [required]:valid{
        border: thin solid var(--form-ok-color);
    }
    
    .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }
    
    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }
    
    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    
    .none{
        display: none;
    }
    
    
    @keyframes show-message {
        0%{
            visibility: hidden;
            opacity: 0;
        }
        100%{
            visibility: visible;
            opacity: 1;
        }
        
    }`
    $from.innerHTML=` <legend>Envianos tus comentarios</legend>

    

     <!-- nombre y apellido -->
     <input type="text" name="nombre" placeholder="Escribe tu Nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
     
     
     
     
     <!-- Email -->
     <input type="email" class="formulario_input" name="email"  placeholder="Escribe tu correo" required title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$">



     <!-- titulo  -->
     <input  type="titulo" class="formulario_input" name="titulo" placeholder="Titulo" required title="El asunto es requerido">


     <!-- mensaje  -->
     <textarea type="mensaje" class="formulario_input" name="mensaje" placeholder="Deja aquí tu mensaje..." cols="30" rows="10" data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres" required></textarea>

     
     
     
     
     
     <!-- mensaje de confirmacion -->
     <button type="submit" class="formulario_boton">Enviar</button>

     <p class="contact-form-response none" id="formulario_texto_exito">formulario enviado de manera correcta</p>

     <img class="contact-form-loader none" src="app/assets/oval.svg" />
     `
     
    function validacionFormulario() {

        const $form= d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]")
    
        // console.log($inputs);
    
        $inputs.forEach(input => {
            const $span=d.createElement("span")
            $span.id=input.name;
            $span.textContent=input.title;
            $span.classList.add("contact-form-error", "none")
            input.insertAdjacentElement("afterend", $span)
        });
    
        d.addEventListener("keyup",(e)=>{
            if (e.target.matches(".contact-form [required]")) {
                let $input=e.target,
                pattern= $input.pattern || $input.dataset.pattern;
    
                if (pattern && $input.value!=="") {
                    let regex = new RegExp(pattern)
                    
                    return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
                    
                    
                }
                if (!pattern) {
                    return $input.value===""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
                }
            }
        })
    
        d.addEventListener("submit",e=>{
            e.preventDefault();
            alert("enviando formulario")
    
            const $loader=d.querySelector(".contact-form-loader"),
            $response=d.querySelector(".contact-form-response")
    
            $loader.classList.remove("none")
    
            fetch("https://formsubmit.co/ajax/nicolasgaravaglia@hotmail.com",{
                method: "POST",
                body:new FormData(e.target)
            })
             .then(res=>res.json())
             .then(json=>{
                console.log(json);
                $loader.classList.add("none")
                $response.classList.remove("none")
                $response.innerHTML=`<p>${json.message}</p>`
                $form.reset()
             })
             .catch(err=>{
                console.log(err);
                let message=err.statusText||"Ocurrio un error al enviar, intenta nuevamente"
                $response.innerHTML= `Error ${err.status}: ${message}`;
    
                $response.innerHTML=`<p>${json.message}</p>`
             }).finally(()=>{
                setTimeout(() =>$response.classList.add("none"), 3000);
             })
        })
    }
    

    setTimeout(() => validacionFormulario(), 100);
    
     return $from
}