$( document ).ready(() => {

	/* When minus is clicked, decrease life total by one */
	var subtractLife = function( self, life ) {
		var lifeTotal = self.siblings( '.life-total' ).text()
		
		lifeTotal = lifeTotal - parseInt(life)

		self.siblings( '.life-total' ).text( lifeTotal )
	}

	var addLife = function( self, life ) {
		var lifeTotal = self.siblings( '.life-total' ).text()

		lifeTotal = parseInt( lifeTotal )
		lifeTotal = lifeTotal + life

		self.siblings( '.life-total' ).text( lifeTotal )
	}
	
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

  $( '.change-life' ).bind( 'touchstart', function() {
    var self = $( this )
    self.addClass( 'active' )

    var timerName = 'changeLifeTimer' + self.attr('data-id')
    var addOne = 'changeLifeAddOne' + self.attr('data-id')

    window[ addOne ] = true

    window[ timerName ] = setInterval(function() {
      if ( self.hasClass('right') ) {
        addLife( self, 5 )
      } else {
        subtractLife( self, 5 )
      }
      window[ addOne ] = false
    }, 750)
  })

  $( '.change-life' ).bind( 'touchend', function() {
    var self = $( this )
    self.removeClass( 'active' )

    var timerName = 'changeLifeTimer' + self.attr('data-id')
    var addOne = 'changeLifeAddOne' + self.attr('data-id')

    clearInterval( window[ timerName ] )

    if ( window[ addOne ] ) {
      if ( self.hasClass('right') ) {
        addLife( self, 1 )
      } else {
        subtractLife( self, 1 )
      }
    }
  })  

  document.addEventListener('contextmenu', event => event.preventDefault());

})