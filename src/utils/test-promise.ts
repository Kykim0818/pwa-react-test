// TODO : callback return Type 추론 확장 해야함
export const testAsync = (callback: any, delayTime?: number) =>
  new Promise((resolve, rejects) => {
    setTimeout(() => {
      try {
        const callbackRet = callback?.();
        resolve(callbackRet);
      } catch (e) {
        rejects("callback Func implements failed");
      }
    }, delayTime ?? 500);
  });
