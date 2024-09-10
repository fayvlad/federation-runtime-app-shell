import { html, css, LitElement } from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    .content {
      display: flex;
      line-height: 1.1;
      text-align: center;
      flex-direction: column;
      justify-content: center;
    }

    .content h1 {
      font-size: 3.6rem;
      font-weight: 700;
    }

    .content p {
      font-size: 1.2rem;
      font-weight: 400;
      opacity: 0.5;
    }
  `;

  render() {
    return html`
      <div class="content">
        <h1>Lit 🔥</h1>
      </div>
    `;
  }
}
