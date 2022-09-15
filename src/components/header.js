class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="menu-bar">
            <img src="src/img/calculator.png" width="120px" height="120px"/>
            <nav class="menu-nav">
                <a href="index.html">Главная</a>
                <a href="src/pages/wallet.html">Кошелек</a>
                <a href="src/pages/history.html">История</a>
                <a href="src/pages/settings.html">Настройки</a>
            </nav>
        </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);