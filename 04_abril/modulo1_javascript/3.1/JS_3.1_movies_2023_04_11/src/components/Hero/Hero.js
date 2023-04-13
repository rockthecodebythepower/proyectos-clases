import "./style.css"

import {Title} from "../Title/Title"
import {Text} from "../Text/Text"
import {Cta} from "../Cta/Cta"
import {Image} from "../Image/Image"

export const Hero = () => `
  <div class="hero">
    ${Title("yellowGreen", "Home")}
    ${Image("https://picsum.photos/200/300", "picsum", "rounded")}
    ${Text(
      "Si eres un amante del cine, ¡estás en el lugar correcto! Aquí encontrarás todo lo que necesitas para disfrutar al máximo del séptimo arte. Desde críticas y reseñas de películas hasta trailers y noticias de la industria, nuestra aplicación tiene todo lo que necesitas para mantenerte al día con las últimas novedades."
    )}
    ${Text(
      "Pero eso no es todo. También ofrecemos funciones únicas que te ayudarán a disfrutar aún más de tus películas favoritas. ¿Quieres crear tu propia lista de películas pendientes de ver? ¿O tal vez estás buscando una forma fácil de compartir tus reseñas con amigos y familiares? ¡Nuestra aplicación lo hace posible!"
    )}
    ${Text(
      "Entonces, ¿qué estás esperando? Descarga nuestra aplicación hoy mismo y descubre por qué es la mejor forma de disfrutar de tus películas favoritas. ¡Nos vemos en el cine!"
    )}
    ${Cta("Go to movies", "/movies", "purple")}
  </div>


`
