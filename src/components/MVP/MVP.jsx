import {
  useMemo,
  useState
} from "react";

import "./MVP.css";

const SCENES = [
  "Todos",
  "Retrato",
  "Paisagem",
  "Noite",
  "Ação"
];

function formatDate(timestamp) {
  return new Date(
    timestamp
  ).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }
  );
}

export default function MVP({
  items,
  onTogglePrivacy,
  onDeleteItem
}) {
  const [
    sceneFilter,
    setSceneFilter
  ] = useState("Todos");

  const filteredItems =
    useMemo(() => {
      if (
        sceneFilter === "Todos"
      ) {
        return items;
      }

      return items.filter(
        (item) =>
          item.scene ===
          sceneFilter
      );
    }, [
      items,
      sceneFilter
    ]);

  const avgScore =
    items.length
      ? Math.round(
          items.reduce(
            (sum, item) =>
              sum +
              item.overall,
            0
          ) / items.length
        )
      : 0;

  return (
    <section
      className="section mvp"
      id="mvp"
    >
      <div className="wrap">

        <div className="section-head">

          <p className="eyebrow">
            MVP · Central de conteúdo
          </p>

          <h2>
            O que já funciona
            no protótipo.
          </h2>

          <p>
            As capturas salvas ficam
            no navegador usando
            localStorage, sem backend.
          </p>

        </div>

        <div className="mvp-stats">

          <div>
            <strong>
              {items.length}
            </strong>

            <span>
              Fotos
            </span>
          </div>

          <div>
            <strong>
              {avgScore}%
            </strong>

            <span>
              Score médio
            </span>
          </div>

          <div>
            <strong>
              {
                items.filter(
                  (item) =>
                    item.isPrivate
                ).length
              }
            </strong>

            <span>
              Privadas
            </span>
          </div>

          <div>
            <strong>
              Local
            </strong>

            <span>
              Persistência
            </span>
          </div>

        </div>

        <div className="mvp-toolbar">

          <div>
            {SCENES.map(
              (scene) => (
                <button
                  key={scene}
                  className={
                    sceneFilter ===
                    scene
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSceneFilter(
                      scene
                    )
                  }
                >
                  {scene}
                </button>
              )
            )}
          </div>

          <span>
            {
              filteredItems.length
            }{" "}
            item(ns)
          </span>

        </div>

        <div className="gallery-grid">

          {filteredItems.length ===
          0 ? (
            <div className="empty-state">
              Nenhuma foto salva ainda.
              Faça uma captura na seção
              Demo.
            </div>
          ) : (
            filteredItems.map(
              (item) => (
                <article
                  className={`g-item ${
                    item.isPrivate
                      ? "private"
                      : ""
                  }`}
                  key={item.id}
                >

                  <div className="g-thumb">

                    <img
                      src={item.dataUrl}
                      alt={`Foto ${item.scene}`}
                    />

                    <span>
                      {item.scene}
                    </span>

                    <button
                      onClick={() =>
                        onTogglePrivacy(
                          item.id
                        )
                      }
                      title="Alternar privacidade"
                    >
                      {item.isPrivate
                        ? "🔒"
                        : "🔓"}
                    </button>

                  </div>

                  <div className="g-meta">

                    <strong>
                      {item.overall}%
                    </strong>

                    <small>
                      {formatDate(
                        item.createdAt
                      )}
                    </small>

                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      onDeleteItem(
                        item.id
                      )
                    }
                  >
                    Excluir
                  </button>

                </article>
              )
            )
          )}

        </div>

      </div>
    </section>
  );
}