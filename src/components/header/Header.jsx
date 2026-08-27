import "./Header.css";

export default function Header({
  aiEnabled,
  onToggleAI
}) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">

        <a
          className="brand"
          href="#top"
        >
          <span className="brand-mark" />

          <span>
            SnapFlow AI

            <small>
              on-device · sprint 3
            </small>
          </span>
        </a>

        <nav className="nav">
          <a href="#demo">
            Câmera
          </a>

          <a href="#mvp">
            Conteúdo
          </a>

          <a href="#perception">
            Percepção
          </a>

          <a href="#problem">
            Problema
          </a>
        </nav>

        <button
          className="ai-toggle"
          type="button"
          aria-pressed={aiEnabled}
          onClick={onToggleAI}
        >
          <span
            className={`switch ${
              aiEnabled ? "on" : ""
            }`}
          />

          IA{" "}
          {aiEnabled
            ? "ativa"
            : "desligada"}
        </button>

      </div>
    </header>
  );
}