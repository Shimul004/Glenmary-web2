const mainContent = document.querySelector( '.main-content');
window.addEventListener( 'scroll', ()=> {
    if( this.scrollY > 300 ){
        mainContent.classList.add( 'slidedown' );
    }else{
        mainContent.classList.remove( 'slidedown' );
    }
} );