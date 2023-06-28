import "./Main.css";

const Main = () => {
  const main = document.createElement("main");
  main.innerHTML = `
  <h2>Merchandising</h2>
  <ul class="merch">
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-TridentTee-FrontBack-600x600.png" alt="Sleep Token Trident Tee"/>
      <h3>Sleep Token Trident Tee</h3>
      <p>£25.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-Rain.LongSleeve-FrontBack-1-600x600.png" alt="Sleep Token Rain Long Sleeve"/>
      <h3>Rain Long Sleeve</h3>
      <p>£30.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-Ascendanism-Crewneck-1-600x600.png" alt="Ascensionism Crewneck"/>
      <h3>Ascensionism Crewneck</h3>
      <p>£50.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-ChartHoodie-Grey-Front2BBack-600x600.png" alt="Tmbte Collection Hoodie"/>
      <h3>Tmbte Collection Hoodie</h3>
      <p>£55.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-Navy.Beanie-1-600x600.png" alt="Embroidered St Beanie"/>
      <h3>Embroidered St Beanie</h3>
      <p>£18.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/05/SleepToken-Black.Socks_-600x600.png" alt="St emblem socks"/>
      <h3>St emblem socks</h3>
      <p>£15.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/04/Sleeptoken-Sleeptoken-DYWTYLM-Tee-600x600.png" alt="Dywtlm tee"/>
      <h3>Dywtlm tee</h3>
      <p>£25.00</p>
    </li>
    <li>
      <img src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/04/Sleeptoken-5-panel-Cap-600x600.png" alt="Emboridered panel cap"/>
      <h3>Emboridered panel cap</h3>
      <p>£20.00</p>
    </li>
    
  </ul>
  `;
  document.body.appendChild(main);
};

export default Main;
