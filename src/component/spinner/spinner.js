export default function Spinner(props) {
  return (
    <div className="animate-pulse bg-white w-[100vw] h-[100vh]   z-50">
      <div className="text-7xl">{props.children}</div>
    </div>
  );
}
