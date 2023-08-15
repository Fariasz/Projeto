function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/assets/avatar.png')
  }

  const alt = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito, usando óculos e camisa preta, sem barba, fundo rosa e azul.'
    )
  } else {
    img.setAttribute(
      'alt',
      'Foto de Mayk Brito, usando óculos e camisa preta, barba e fundo amarelo.'
    )
  }
}
