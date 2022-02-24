function main() {
  const myBox = document.getElementBy('myBox')
  myBox.addEventListener('click', () => {
      if (myBox.style.backgroundColor == 'black') {
          myBox.style.backgroundColor = 'red'
      } else {
          myBox.style.backgroundColor = 'black'
      }
  });
}