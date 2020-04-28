const timerModule = {
  sleep: async (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },
};

export default timerModule;
