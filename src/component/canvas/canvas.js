import { useEffect } from "react";
export default function Canvas() {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    console.log(canvas);
    const ctx = canvas.getContext("2d");
    let pa = [];
    canvas.width = window.innerWidth;
    canvas.height = 80;
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = 80;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${parseInt(Math.random() * 256)},50%,50%)`;
      }
      update() {
        if (this.x < 5 || this.x > canvas.width - 5) this.speedX = -this.speedX;
        if (this.y < 5 || this.y > canvas.height - 5)
          this.speedY = -this.speedY;
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw(color = this.color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function init() {
      for (let i = 0; i < 500; i++) {
        pa.push(new Particle());
      }
    }

    init();
    function handleParticles() {
      for (let i = 0; i < pa.length; i++) {
        pa[i].update();
        pa[i].draw();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }
    animate();
  });

  return (
    <canvas id="canvas" className="absolute border-2  border-sky-500"></canvas>
  );
}
