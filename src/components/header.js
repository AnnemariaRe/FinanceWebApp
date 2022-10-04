class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      var path = window.location.pathname;
      var page = path.split("/").pop();

      if (page == "index.html") {
        this.innerHTML = `
        <header>
        <div class="menu-bar">
            <img src="./src/img/calculator.png" width="120px" height="120px"/>
            <nav class="menu-nav">
                <a href="./index.html">Главная</a>
                <a href="./src/pages/wallet.html">Кошелек</a>
                <a href="./src/pages/history.html">История</a>
            </nav>
        </div>
        </header>
      `;} else {
        this.innerHTML = `
        <header>
        <div class="menu-bar">
            <img src="./../img/calculator.png" width="120px" height="120px"/>
            <nav class="menu-nav">
                <a href="./../../index.html">Главная</a>
                <a href="./../pages/wallet.html">Кошелек</a>
                <a href="./../pages/history.html">История</a>
            </nav>
        </div>
        </header>
      `;
      }
    }
  }
  
  customElements.define('header-component', Header);