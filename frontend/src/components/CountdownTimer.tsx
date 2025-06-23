import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2025-08-01T00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div style={styles.expired}>⏳ Час вийшов!</div>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.countdown}>
        <TimeBlock label="days" value={timeLeft.days} />
        <TimeBlock label="hours" value={timeLeft.hours} />
        <TimeBlock label="minutes" value={timeLeft.minutes} />
        <TimeBlock label="seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

interface TimeBlockProps {
  label: string;
  value: number;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ label, value }) => (
  <div style={styles.block}>
    <div style={styles.number}>
      {value.toString().padStart(2, "0")}
    </div>
    <div style={styles.label}>{label}</div>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    background: "linear-gradient(to bottom, #1E1E1E, #0005)",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  countdown: {
    display: "flex",
    gap: "15px",
  },
  block: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    fontFamily: "monospace",
  },
  number: {
    backgroundColor: "#169976",
    color: "#F7F9FA",
    fontSize: "25px",
    fontWeight: 700,
    width: "9vmin",
    height: "9vmin",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
  },
  label: {
    marginTop: "6px",
    fontSize: "15px",
    color: "#169976",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  },
  expired: {
    color: "#f00",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "center",
    padding: "20px",
  },
};

export default CountdownTimer;
