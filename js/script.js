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
	})

	$( '#die-roll_button' ).click(function() {
  	
  		$( '.die-roll__number' ).each(function() {
  			var value = Math.floor(Math.random() * 6) + 1

  			$( this ).text( value )
  		})

  		$( '.die-roll' ).show()

  		setTimeout(function() {
  			$( '.die-roll' ).hide()
  		}, 3000 )

  	})
})