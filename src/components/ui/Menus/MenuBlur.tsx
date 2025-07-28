export default function MenuBlur() {
  return (
    <>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="bg-gradient-to-br from-purple-900 to-emerald-900 opacity-40 w-full h-full"
      ></label>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="backdrop-blur-xs w-full h-full"
      ></label>
    </>
  );
}
