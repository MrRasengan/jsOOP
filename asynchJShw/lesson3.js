// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed(elementId, delayMs) {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.color = 'red';
    } else {
      console.error(`Element with ID '${elementId}' not found`);
    }
  }, delayMs);
}

changeStyleDelayed('myElement', 3000);