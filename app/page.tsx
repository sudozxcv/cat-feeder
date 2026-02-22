"use client";

export default function Home() {

  const openServo = async () => {
    await fetch("/api/servo", { method: "POST" });
  };

  return (
    <div style={{ padding: 50 }}>
      <button 
        onClick={openServo}
        style={{
          padding: "20px",
          fontSize: "20px"
        }}
      >
        Open Servo
      </button>
    </div>
  );
}
