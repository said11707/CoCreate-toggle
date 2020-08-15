// let list_data_toogles = document.querySelectorAll('[data-toggle]');

// list_data_toogles.forEach(elem=>{
    
//     elem.addEventListener("click",function(e){
//         let value = elem.dataset['toggle'];
//         let toggle_closest = elem.dataset['toggle_closest'];
//         if(typeof(toggle_closest) != 'undefined'){
//             let list_toggle_closest = elem.closest(toggle_closest);
//             if(list_toggle_closest)
//                 if(Array.isArray(list_toggle_closest))
//                     list_toggle_closest.forEach(el=>{
//                         ToogleClass(el,value);
//                     });
//                 else
//                     ToogleClass(list_toggle_closest,value);
//         }else{
//             ToogleClass(elem,value);
//         }
//     });
    
// });

// function ToogleClass(elem,clase){
//     if(elem.classList.contains(clase))
//         elem.classList.remove(clase)
//     else
//         elem.classList.add(clase)
// }



let list_data_toogles = document.querySelectorAll('[data-toggle]');

list_data_toogles.forEach(elem=>{
    elem.addEventListener("click",function(e){
        let values = elem.dataset['toggle'].split(',').map(function(x){return x.trim()});
        let target = elem.dataset['toggle_attribute'] ? elem.dataset['toggle_attribute'] : 'class';
        let toggle_tmp = elem.dataset['toggle_tmp'] ?  elem.dataset['toggle_tmp'] : '';
        if(target=='class' && toggle_tmp!=''){
            elem.classList.remove(target)
        }
        let tmp_val = get_value(values,toggle_tmp);
        if(target=='class' && tmp_val!=''){
            elem.classList.add(tmp_val)
        }else{
           // elem.dataset[target] = tmp_val;    
         //  domEditor({ target : elem, method : 'setAttribute','property':target ,'value': tmp_val })
         elem.setAttribute(target, tmp_val);
        }
        elem.dataset['toggle_tmp'] = tmp_val;
        console.log("nextValue ",tmp_val)
        
    });//end click
});

function get_value(values,val){
    let my_val = values[0];
    if(values.length>1 && val != ''){
        let tmp = values.indexOf(val);
        if((tmp+1)<values.length)
            my_val = values[tmp+1];
    }
    return my_val;
}