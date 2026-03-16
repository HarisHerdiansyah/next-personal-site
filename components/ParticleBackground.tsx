"use client";

import { useEffect, useRef } from "react";

type TimeoutId = ReturnType<typeof setTimeout>;

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particlesContainer = containerRef.current;
    if (!particlesContainer) return;

    const getAmbientParticleCount = () => {
      if (window.innerWidth < 640) return 60;
      if (window.innerWidth < 1024) return 80;
      return 100;
    };

    const spheres = Array.from(
      document.querySelectorAll<HTMLElement>(".gradient-sphere"),
    );

    const maxInteractiveParticles = 45;
    const interactionIntervalMs = 45;

    const ambientParticles: HTMLDivElement[] = [];
    const timeoutIds = new Set<TimeoutId>();

    let interactiveParticleCount = 0;
    let pointerX = 50;
    let pointerY = 50;
    let rafPending = false;
    let frameId: number | null = null;
    let lastSpawnTime = 0;
    let destroyed = false;

    const setManagedTimeout = (callback: () => void, delayMs: number) => {
      const id = setTimeout(() => {
        timeoutIds.delete(id);
        if (!destroyed) callback();
      }, delayMs);
      timeoutIds.add(id);
      return id;
    };

    const resetParticle = (particle: HTMLDivElement) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";

      return { x: posX, y: posY };
    };

    const animateAmbientParticle = (particle: HTMLDivElement) => {
      if (destroyed || !particle.isConnected) return;

      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setManagedTimeout(() => {
        if (destroyed || !particle.isConnected) return;

        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setManagedTimeout(() => {
          animateAmbientParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    };

    const createAmbientParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle ambient";

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateAmbientParticle(particle);

      return particle;
    };

    const syncAmbientParticles = () => {
      const targetCount = getAmbientParticleCount();

      while (ambientParticles.length < targetCount) {
        ambientParticles.push(createAmbientParticle());
      }

      while (ambientParticles.length > targetCount) {
        const removed = ambientParticles.pop();
        removed?.remove();
      }
    };

    const spawnInteractiveParticle = (xPercent: number, yPercent: number) => {
      if (interactiveParticleCount >= maxInteractiveParticles || destroyed)
        return;

      const particle = document.createElement("div");
      particle.className = "particle interactive";

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${xPercent}%`;
      particle.style.top = `${yPercent}%`;
      particle.style.opacity = "0.6";

      interactiveParticleCount += 1;
      particlesContainer.appendChild(particle);

      setManagedTimeout(() => {
        if (destroyed || !particle.isConnected) return;

        particle.style.transition = "all 1.6s ease-out";
        particle.style.left = `${xPercent + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${yPercent + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";

        setManagedTimeout(() => {
          particle.remove();
          interactiveParticleCount = Math.max(0, interactiveParticleCount - 1);
        }, 1600);
      }, 10);
    };

    const handlePointerFrame = (timestamp: number) => {
      rafPending = false;

      const moveX = (pointerX / 100 - 0.5) * 8;
      const moveY = (pointerY / 100 - 0.5) * 8;

      spheres.forEach((sphere) => {
        sphere.style.translate = `${moveX}px ${moveY}px`;
      });

      if (timestamp - lastSpawnTime >= interactionIntervalMs) {
        spawnInteractiveParticle(pointerX, pointerY);
        lastSpawnTime = timestamp;
      }
    };

    const queuePointerMove = (clientX: number, clientY: number) => {
      pointerX = (clientX / window.innerWidth) * 100;
      pointerY = (clientY / window.innerHeight) * 100;

      if (!rafPending) {
        rafPending = true;
        frameId = requestAnimationFrame(handlePointerFrame);
      }
    };

    const onMove = (event: PointerEvent | MouseEvent) => {
      queuePointerMove(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      queuePointerMove(touch.clientX, touch.clientY);
    };

    syncAmbientParticles();

    if (window.PointerEvent) {
      document.addEventListener("pointermove", onMove, { passive: true });
    } else {
      document.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    window.addEventListener("resize", syncAmbientParticles, { passive: true });

    return () => {
      destroyed = true;

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      timeoutIds.forEach((id) => clearTimeout(id));
      timeoutIds.clear();

      if (window.PointerEvent) {
        document.removeEventListener("pointermove", onMove);
      } else {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("touchmove", onTouchMove);
      }

      window.removeEventListener("resize", syncAmbientParticles);

      ambientParticles.forEach((particle) => particle.remove());
      ambientParticles.length = 0;
    };
  }, []);

  return (
    <div className="gradient-background" aria-hidden="true">
      <div className="gradient-sphere sphere-1" />
      <div className="gradient-sphere sphere-2" />
      <div className="gradient-sphere sphere-3" />
      <div className="glow" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <div
        ref={containerRef}
        className="particles-container"
        id="particles-container"
      />
    </div>
  );
}
