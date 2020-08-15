let list_data_toogles = document.querySelectorAll('[data-toggle]');

list_data_toogles.forEach(elem=>{
    
    elem.addEventListener("click",function(e){
        let value = elem.dataset['toggle'];
        let toggle_closest = elem.dataset['toggle_closest'];
        if(typeof(toggle_closest) != 'undefined'){
            let list_toggle_closest = elem.closest(toggle_closest);
            if(list_toggle_closest)
                if(Array.isArray(list_toggle_closest))
                    list_toggle_closest.forEach(el=>{
                        ToogleClass(el,value);
                    });
                else
                    ToogleClass(list_toggle_closest,value);
        }else{
            ToogleClass(elem,value);
        }
    });
    
});

function ToogleClass(elem,clase){
    if(elem.classList.contains(clase))
        elem.classList.remove(clase)
    else
        elem.classList.add(clase)
}