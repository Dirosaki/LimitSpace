let loading = document.querySelector('.loading');
let loaded = false;
let container = document.querySelector('.container');

window.addEventListener('load', setTimeout(() => {
    loaded = true;
    if(loaded) {
        loading.style.display = 'none'
        container.style.display = 'flex';
    }else{
        loading.style.display = 'flex'
        container.style.display = 'none';
    }
}, 3000)) ;