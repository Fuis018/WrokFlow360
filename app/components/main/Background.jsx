import '@/public/styles/main.css';
export default function Background({ src, type, children }) {
  return (
    <div className="background">
      {type === "vid" ? (
        <video src={src} type="video/mp4" muted autoPlay loop></video>
      ) : (
        <img src={src} alt="background" />
      )}
      {children}
    </div>
  );
}
