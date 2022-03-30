export default function Spinner(props) {
  return (
    <div className="animate-pulse bg-white w-[100vw] h-[100vh] fixed left-[0px] top-[0px] flex place-items-center place-content-center z-50">
      <div className="text-7xl">{props.children}</div>
    </div>
  );
}
