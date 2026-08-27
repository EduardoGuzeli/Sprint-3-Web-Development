import "./Problem.css";

export default function Problem() {
  const problems = [
    [
      "01",
      "Enquadramento",
      "Nem sempre o usuário sabe se a cena está bem posicionada."
    ],
    [
      "02",
      "Foco e luz",
      "Uma foto pode parecer boa e ainda estar desfocada ou mal exposta."
    ],
    [
      "03",
      "Decisão",
      "O usuário precisa descobrir rapidamente se vale a pena recapturar."
    ]
  ];

  return (
    <section
      className="section problem"
      id="problem"
    >
      <div className="wrap">

        <div className="section-head">

          <p className="eyebrow">
            Problema
          </p>

          <h2>
            Fotografar não deveria
            depender de tentativa e erro.
          </h2>

          <p>
            O SmartCam transforma
            sinais técnicos da câmera
            em orientações simples antes
            e depois do clique.
          </p>

        </div>

        <div className="problem-grid">

          {problems.map(
            ([number, title, text]) => (
              <article
                className="problem-card"
                key={number}
              >

                <span>
                  {number}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
}