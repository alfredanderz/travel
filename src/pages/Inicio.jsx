import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        marginLeft: "-14vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{ position: "relative", width: "100%", display: "inline-block" }}
      >
        <img
          src="/1.png"
          alt="Sección 1"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            margin: 0,
            padding: 0,
            borderRadius: "12px",
          }}
        />

        {/* Contenido encima de la imagen */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "30px",
            color: "white",
            textAlign: "right",
          }}
        >
          <button
            onClick={() => navigate("/login")} // 👈 al hacer clic te lleva al login
            style={{
              backgroundColor: "#00b4d8",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              paddingTop: "12px",
              marginTop: "22px",
              marginRight: "60px",
              fontSize: "1em",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* resto de tus imágenes */}
      <img
        src="/2.png"
        alt="Sección 2"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/3.png"
        alt="Sección 3"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/4.png"
        alt="Sección 4"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/5.png"
        alt="Sección 5"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/6.png"
        alt="Sección 6"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/7.png"
        alt="Sección 7"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/8.png"
        alt="Sección 8"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/9.png"
        alt="Sección 9"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/10.png"
        alt="Sección 10"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/11.png"
        alt="Sección 11"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/12.png"
        alt="Sección 12"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/13.png"
        alt="Sección 13"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/14.png"
        alt="Sección 14"
        style={{ display: "block", width: "100%" }}
      />
      <img
        src="/15.png"
        alt="Sección 15"
        style={{ display: "block", width: "100%" }}
      />
    </div>
  );
}
