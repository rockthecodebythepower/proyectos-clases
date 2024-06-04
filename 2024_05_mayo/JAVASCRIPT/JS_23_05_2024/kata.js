// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let deleteElement = document.getElementsByClassName('fn-remove-me')
deleteElement.forEach((element) => {
  element.remove()
})

/* El HTML: 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./index.js" defer></script>
    <title>Ejercicio 3</title>
  </head>
  <body>
    <p class="fn-remove-me">Bye bye</p>
    <div data-function="printHere"></div>
  </body>
</html> */