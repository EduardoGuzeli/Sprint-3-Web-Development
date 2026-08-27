import {
  useEffect,
  useRef,
  useState
} from "react";

import "./Demo.css";

const SCENES = [
  "Retrato",
  "Paisagem",
  "Noite",
  "Ação"
];

function randomInt(min, max) {
  return Math.round(
    Math.random() *
      (max - min) +
      min
  );
}

export default function Demo({
  aiEnabled,
  onSaveCapture
}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraOn, setCameraOn] =
    useState(false);

  const [scene, setScene] =
    useState("analisando…");

  const [metrics, setMetrics] =
    useState({
      foco: 0,
      luz: 0,
      estab: 0
    });

  const [lastCapture, setLastCapture] =
    useState(null);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!cameraOn || !aiEnabled) {
      return;
    }

    const timer = setInterval(() => {
      setScene(
        SCENES[
          randomInt(
            0,
            SCENES.length - 1
          )
        ]
      );

      setMetrics({
        foco: randomInt(55, 99),
        luz: randomInt(50, 99),
        estab: randomInt(60, 99)
      });
    }, 500);

    return () =>
      clearInterval(timer);
  }, [
    cameraOn,
    aiEnabled
  ]);

  useEffect(() => {
    return () => {
      streamRef.current
        ?.getTracks()
        .forEach(
          (track) =>
            track.stop()
        );
    };
  }, []);

  async function startCamera() {
    setError("");

    try {
      const stream =
        await navigator.mediaDevices.getUserMedia(
          {
            video: {
              facingMode: "user"
            },
            audio: false
          }
        );

      streamRef.current = stream;

      videoRef.current.srcObject =
        stream;

      setCameraOn(true);
    } catch {
      setError(
        "Não foi possível acessar a câmera. Verifique a permissão do navegador."
      );
    }
  }

  function stopCamera() {
    streamRef.current
      ?.getTracks()
      .forEach(
        (track) =>
          track.stop()
      );

    streamRef.current = null;

    setCameraOn(false);

    setMetrics({
      foco: 0,
      luz: 0,
      estab: 0
    });

    setScene("analisando…");
  }

  function capturePhoto() {
    const video =
      videoRef.current;

    const canvas =
      canvasRef.current;

    if (!video?.videoWidth) {
      return;
    }

    const maxWidth = 480;

    const scale = Math.min(
      1,
      maxWidth /
        video.videoWidth
    );

    canvas.width =
      Math.round(
        video.videoWidth *
          scale
      );

    canvas.height =
      Math.round(
        video.videoHeight *
          scale
      );

    const ctx =
      canvas.getContext("2d");

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const capture = {
      dataUrl:
        canvas.toDataURL(
          "image/jpeg",
          0.72
        ),

      scene:
        scene === "analisando…"
          ? "Paisagem"
          : scene,

      sharpness:
        randomInt(60, 99),

      exposure:
        randomInt(60, 99),

      composition:
        randomInt(60, 99)
    };

    capture.overall =
      Math.round(
        (
          capture.sharpness +
          capture.exposure +
          capture.composition
        ) / 3
      );

    setLastCapture(capture);
  }

  function saveCapture() {
    if (!lastCapture) {
      return;
    }

    onSaveCapture(
      lastCapture
    );

    setLastCapture(null);
  }

  const quality = Math.round(
    (
      metrics.foco +
      metrics.luz +
      metrics.estab
    ) / 3
  );

  return (
    <section
      className="section demo"
      id="demo"
    >
      <div className="wrap">

        <div className="section-head">

          <p className="eyebrow">
            Demo
          </p>

          <h2>
            Teste a câmera SmartCam.
          </h2>

          <p>
            A câmera abaixo usa a API
            do navegador. A análise de
            IA é simulada para o protótipo.
          </p>

        </div>

        <div className="viewfinder">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />

          {!cameraOn && (
            <div className="vf-empty">
              <div>
                Câmera desligada.

                <br />

                <button
                  className="btn-primary"
                  onClick={startCamera}
                >
                  Ativar câmera
                </button>
              </div>
            </div>
          )}

          {cameraOn && (
            <>
              <div className="vf-brackets" />

              <div className="vf-top-hud">

                <span className="scene-chip">

                  <span className="dot" />

                  {aiEnabled
                    ? scene
                    : "modo manual"}

                </span>

                <span>
                  30fps · &lt;1s/frame
                </span>

              </div>

              <div className="vf-suggestion">
                {aiEnabled
                  ? "Sugestão de enquadramento"
                  : "IA desligada"}
              </div>

              <div className="vf-bottom-hud">

                {Object.entries(
                  metrics
                ).map(
                  ([key, value]) => (
                    <div
                      className="meter"
                      key={key}
                    >

                      <span>
                        {key}{" "}
                        {aiEnabled
                          ? value
                          : "--"}
                      </span>

                      <i
                        style={{
                          width: `${
                            aiEnabled
                              ? value
                              : 0
                          }%`
                        }}
                      />

                    </div>
                  )
                )}

                <strong>
                  qualidade:{" "}
                  {aiEnabled
                    ? `${quality}%`
                    : "--"}
                </strong>

              </div>
            </>
          )}

        </div>

        <canvas
          ref={canvasRef}
          className="hidden-canvas"
        />

        <div className="capture-row">

          {cameraOn && (
            <button
              className="btn-ghost"
              onClick={stopCamera}
            >
              Desligar câmera
            </button>
          )}

          <button
            className="btn-shutter"
            onClick={capturePhoto}
            disabled={!cameraOn}
            aria-label="Capturar foto"
          />

          {cameraOn && (
            <button
              className="btn-ghost"
            >
              Modo manual
            </button>
          )}

        </div>

        {error && (
          <p className="camera-error">
            {error}
          </p>
        )}

        {lastCapture && (
          <div className="result">

            <h3>
              Score de qualidade
            </h3>

            <p className="result-sub">
              Cena:{" "}
              {lastCapture.scene}
              {" · "}
              calculado localmente
              após a captura
            </p>

            <div className="score-grid">

              <div>
                <strong>
                  {lastCapture.sharpness}
                </strong>

                <span>
                  Nitidez
                </span>
              </div>

              <div>
                <strong>
                  {lastCapture.exposure}
                </strong>

                <span>
                  Exposição
                </span>
              </div>

              <div>
                <strong>
                  {lastCapture.composition}
                </strong>

                <span>
                  Composição
                </span>
              </div>

              <div>
                <strong>
                  {lastCapture.overall}
                </strong>

                <span>
                  Geral
                </span>
              </div>

            </div>

            <div className="result-actions">

              <button
                className="btn-primary"
                onClick={saveCapture}
              >
                Salvar
              </button>

              <button
                className="btn-secondary"
                onClick={capturePhoto}
              >
                Recapturar
              </button>

              <button
                className="btn-secondary"
                onClick={() =>
                  setLastCapture(null)
                }
              >
                Descartar
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}