import "./CountryCard.css";

const CountryCard = (country) => {
	return `
    <h2>${country.name}</h2>
    <h3>${country.capital}</h3>
    <p>${country.flag}</p>
    <p class="currency">🪙 ${country.currency}</p>
    <p class="population">👥 ${country.population}</p>
    `;
};

export default CountryCard;
