
let breakpoint = 650;

function displayAlert() {
  alert('Butonul a fost apasat')
}

$(document).on('DOMContentLoaded', () => {
  let windowWidth = $(window).width();
  let buttonElement = $('.btn');

  if (windowWidth >= breakpoint) {
    buttonElement.on('click', displayAlert);
  }

  $(window).on('resize', () => {
    let windowWidth = $(window).width();

    if (windowWidth >= 650) {
      buttonElement.on('click', displayAlert);
    } else {
      buttonElement.of('click', displayAlert);
    }
  })
})

