import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaStore,
  FaUsers,
  FaCog,
  FaBook,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();

  const menuItems = [
    {
      key: "inicio",
      icon: <FaHome style={styles.icon} />,
      label: "Inicio",
      path: "/",
    },
    {
      key: "catalogos",
      icon: <FaBook style={styles.icon} />,
      label: "Catálogos",
      subItems: [{ key: "productos", label: "Productos", path: "/productos" }],
    },
    {
      key: "configuracion",
      icon: <FaCog style={styles.icon} />,
      label: "Configuración",
      subItems: [
        { key: "perfiles", label: "Perfiles", path: "/perfiles" },
        { key: "empresa", label: "Empresa", path: "/empresa" },
        { key: "usuarios", label: "Usuarios", path: "/usuarios" },
      ],
    },
    {
      key: "tienda",
      icon: <FaStore style={styles.icon} />,
      label: "Tienda",
      subItems: [
        {
          key: "aprobar-venta",
          label: "Aprobar Venta",
          path: "/aprobar-venta",
        },
        {
          key: "reporte-ventas",
          label: "Reporte Ventas",
          path: "/reporte-ventas",
        },
      ],
    },
    {
      key: "socios",
      icon: <FaUsers style={styles.icon} />,
      label: "Socios",
      subItems: [
        {
          key: "lista-socios",
          label: "Lista de Socios",
          path: "/lista-socios",
        },
        {
          key: "aprobar-membresia",
          label: "Aprobar Membresía",
          path: "/membresia",
        },
        { key: "cxp-corte", label: "CXP Corte", path: "/cxp-corte" },
        { key: "reporte-cxp", label: "Reporte CXP", path: "/reporte" },
      ],
    },
  ];

  const toggleExpand = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  return (
    <div style={{ ...styles.container, width: open ? 260 : 70 }}>
      <div style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <div style={styles.hamburger} onClick={() => setOpen(!open)}>
            <FaBars />
          </div>
          {open && <span style={styles.logo}>M-N PRAEIS</span>}
        </div>

        {/* Menú */}
        <ul style={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.key}>
              <div
                style={{
                  ...styles.menuItem,
                  backgroundColor:
                    location.pathname === item.path
                      ? "rgba(250, 204, 21, 0.25)"
                      : "transparent",
                  color: location.pathname === item.path ? "#fff" : "#e5e5e5",
                }}
                onClick={() => {
                  if (item.subItems) toggleExpand(item.key);
                }}
              >
                {item.icon}
                {open && (
                  <span style={styles.menuText}>
                    {item.path ? (
                      <Link to={item.path} style={styles.link}>
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </span>
                )}
                {item.subItems && open && (
                  <span style={styles.arrow}>
                    {expanded === item.key ? "▼" : "▶"}
                  </span>
                )}
              </div>

              {item.subItems && expanded === item.key && (
                <ul style={styles.subMenu}>
                  {item.subItems.map((sub) => (
                    <li
                      key={sub.key}
                      style={{
                        ...styles.subMenuItem,
                        backgroundColor:
                          location.pathname === sub.path
                            ? "rgba(250, 204, 21, 0.25)"
                            : "transparent",
                        color: location.pathname === sub.path ? "#fff" : "#aaa",
                      }}
                    >
                      <Link to={sub.path} style={styles.link}>
                        {open && sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div style={styles.footer}>{open ? "© 2025" : "©"}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    zIndex: 1000,
    transition: "width 0.3s ease",
    overflow: "hidden",
  },
  sidebar: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 10,
    background: "linear-gradient(to bottom, #000, #1a1a1a, #2a2a2a)",
    color: "#e5e5e5",
    boxShadow: "2px 0 10px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
  },
  logoContainer: {
    display: "flex",
    paddingLeft: 20,
    marginRight: 10,
    alignItems: "center",
    padding: "20px 15px",
    borderBottom: "1px solid #444",
  },
  hamburger: {
    fontSize: 20,
    color: "#facc15",
    cursor: "pointer",
    marginRight: 10,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
    marginLeft: 10,
    color: "#facc15",
  },
  menu: {
    listStyle: "none",
    padding: "20px 10px",
    margin: 0,
    flex: 1,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 15px",
    borderRadius: 6,
    cursor: "pointer",
    transition: "background 0.3s ease",
    fontSize: 14,
    marginBottom: 5,
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 14,
  },
  subMenu: {
    listStyle: "none",
    margin: 0,
    paddingLeft: 20,
  },
  subMenuItem: {
    padding: "8px 15px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 13,
    transition: "background 0.3s ease",
    marginBottom: 3,
  },
  icon: {
    color: "#facc15",
    fontSize: 16,
    minWidth: 20,
    textAlign: "center",
  },
  arrow: {
    fontSize: 12,
    marginLeft: 8,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    padding: 15,
    color: "#aaa",
    borderTop: "1px solid #444",
    marginBottom: 20,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    width: "100%",
  },
};
