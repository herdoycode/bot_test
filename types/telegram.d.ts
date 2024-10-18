declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe: {
          user: TelegramUser;
        };
      };
    };
  }
}

export {};
