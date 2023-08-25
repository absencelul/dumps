import path from "path";
import { promises as fs } from "fs";

type Game = {
  id: string;
  title: string;
};

async function getGame(engineId: string, gameId: string): Promise<Game> {
  const jsonPath = path.join(process.cwd(), "data", engineId, `${gameId}.json`);
  const json = await fs.readFile(jsonPath, "utf-8");
  return JSON.parse(json);
}

export default async function Page({
  params,
}: {
  params: { engineId: string; gameId: string };
}) {
  const game = await getGame(params.engineId, params.gameId);

  return <h1>{game.title}</h1>;
}
