export const printRoutes = (routesToPrint, elementoPadre$$) => {
  
    for (const route of routesToPrint) {
        
        const li$$ = document.createElement("li");
        const a$$ = document.createElement("a");

        a$$.textContent = route.path;
        a$$.href = "#"

        a$$.addEventListener("click", route.funcion);

        li$$.appendChild(a$$);
        elementoPadre$$.appendChild(li$$)

    }
  
};