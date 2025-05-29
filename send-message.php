
<!-- для хостинга на бегете - надо заливать файл на сервер -->


<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Прочитать JSON из запроса
$data = json_decode(file_get_contents('php://input'), true);

// Проверка на текст
if (!isset($data['text'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Нет текста']);
  exit;
}

// Настройки
$botToken = 'токен бота';
$chatId = 'токен чата';
$message = $data['text'];
$cooldownSeconds = 60;

// Простая защита от спама по IP
$ip = $_SERVER['REMOTE_ADDR'];
$logDir = __DIR__ . '/.rate_limit';
$logFile = $logDir . '/' . md5($ip) . '.txt';

if (!is_dir($logDir)) {
  mkdir($logDir, 0755, true);
}

if (file_exists($logFile)) {
  $lastSent = (int)file_get_contents($logFile);
  if (time() - $lastSent < $cooldownSeconds) {
    http_response_code(429);
    echo json_encode(['error' => 'Слишком часто. Попробуйте позже.']);
    exit;
  }
}

// Отправка сообщения
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";

$response = file_get_contents($url . '?' . http_build_query([
  'chat_id' => $chatId,
  'text' => $message,
  'parse_mode' => 'HTML'
]));

if ($response === false) {
  http_response_code(500);
  echo json_encode(['error' => 'Не удалось отправить сообщение']);
  exit;
}

// Обновить время отправки
file_put_contents($logFile, time());

echo json_encode(['status' => 'ok']);
?>