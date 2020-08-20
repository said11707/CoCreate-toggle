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





document.addEventListener("click",function(e){
    if(!e.target.getAttribute('data-toggle'))
     return;
    let elem = e.target;
    let values = elem.dataset['toggle'].split(',').map(function(x){return x.trim()});
    let target = elem.dataset['toggle_attribute'] ? elem.dataset['toggle_attribute'] : 'class';
    let toggle_tmp = elem.dataset['toggle_tmp'] ?  elem.dataset['toggle_tmp'] : '';
    let toggle_closest = elem.dataset['toggle_closest'];
    let elem_change = elem;
    
    let tmp_val = get_value(values,toggle_tmp);
    if(typeof(toggle_closest) != 'undefined'){
        elem_change = elem.closest(toggle_closest);
    }
    if(change_values(target,toggle_tmp,values,tmp_val,elem,elem_change))
        return
    
    elem.dataset['toggle_tmp'] = tmp_val;
    //console.log("nextValue ",tmp_val)
    
});//end click



function change_values(target,toggle_tmp,values,tmp_val,elem,elem_change){
    console.log("elem_change",elem_change)
    if(target=='class' && toggle_tmp!=''){
            elem_change.classList.remove(toggle_tmp)
            if(values.length==1){
                elem.dataset['toggle_tmp'] = '';
                return true
            }
        }
        if(target=='class' ){
            console.log("Target ",target)
            //&& tmp_val!=''
            if(tmp_val!='')
                elem_change.classList.add(tmp_val)
        }else{
           // elem.dataset[target] = tmp_val;    
         //  domEditor({ target : elem, method : 'setAttribute','property':target ,'value': tmp_val })
         elem_change.setAttribute(target, tmp_val);
        }
        return false
}

function get_value(values,val){
    let my_val = values[0];
    if(values.length>1 && val != ''){
        let tmp = values.indexOf(val);
        if((tmp+1)<values.length)
            my_val = values[tmp+1];
    }
    return my_val;
}