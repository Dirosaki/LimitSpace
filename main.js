if('serviceWorker' in navigator){
    window.addEventListener('load', () =>{
        navigator.serviceWorker.register('/service-worker.js').then(res => {
            console.info('Service Worker Registrado', res);
        }).catch(erro => {
            console.error('ERRO:', erro);
        });
    });
}