class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-bar">
                <p>автор: <a href="https://t.me/annmarry05">@annmarry05</a></p>
                <p>© 2022 all rights reserved</p>
                <span id="load-time"></span>  
            </div>
        </footer>
      `;
    }
}
  
customElements.define('footer-component', Footer);