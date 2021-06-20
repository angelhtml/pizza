	document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '.splide', {
            type     : 'loop',
            height   : '300px',
            autoWidth: true,
            focus    : 'center',
            autoplay: true,
        } ).mount();
	} );



var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}