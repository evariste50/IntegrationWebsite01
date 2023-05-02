
    const product1 = document.getElementById("container");
    product1.addEventListener("click", ()=>{
        const active =  document.querySelector(".sub-menu");
        console.log(active);
        active.style.visibility ='visible';
    });

    const desactive = document.getElementById("close");
    desactive.addEventListener("click", ()=>{
        const active =  document.querySelector(".sub-menu");
        console.log(active);
        active.style.visibility ='hidden';
    })
    
    const dropMenu = document.querySelector(".menu-phone");
    dropMenu.addEventListener("click", ()=>{
        const active =  document.querySelector(".header-mobile");
        console.log(active);
        active.style.display ='flex';
    })
    const mobDevice = document.getElementById("product-mobile");
    mobDevice.addEventListener("click",()=>{
        const active =  document.querySelector(".sub-menu-phone");
        console.log(active);
        active.style.visibility ='visible';
    })

    
    const mobclose = document.getElementById("close-mob");
    mobclose.addEventListener("click",()=>{
        const active =  document.querySelector(".sub-menu-phone");
        console.log(mobclose);
        console.log(active);
        active.style.visibility ='hidden';
        
    })

   const body = document.querySelector(".sub-menu_close_header");
    body.addEventListener("click",()=>{
        const active =  document.querySelector(".header-mobile");
        console.log(mobclose);
        active.style.display= 'none';
        
    })
