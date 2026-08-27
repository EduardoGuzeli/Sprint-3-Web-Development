import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    [
      "01",
      "Aponte",
      "Abra a câmera e enquadre a cena."
    ],
    [
      "02",
      "Analise",
      "A IA identifica cena, foco, luz e estabilidade."
    ],
    [
      "03",
      "Capture",
      "Faça a foto quando os indicadores estiverem bons."
    ],
    [
      "04",
      "Organize",
      "Salve o resultado e acompanhe a qualidade."
    ]
  ];

  return (
    <section
      className="section how"
      id="how-it-works"
    >
      <div className="wrap">

        <p className="eyebrow">
          How it works
        </p>

        <h2>
          Do enquadramento ao resultado.
        </h2>

        <div className="steps">

          {steps.map(
            ([number, title, text]) => (
              <article
                className="step"
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