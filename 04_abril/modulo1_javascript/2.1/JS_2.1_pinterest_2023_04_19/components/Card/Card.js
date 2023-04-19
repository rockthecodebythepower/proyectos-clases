import "./Card.css"

export const template = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.image})">
    <div class="info">
        <div class="save-btn">
            <button>Guardar</button>
        </div>
        <div class="links">
            <a href="#null">${item.link}</a>
            <div>
                <a href=${item.image} target="_blank" class="links-icon">
                    <img src="/icons/upload.svg" alt="Upload icon"/>
                </a>
                <a href="#null" class="links-icon">
                    <img src="/icons/more.svg" alt="More icon"/>
                </a>    
            </div>
        </div>
    </div>
    </li>
    `
}
