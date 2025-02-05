const panels =  document.querySelectorAll('.panel');
// panels store the addresses of 5 images
//querySelector selects a single element
//querySelectorAll selects all elements
panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        panel.removeActiveClass();
        panel.classList.add('active');
    });
});
// Events are automatic even if the code execution is completed events always run in the background
const removeActiveClass = () =>{
    panels.forEach(panel=>panel.classList.remove('active'));
};                     