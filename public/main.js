
// let innerWidth = window.innerWidth;

// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     leave(data) {
//       let square = document.querySelector('.square');
//       return (
//         gsap.to(square, {
//           opacity: 0,
//           y: 100
//         }),
//         gsap.to(data.current.container, {
//           opacity: 0,
//           y: 100
//         })
        
//       );
//     },
//     enter(data) {
//       let square = document.querySelector('.square');
//       return (
//         gsap.to(square, {
//           opacity: 1,
//           y: 0
//         }),
//         gsap.from(data.next.container, {
//           opacity: 0,
//           y: -100
//         })        
//       );
//     }
//   }
//   ]
// });


// let square = document.querySelector('.square');
// square.addEventListener('mouseover', (e) => {
//   gsap.to(square, {
//     scale: 2,
//     x: 0,
//     transformOrigin:"bottom right"
//   });
// });

// square.addEventListener('mouseout', (e) => {
//   gsap.to(square, {
//     scale: 1,
//     x: 0,
//     transformOrigin:"bottom right"
//   });
// });

// var isRunning = false;

// square.addEventListener('click', () => {
//   var tl = new TimelineMax()

//   tl.to(square, {
//     scale: 100
//   })
//   .to(square, {
//     opacity:0
//   })
//   .to(square, {
//     scale: 1,
//     opacity:0
//   })
//   .to(square, {
//     scale:1,
//     opacity:1
//   });
// // console.log(tl.isActive())
//   setTimeout(() => {
//     square.classList.toggle('dark-mode');
//   },2000)
//   document.body.classList.toggle('dark-mode');
// });

// let mouseCursor = document.querySelector('.cursor');
// window.addEventListener('mousemove', (e) => {
//   mouseCursor.style.transform = `translate(${e.pageX}px, ${(e.pageY-200)}px)`;
//   // mouseCursor.style.top = e.pageY + 'px';
//   // mouseCursor.style.left = e.pageX + 'px';
//   // console.log(e.target)
//   if (e.target.nodeName.toLowerCase() == 'a') {
//     mouseCursor.style.transform = `translate(${e.pageX}px, ${(e.pageY-200)}px) scale(4)`;
//   }
// });
