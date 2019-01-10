var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(event) {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
})

var c = canvas.getContext('2d');

var mouse = {
   x: undefined,
   y: undefined
};

window.addEventListener('mousemove', function(event) {
   mouse.x = event.x;
   mouse.y = event.y;
})

for(var x = Math.random() * window.innerWidth; x < window.innerWidth / 4 || x > 3 * window.innerWidth / 4;) {
   var x = Math.random() * window.innerWidth;
}
for(var y = Math.random() * window.innerHeight; y < window.innerHeight / 4 || y > 3 * window.innerHeight / 4;) {
   var y = Math.random() * window.innerHeight;
}
for(var dx = (Math.random() * 10) - 5; dx > -1 && dx < 1;) {
   var dx = (Math.random() * 10) - 5;
}
var v = 0, a = Math.random() * 0.5, radius = 30;

function Ball(x, y, dx, v, a) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.v = v;
   this.a = a;

   this.draw() = function() {
      c.beginPath();
      c.arc(x, y, 30, Math.PI * 2, false);
      c.fillStyle = '#00a8ff66';
      c.fill();
   }
   this.update() = function() {
      y += v;
      x += dx;
      console.log('velocity: '+ v);
      if(y + radius > window.innerHeight){
         v = -v;
         radius -= 10;
      }
      else{
         v += a;
      }
   }
}

var ballArray = [];

for(var i = 0; i < 10; i++) {
   for(var x1 = Math.random() * window.innerWidth; x1 < window.innerWidth / 4 || x1 > 3 * window.innerWidth / 4;) {
      var x1 = Math.random() * window.innerWidth;
   }
   for(var y1 = Math.random() * window.innerHeight; y < window.innerHeight / 4 || y1 > 3 * window.innerHeight / 4;) {
      var y1 = Math.random() * window.innerHeight;
   }
   for(var dx1 = (Math.random() * 10) - 5; dx1 > -1 && dx1 < 1;) {
      var dx1 = (Math.random() * 10) - 5;
   }
   var v1 = 0, a1 = Math.random() * 0.5;

   //ballArray.push(new Ball(x1, y1, dx1, v1, a1));
}

function animate() {
   requestAnimationFrame(animate);
   c.clearRect(0, 0, window.innerWidth, window.innerHeight);

   c.beginPath();
   c.arc(x, y, radius, Math.PI * 2, false);
   c.fillStyle = '#00a8ff66';
   c.fill();

   y += v;
   x += dx;
   console.log('velocity: '+ v);
   if(y + radius > window.innerHeight){
      v = -v;
      radius -= 10;
   }
   else{
      v += a;
   }
}

animate();
