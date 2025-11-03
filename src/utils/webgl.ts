export function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') ||
      // @ts-ignore
      canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}
