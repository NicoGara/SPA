// Este escroll infinito esta hecho por mi  y funcionaba solo para home, en el video de jonmircha modificamos algunas otras cosas y puede que deje de funcionar. Lo unico que quedaba hacer era ejecutar la funcion en el Router en la parte de home


import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export function scrollInfinite() {
    let page=2,
        perPage=10
    window.addEventListener("scroll",e=>{
        const {scrollTop,clientHeight,scrollHeight}=document.documentElement;
        

        if (scrollTop + clientHeight >= scrollHeight) {
            document.querySelector(".loader").style.display="block";
            page++

            ajax({
                url:`${api.POSTS}&page=${page}&per_page=${perPage}`,
                cbSuccess:(props)=>{
                    console.log(props);
                    let html=""
                    props.forEach(post=> html += PostCard(post));
                    document.querySelector(".loader").style.display="none";
                    document.getElementById("main").innerHTML+=html
                }
            })

        }
    })
}