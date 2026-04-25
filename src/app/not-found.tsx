"use client";

import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="page">
      <div className="content">
        <p className="tag">🚀 LOST</p>

        <h2 className="error-text">Error</h2>
        <h1 className="code">404</h1>

        <h3 className="title">
          File <span>Not</span> Found
        </h3>

        <p className="desc">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved to another galaxy.
        </p>

        <div className="buttons">
          <button onClick={() => (window.location.href = "/")}>
            Go Back Home
          </button>
          <button className="secondary" onClick={() => (window.location.href = "/#work")}>
            Explore
          </button>
        </div>

        <input
          className="search"
          placeholder="Search for something..."
        />

        <div className="nav">
          <span onClick={() => (window.location.href = "/")} style={{ cursor: "pointer" }}>🏠 Home</span>
          <span onClick={() => (window.location.href = "/#work")} style={{ cursor: "pointer" }}>🧭 Explore</span>
          <span onClick={() => (window.location.href = "/#contact")} style={{ cursor: "pointer" }}>❓ Help Center</span>
        </div>
      </div>

      {/* 3D Floating Image */}
      <div
        className="astronaut"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <img src="/astronaut.png" alt="astronaut" />
      </div>

      <style jsx>{`
        .page {
          height: 100vh;
          width: 100%;
          background: radial-gradient(circle at 30% 30%, #1a0b2e, #05010a);
          color: white;
          display: flex;
          justify-content: space-between;
          padding: 0px;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
        }

        .content {
        padding: 100px;
          max-width: 500px;
        }

        .tag {
          color: #a78bfa;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .error-text {
          font-size: 58px;
          color: #c4b5fd;
          margin: 0;
        }

        .code {
          font-size: 120px;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(90deg, #a78bfa, #7c3aed);
          -webkit-background-clip: text;
          color: transparent;
        }

        .title {
          font-size: 32px;
          margin: 10px 0;
        }

        .title span {
          color: #8b5cf6;
        }

        .desc {
          color: #aaa;
          margin-bottom: 30px;
        }

        .buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 20px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(90deg, #7c3aed, #9333ea);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.05);
        }

        .secondary {
          background: transparent;
          border: 1px solid #7c3aed;
        }

        .search {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #333;
          background: #0b0613;
          color: white;
          margin-bottom: 30px;
        }

        .nav {
          display: flex;
          gap: 20px;
          color: #aaa;
          font-size: 14px;
        }

        .astronaut {
          width: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease-out;
        }

        .astronaut img {
          width: 100%;
          filter: drop-shadow(0 0 30px rgba(124, 58, 237, 0.5));
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @media (max-width: 900px) {
          .page {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .astronaut {
            margin-top: 40px;
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
}
