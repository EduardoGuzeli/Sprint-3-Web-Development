import "./Perception.css";

export default function Perception({
  aiEnabled
}) {
  const metrics = [
    ["FOCO", "90%"],
    ["LUZ", "83%"],
    ["ESTAB.", "94%"],
    ["CENA", "Retrato"]
  ];

  return (
    <section
      className="section perception"
      id="perception"
    >
      <div className="wrap perception-grid">

        <div>

          <p className="eyebrow">
            Perception
          </p>

          <h2>
            O que a câmera percebe.
          </h2>

          <p>
            A camada de percepção
            traduz a imagem em sinais
            úteis para o usuário.
            No protótipo, esses valores
            são simulados para representar
            a futura IA on-device.
          </p>

        </div>

        <div
          className={`perception-panel ${
            !aiEnabled ? "off" : ""
          }`}
        >

          <div className="perception-status">

            <span className="dot" />

            {aiEnabled
              ? "IA analisando"
              : "IA desligada"}

          </div>

          <div className="metric-grid">

            {metrics.map(
              ([label, value]) => (
                <div
                  className="metric"
                  key={label}
                >

                  <span>
                    {label}
                  </span>

                  <strong>
                    {aiEnabled
                      ? value
                      : "--"}
                  </strong>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}