import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
    >
      <div className="wrap hero-inner">

        <div className="hero-copy">

          <p className="eyebrow">
            Captura com IA · US01–US05
          </p>

          <h1>
            Aponte. A cena, o
            enquadramento e o foco
            são lidos por você.
          </h1>

          <p className="hero-text">
            A câmera detecta o tipo de
            cena, sugere enquadramento
            e avalia foco, exposição e
            estabilidade em tempo real
            — tudo processado localmente,
            sem depender de internet.
          </p>

          <a
            className="btn-primary hero-button"
            href="#demo"
          >
            Testar a câmera
          </a>

        </div>

        <div className="hero-card">
          <span>
            SMARTCAM / LIVE
          </span>

          <strong>
            30fps
          </strong>

          <small>
            &lt;1s/frame · análise local
          </small>
        </div>

      </div>
    </section>
  );
}