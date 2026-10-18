import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://img.magnific.com/free-photo/beautiful-view-construction-site-city-sunset_181624-9347.jpg?semt=ais_hybrid&w=740&q=80')`
      }}
    >
      <h1 className="text-6xl text-bold text-center mt-[250px]">Website is under construction.....</h1>
    </div>
  );
}
