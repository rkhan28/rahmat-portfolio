import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  BuilderScene — background layer version.
  Polished LEGO minifigure with real studs, gradient bricks, and motion
  trails, restyled to sit subtly BEHIND the hero content (no solid card,
  low opacity, scaled down). Drop into App.jsx hero as a background element.
*/

/* ─── LEGO BRICK ─── */
function Brick({ color = "#f59e0b", w = 72, h = 40, studs = 2 }) {
  const studArr = Array.from({ length: studs });
  return (
    <div className="relative" style={{ width: w, height: h }}>
      <div
        className="absolute inset-0 rounded-[6px]"
        style={{
          backgroundColor: color,
          boxShadow: `
            0 4px 0 0 color-mix(in srgb, ${color} 70%, black),
            0 6px 12px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.25),
            inset 0 -1px 0 rgba(0,0,0,0.15)
          `,
          border: `1px solid color-mix(in srgb, ${color} 60%, black)`,
        }}
      />
      <div className="absolute -top-[5px] left-0 right-0 flex justify-center gap-[8px]">
        {studArr.map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: 14,
              height: 8,
              backgroundColor: color,
              boxShadow: `
                0 -1px 2px rgba(255,255,255,0.2),
                inset 0 -2px 3px rgba(0,0,0,0.25),
                0 2px 3px rgba(0,0,0,0.3)
              `,
              border: `1px solid color-mix(in srgb, ${color} 55%, black)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── LEGO MINIFIGURE ─── */
function LegoMinifig({ carrying = false, facingRight = true, phase = "walk" }) {
  const armL =
    phase === "wave"
      ? [0, -25, 0, -25, 0]
      : carrying
      ? [15, 8, 15]
      : [20, -15, 20];

  const armR =
    phase === "wave"
      ? [-20, -40, -20]
      : carrying
      ? [-50, -40, -50]
      : [-20, 15, -20];

  const legL = phase === "walk" ? [18, -18, 18] : [0, 0, 0];
  const legR = phase === "walk" ? [-18, 18, -18] : [0, 0, 0];
  const bodyBounce = phase === "walk" ? [0, -3, 0] : [0, 0, 0];

  return (
    <motion.div
      animate={{ scaleX: facingRight ? 1 : -1 }}
      transition={{ duration: 0.2 }}
      className="relative"
      style={{ width: 100, height: 160 }}
    >
      <motion.div
        animate={{ scaleX: [1, 0.88, 1], opacity: [0.35, 0.2, 0.35] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 70,
          height: 10,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.5), transparent 70%)",
        }}
      />

      <motion.div
        animate={{ y: bodyBounce }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{ width: 100, height: 155 }}
      >
        {/* HEAD */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: 52,
            height: 48,
            top: 0,
            borderRadius: "10px 10px 8px 8px",
            background: "linear-gradient(175deg, #f0dc82 0%, #d4b94e 100%)",
            boxShadow: `
              0 4px 0 0 #b8963a,
              0 6px 10px rgba(0,0,0,0.35),
              inset 0 1px 0 rgba(255,255,255,0.3),
              inset 0 -1px 0 rgba(0,0,0,0.1)
            `,
            border: "1px solid #b8963a",
          }}
        >
          <div
            className="absolute rounded-full bg-[#1a1a1a]"
            style={{ width: 5, height: 5, left: 14, top: 18 }}
          />
          <div
            className="absolute rounded-full bg-[#1a1a1a]"
            style={{ width: 5, height: 5, right: 14, top: 18 }}
          />
          <svg
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: 26 }}
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
          >
            <path
              d="M3 3C5 7 8 9 10 9C12 9 15 7 17 3"
              stroke="#1a1a1a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[4px] rounded-full"
            style={{
              width: 16,
              height: 6,
              background: "linear-gradient(180deg, #f0dc82, #d4b94e)",
              boxShadow:
                "inset 0 -1px 2px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.3)",
              border: "1px solid #b8963a",
            }}
          />
        </div>

        {/* TORSO */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: 60,
            height: 46,
            top: 48,
            borderRadius: "4px 4px 2px 2px",
            background: "linear-gradient(175deg, #5ba3d9 0%, #3a7bc2 100%)",
            boxShadow: `
              0 4px 0 0 #2a5a94,
              0 6px 10px rgba(0,0,0,0.3),
              inset 0 1px 0 rgba(255,255,255,0.2)
            `,
            border: "1px solid #2a5a94",
          }}
        />

        {/* LEFT ARM */}
        <motion.div
          animate={{ rotate: armL }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute origin-top"
          style={{
            width: 18,
            height: 44,
            left: 8,
            top: 50,
            borderRadius: "6px 6px 8px 8px",
            background: "linear-gradient(175deg, #f0dc82 0%, #d4b94e 100%)",
            boxShadow: "0 3px 0 0 #b8963a, 0 4px 8px rgba(0,0,0,0.3)",
            border: "1px solid #b8963a",
          }}
        >
          <div
            className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 10,
              height: 10,
              background: "#d4b94e",
              border: "1px solid #b8963a",
              boxShadow: "0 2px 3px rgba(0,0,0,0.3)",
            }}
          />
        </motion.div>

        {/* RIGHT ARM */}
        <motion.div
          animate={{ rotate: armR }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute origin-top"
          style={{
            width: 18,
            height: 44,
            right: 8,
            top: 50,
            borderRadius: "6px 6px 8px 8px",
            background: "linear-gradient(175deg, #f0dc82 0%, #d4b94e 100%)",
            boxShadow: "0 3px 0 0 #b8963a, 0 4px 8px rgba(0,0,0,0.3)",
            border: "1px solid #b8963a",
          }}
        >
          <div
            className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 10,
              height: 10,
              background: "#d4b94e",
              border: "1px solid #b8963a",
              boxShadow: "0 2px 3px rgba(0,0,0,0.3)",
            }}
          />
        </motion.div>

        {/* CARRIED BRICK */}
        <AnimatePresence>
          {carrying && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="absolute"
              style={{ right: -16, top: 55 }}
            >
              <Brick color="#5ba3d9" w={44} h={28} studs={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* LEFT LEG */}
        <motion.div
          animate={{ rotate: legL }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute origin-top"
          style={{
            width: 22,
            height: 48,
            left: 24,
            top: 93,
            borderRadius: "3px 3px 5px 5px",
            background: "linear-gradient(175deg, #4a5568 0%, #2d3748 100%)",
            boxShadow: "0 4px 0 0 #1a202c, 0 5px 8px rgba(0,0,0,0.4)",
            border: "1px solid #1a202c",
          }}
        />

        {/* RIGHT LEG */}
        <motion.div
          animate={{ rotate: legR }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
          className="absolute origin-top"
          style={{
            width: 22,
            height: 48,
            right: 24,
            top: 93,
            borderRadius: "3px 3px 5px 5px",
            background: "linear-gradient(175deg, #4a5568 0%, #2d3748 100%)",
            boxShadow: "0 4px 0 0 #1a202c, 0 5px 8px rgba(0,0,0,0.4)",
            border: "1px solid #1a202c",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── MOTION TRAIL (ghost afterimages) ─── */
function MotionTrail({ x, show }) {
  if (!show) return null;
  return (
    <>
      {[0.12, 0.08, 0.05].map((opacity, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[30px]"
          style={{
            left: 0,
            x: x - (i + 1) * 40,
            opacity,
            filter: `blur(${(i + 1) * 2}px)`,
            pointerEvents: "none",
          }}
        >
          <div style={{ width: 100, height: 150 }}>
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                width: 52,
                height: 48,
                top: 0,
                borderRadius: "10px 10px 8px 8px",
                background: "#d4b94e",
              }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                width: 60,
                height: 46,
                top: 48,
                borderRadius: 4,
                background: "#3a7bc2",
              }}
            />
            <div
              className="absolute"
              style={{
                width: 22,
                height: 48,
                left: 24,
                top: 93,
                borderRadius: 4,
                background: "#2d3748",
              }}
            />
            <div
              className="absolute"
              style={{
                width: 22,
                height: 48,
                right: 24,
                top: 93,
                borderRadius: 4,
                background: "#2d3748",
              }}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}

/* ─── BRICK PILE (source or build) ─── */
function BrickPile({ bricks, label, align = "left" }) {
  return (
    <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
      <div
        className="mb-3 text-[9px] font-bold uppercase"
        style={{ color: "rgba(148,163,184,0.6)", letterSpacing: "0.25em" }}
      >
        {label}
      </div>
      <div
        className="mb-2 rounded-[4px]"
        style={{
          width: 90,
          height: 12,
          background: "linear-gradient(175deg, #374151, #1f2937)",
          boxShadow: "0 3px 0 #111827, 0 5px 10px rgba(0,0,0,0.4)",
          border: "1px solid #111827",
        }}
      />
      <div className="flex flex-col gap-[6px]">
        {bricks.map((brick, i) => (
          <motion.div
            key={`${label}-${i}`}
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            style={{ marginLeft: i % 2 ? 14 : 0 }}
          >
            <Brick
              color={brick.color}
              w={brick.w || 56}
              h={brick.h || 30}
              studs={brick.studs || 2}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN SCENE — background layer ─── */
export default function BuilderScene() {
  const [step, setStep] = useState(0);

  const cycle = useMemo(
    () => [
      { x: 30, carrying: false, facingRight: true, wallCount: 1, phase: "walk" },
      { x: 80, carrying: true, facingRight: true, wallCount: 1, phase: "walk" },
      { x: 220, carrying: true, facingRight: true, wallCount: 1, phase: "walk" },
      { x: 260, carrying: false, facingRight: false, wallCount: 2, phase: "walk" },
      { x: 160, carrying: false, facingRight: false, wallCount: 2, phase: "walk" },
      { x: 80, carrying: true, facingRight: true, wallCount: 2, phase: "walk" },
      { x: 220, carrying: true, facingRight: true, wallCount: 2, phase: "walk" },
      { x: 260, carrying: false, facingRight: false, wallCount: 3, phase: "walk" },
      { x: 180, carrying: false, facingRight: true, wallCount: 3, phase: "wave" },
    ],
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev + 1) % cycle.length);
    }, 1500);
    return () => clearInterval(id);
  }, [cycle.length]);

  const current = cycle[step];

  const sourceBricks = [
    { color: "#e85d75", studs: 2 },
    { color: "#5ba3d9", studs: 2 },
    { color: "#d4a236", studs: 2 },
  ];

  const buildColors = ["#d4a236", "#5ba3d9", "#e85d75", "#56b886"];
  const wallBricks = Array.from({ length: current.wallCount }).map((_, i) => ({
    color: buildColors[i % buildColors.length],
    studs: 2,
  }));

  return (
    // Background layer: no card, transparent, scaled down, low opacity,
    // sits behind hero content. pointer-events-none so it never blocks clicks.
    <div
      className="pointer-events-none absolute right-[-1rem] top-[7rem] z-0 hidden origin-top-right scale-[0.78] opacity-[0.55] xl:block"
      style={{ width: 460, height: 380 }}
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* ambient glow only — no solid panel background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 300px 200px at 25% 40%, rgba(91,163,217,0.10), transparent),
              radial-gradient(ellipse 250px 180px at 75% 65%, rgba(232,93,117,0.08), transparent),
              radial-gradient(ellipse 200px 150px at 50% 80%, rgba(212,162,54,0.06), transparent)
            `,
            filter: "blur(8px)",
          }}
        />

        {/* floor line */}
        <div
          className="absolute left-8 right-8"
          style={{
            bottom: 44,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)",
          }}
        />

        {/* source pile */}
        <div className="absolute bottom-[56px] left-7">
          <BrickPile bricks={sourceBricks} label="source" align="left" />
        </div>

        {/* build wall */}
        <div className="absolute bottom-[56px] right-7">
          <BrickPile bricks={wallBricks} label="build" align="right" />
        </div>

        {/* motion trail ghosts */}
        <MotionTrail
          x={current.x}
          show={current.phase === "walk" && current.carrying}
        />

        {/* walking character */}
        <motion.div
          animate={{ x: current.x }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-[30px] left-0"
        >
          <LegoMinifig
            carrying={current.carrying}
            facingRight={current.facingRight}
            phase={current.phase}
          />
        </motion.div>
      </div>
    </div>
  );
}