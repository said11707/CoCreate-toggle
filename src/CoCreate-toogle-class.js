let list_data_toogles = document.querySelectorAll('[data-toggle]');

list_data_toogles.forEach(elem=>{
    
    let value = elem.dataset['toggle']
    if(!elem.classList.contains(value)){
        elem.classList.add(value)
    }
    
    elem.addEventListener("click",function(e){
        let value = elem.dataset['toggle'];
        if(elem.classList.contains(value)){
            elem.classList.remove(value)
        }else{
            elem.classList.add(value)
        }
    });
    
});