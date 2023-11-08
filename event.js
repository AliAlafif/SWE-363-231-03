class CustomEventEmitter {
    constructor() {
      this.listeners = {};
    }
  
    on(eventName, listener) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
  
      this.listeners[eventName].push(listener);
    }
  
    emit(eventName, ...args) {
      if (this.listeners[eventName]) {
        for (const listener of this.listeners[eventName]) {
          listener(...args);
        }
      }
    }
  }
  
  const eventEmitter = new CustomEventEmitter();
  
  setInterval(() => {
    const userId = Math.floor(Math.random() * 10) + 1;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    eventEmitter.emit('userLoggedIn', userId);
  }, Math.random() * 2000 + 100);

  eventEmitter.on('userLoggedIn', (userId) => {
    console.log(`User ${userId} has been logged in`);
  });

setInterval(() => {
    const userId = Math.floor(Math.random() * 10) + 1;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged out`);
    eventEmitter.emit('userLoggedOut', userId);
  }, Math.random() * 3000 + 2000);
  
  eventEmitter.on('userLoggedOut', (userId) => {
    console.log(`User ${userId} has been logged out`);
  });
  