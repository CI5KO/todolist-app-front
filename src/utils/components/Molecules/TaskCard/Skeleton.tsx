export default function Skeleton() {
  return (
    <div className="animate-pulse grid p-4">
      <div className="rounded-xl bg-gray-300 h-6 w-1/2 mb-4 justify-self-center" />
      <div className="rounded-xl bg-gray-300 h-4 w-full mb-2" />
      <div className="rounded-xl bg-gray-300 h-4 w-2/4 mb-2" />
      <div className="grid md:grid-cols-2 gap-4 py-4">
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
        <div className="rounded-xl bg-gray-300 h-10 w-full" />
      </div>
    </div>
  );
}
