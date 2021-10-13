const menuBtn = document.getElementById('menu-btn');
const menuBar = document.getElementById('menu-bar')
const closeBtn = document.getElementById('close-menu')
const incress = document.getElementById('incress');
const decress = document.getElementById('decrese')
const qteNull = document.getElementById('qte-null');
const ok = document.getElementById('ok')




export function ShowMenu(){
    hideMenu();
    // show the menu bar 
    menuBtn.addEventListener('click',()=>{
        menuBar.classList.add('show')
        document.body.classList.add('dark')
    })


}
ShowMenu();

function hideMenu(){
    // close the menu bar
    closeBtn.addEventListener('click', ()=>{
        menuBar.classList.remove('show')
        document.body.classList.remove('dark')
    })

}

// -------------------------------------------
// Incresse and decrese the the qte of shose
//--------------------------------------------


export function IncreAndDecrse(){
    let i = 0;
    decress.addEventListener('click',()=>{
    if(i>0){
        i --;
        document.getElementById('qte').value = i;
    }
    else{
        document.getElementById('qte').value =0;
    }
    })
    
    incress.addEventListener('click',()=>{
        i ++;
        document.getElementById('qte').value =i;
    })
    
    }



// Delete the item add in basket
//--------------------------
export function deleteItem(icon){
    icon.addEventListener('click', ()=>{
        icon.parentElement.parentElement.remove();
    })
}



//Remove aler for Zero qtes

export function removeAlert(){
    ok.addEventListener('click',()=>{
        qteNull.classList.remove('on')
    })

}