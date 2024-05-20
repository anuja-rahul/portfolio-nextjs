export default function Glow() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="glow absolute z-10  aspect-square w-[40%] max-w-xl rounded-full blur-3xl filter md:w-[30%]" />
    </div>
  );
}
