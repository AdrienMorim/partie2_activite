/*======================================================================*\
 *                     VERSION AUTOMATIQUE by MORIM ADRIEN              *
\*======================================================================*/
$(function annivOneClick() {
    
    // on cache les éléments
    $('.item-enter').hide();
    // On defini la class active au click
    $('#zero').addClass('item-active'); 
    
    // Au click sur le premier <p>
    $('#zero').on('click', function() { // au click sur un item 
        
        // On rend invisible le bouton click
        $('#click').hide();
        
        // On lance l'affichage en cascade des <p>
        $('#1').show(function() {
            $('#1').addClass('item-active').css('background-color','#00ffbf');
            $('#zero').removeClass('item-active');
            
            $('#2').show(1500, function() {
                $('#2').addClass('item-active').css('background-color','#f2fc5f');
                $('#1').addClass('item-enter-active').removeClass('item-active item-enter');
                
                $('#3').show(1500, function() {
                    $('#3').addClass('item-active').css('background-color','#ff007b');
                    $('#2').addClass('item-enter-active').removeClass('item-active item-enter');
                    
                    // On modifie le background à la fin de l'animation
                    setTimeout(function(){
                        $('#3').addClass('item-enter-active').removeClass('item-active item-enter');
                        $('body').css({'background-color': '#e74c3c',
                                       'background-image': 'url("img/anniversary.png")', 
                                       'background-repeat': 'no-repeat', 
                                       'background-position': 'top'});
                        $('.item-enter-active').text('Happy birthday').css('color', '#FFF');
                    }, 2000);
                });  
            });
        });
    });
});
