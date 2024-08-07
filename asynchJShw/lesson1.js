// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

async function getUserData(userId) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);

    if (response.ok) {
      const userData = await response.json();
      return userData.data;
    } else {
      throw new Error(`User with ID ${userId} not found`);
    }
  } catch (error) {
    throw error;
  }
}

getUserData(1)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error.message);
  });