import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">

        <div>

          <small>
            SmartCam AI · FIAP JOVI Challenge 2026
          </small>

          <p>
            Protótipo React com câmera
            do navegador, persistência
            local e IA on-device simulada.
          </p>

        </div>

        <div>

          <small>
            Funcionalidades
          </small>

          <p>
            Captura, score de qualidade,
            percepção, privacidade e
            central de conteúdo.
          </p>

        </div>

      </div>
    </footer>
  );
}