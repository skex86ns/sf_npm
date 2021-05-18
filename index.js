// Подключение модуля http
const http = require("http");

// Создаем веб-сервер с обработчиком запросов
const server = http.createServer((incomingMessage, response) => {
    console.log("Начало обработки запроса");
    // Передаем код ответа и заголовки http
    response.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    response.end("Hello, world!");
});

// Запускаем веб-сервер
server.listen(3000, "127.0.0.1", () => {
    const { address, port } = server.address();
    console.log(`Сервер запущен ${address}:${port}`);
});
