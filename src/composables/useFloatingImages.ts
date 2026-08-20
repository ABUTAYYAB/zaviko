import gsap from 'gsap';

const useFloatingImages = (...refs: any[]) => {
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.025;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Skip on touch/mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;

    const { movementX, movementY } = e;
    xForce = Math.max(-15, Math.min(15, (movementX || 0) * speed));
    yForce = Math.max(-15, Math.min(15, (movementY || 0) * speed));

    if (requestAnimationFrameId === null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    const multipliers = [0.15, 0.45, 0.25, 0.6, 0.35];

    refs.forEach((ref, index) => {
      if (ref && ref.current) {
        const mult = multipliers[index % multipliers.length];
        gsap.set(ref.current, {
          x: `+=${xForce * mult}`,
          y: `+=${yForce * mult}`,
          overwrite: 'auto',
        });
      }
    });

    if (Math.abs(xForce) < 0.005) xForce = 0;
    if (Math.abs(yForce) < 0.005) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    } else {
      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    }
  };

  return { manageMouseMove };
};

export default useFloatingImages;
