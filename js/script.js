$( document ).ready(() => {

	/* When minus is clicked, decrease life total by one */
	$('.left').click(function() {
		var lifeTotal = $( this ).siblings( '.life-total' ).text()
		
		lifeTotal = lifeTotal - 1

		$( this ).siblings( '.life-total' ).text( lifeTotal )
	})

	$('.right').click(function() {
		var lifeTotal = $( this ).siblings( '.life-total' ).text()

		lifeTotal = parseInt( lifeTotal )
		lifeTotal = lifeTotal + 1

		$( this ).siblings( '.life-total' ).text( lifeTotal )
	})
	
	$('#refresh-button').click(function() {
		$( '.life-total' ).text( '20' )
  		$( 'body' ).removeClass( 'main-menu-open' )
	})

	$( '#die-roll_button' ).click(function() {
  	
  		$( '.die-roll__number' ).each(function() {
        var self = $( this )

  			var randomNumberInterval = setInterval(function() {
          var value = Math.floor(Math.random() * 6) + 1
          self.text( value )
        }, 300 )

  			setTimeout(function() {
          clearInterval( randomNumberInterval )
	  		}, 2000 )

  		})

  		$( '.die-roll' ).show()
  		$( '.main-menu' ).hide()
  		$( 'body' ).removeClass( 'main-menu-open' )

  		setTimeout(function() {
  			$( '.die-roll' ).hide()
  			$( '.main-menu' ).show()
  		}, 3500 )

  	})

  	$( '.main-menu__button' ).click(function() {
  		$( 'body' ).toggleClass( 'main-menu-open' )
  	})
})