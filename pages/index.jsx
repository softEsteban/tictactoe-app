import Game from "../components/Game";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <h1 className="text-2xl md:text-4xl">Welcome to this game</h1>
        <p className="text-lg md:text-xl">Play Tic Tac Toe</p>
      </div>
      <div className="md:order-1"><Game /></div>
    </div>
  );
}
