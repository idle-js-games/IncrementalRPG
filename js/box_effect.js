let counter = 0;

    function addBox(element, item, icon_path) {
      const container = element; // document.getElementById('resources');

      if (counter < 5) {
        const box = document.createElement('div');
        box.className = 'box';

        const icon = document.createElement('img');
        icon.className = 'icon'; // substitua 'fa-icon' pelo nome da classe do ícone desejado
        icon.src = icon_path;

        const name = document.createElement('span');
        name.textContent = '+1';

        box.appendChild(icon);
        box.appendChild(name);

        container.appendChild(box);

        setTimeout(() => {
          fadeOutAndDestroy(box);
        }, 500);
        
        console.log("ativando efeito de caixa");
 
        counter++;
      }
    }

    function fadeOutAndDestroy(element) {
      let opacity = 1;
      let top = 0;
      const interval = setInterval(() => {
        opacity -= 0.1;
        element.style.opacity = opacity;

        if (opacity <= 0) {
          clearInterval(interval);
          element.remove();
          counter--;
          repositionBoxes();
        }
      }, 20);
    }

    function repositionBoxes() {
      const boxes = document.getElementsByClassName('box');
      let top = 0;

      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.top = top + 'px';
        top += 0;
      }
    }