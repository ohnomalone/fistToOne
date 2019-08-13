var fist = "images/fistToOne_logo-0.svg"
var one = "images/fistToOne_logo-1.svg"
var colors = ["#5F5EBC", "#8FD9D9", "#F2C948", "#D93B18", "#03A678"];
var flickCounter = 0;

$('.main__img-fist').on('click', () => {
  changeFist();
})

const changeFist = () => {
  if ($('.main__img-fist').attr('src') == fist) {
    changeColor();
    countFlicks();
    $('.main__img-fist').attr('src', one)
  } else {
    changeColor();
    $('.main__img-fist').attr('src', fist)
  }
}

const changeColor = () => {
  if ($('.main__img-fist').attr('src') == fist) {
    $('body').css('background-color', getRandomColor())
  } else {
    $('body').css('background-color', "#FFFFFF")
  }
}

const getRandomColor = () => {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const countFlicks = () =>  {
  flickCounter++;
}