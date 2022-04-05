export default function Spinner(props) {
  return (
    <div className="animate-pulse  bg-white    z-50">
      <div className="text-7xl">{props.children}</div>
    </div>
  );
}
