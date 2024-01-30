export default function MovieCard({ data }) {
  return (
    <div className=" border-2 border-gray-400 rounded-md">
      <p className=" text-center text-red-400 font-semibold mb-2 px-3">{data.title}</p>
      <p className=" bg-slate-200">body:{data.body}</p>
    </div>
  );
}
