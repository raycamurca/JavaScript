const btTabs = document.querySelectorAll(".bt");

btTabs.forEach(bt =>{
    bt.addEventListener("click", ()=>{
        btTabs.forEach(el =>{
            el.classList.remove("ativo");
        })
        bt.classList.add("ativo");


        const conteudos = document.querySelectorAll(".conteudo");

        conteudos.forEach(conteudo =>{
            conteudo.classList.remove("show");
        })

        const conteudoId = bt.getAttribute("content-id");

        const conteudo = document.getElementById(conteudoId);

        conteudo.classList.add("show");
    })
})