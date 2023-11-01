import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8 mt-10">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-medium text-center">
          Converta
          <span className="text-rose-400 font-bold">Gratuitamente</span>{" "}
          infinitos arquivos!
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Com essa ferramente você pode converter quantos arquivos quiser para
          os mais diversos formatos possíveis, Transforme imagens, audio, e
          videos, sem restrições. Comece agora mesmo!
        </p>
      </div>
      <div className="mx-10">
        <Dropzone />
      </div>
    </div>
  );
}
