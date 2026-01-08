//preloadAssets.js
export const preloadAssets = (assets = []) => {
  return Promise.all(
    assets.map((src) => {
      return new Promise((resolve) => {
        if (/\.(mp4|webm)$/.test(src)) {
          const video = document.createElement("video");
          video.src = src;
          video.preload = "auto";
          video.muted = true;
          video.playsInline = true;
          video.oncanplaythrough = resolve;
          video.onerror = resolve;
        } else {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    })
  );
};
