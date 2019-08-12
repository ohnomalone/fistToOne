$(document).ready( () => {
  var fist = "images/fistToOne_logo-0.svg"
  var one = "images/fistToOne_logo-1.svg"

  $('.main__img-fist').on('click', () => {
    console.log('click')
    if ($('.main__img-fist').attr('src') == fist) {
      $('.main__img-fist').attr('src', one)
    } else {
      $('.main__img-fist').attr('src', fist)
    }
  })

})


