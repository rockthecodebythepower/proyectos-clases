import "./Weapon.css"

export const pintarWeapon = (weapon) => {

  return `
    <div class="weapon">
        <h3>${weapon.displayName}</h3>
        <img src="${weapon.skins[0].displayIcon}"/>
    </div>
    `;

};