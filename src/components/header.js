class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <div class="menu-bar">
            <img src="src/img/budget_icon.png" width="80px" height="80px"/>
            <h1>Finance app</h1>
            <nav class="menu-nav">
                <ul class="menu-list">
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="src/pages/wallet.html">Кошелек</a></li>
                    <li><a href="src/pages/history.html">История</a></li>
                    <li><a href="src/pages/settings.html">Настройки</a></li>
                </ul>
            </nav>
        </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);