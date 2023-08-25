interface GameEngine {
  name: string;
  description: string;
}

const GameEngineSection: React.FC<GameEngine> = ({ name, description }) => (
  <section
    id={name.replace(/\s+/g, "-").toLowerCase()}
    className="divide-y divide-gray-200 dark:divide-gray-600 scroll-mt-[6.25rem]"
  >
    <div className="pb-6 sm:flex sm:items-center sm:justify-between sm:flex-wrap">
      <h2
        id={`${name}-heading`}
        className="text-2xl font-extrabold text-gray-900 dark:text-white"
      >
        {name}
      </h2>
      <p className="w-full flex-none text-sm text-gray-500 dark:text-gray-400 mt-2">
        {description}
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
      <div className="space-y-4">
        game 1
      </div>
      <div className="space-y-4">
        game 2
      </div>
    </div>
  </section>
);

interface LinkButtonProps {
  href: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  className,
  target,
  children,
}) => (
  <a href={href} target={target} className={`transition-all ${className}`}>
    {children}
  </a>
);

const GAME_ENGINES: GameEngine[] = [
  {
    name: "Unreal Engine 3",
    description:
      "All Unreal Engine 3 games have their classes, structures, enums and offsets dumped.",
  },
  {
    name: "Unreal Engine 4",
    description:
      "All Unreal Engine 4 games have their classes, structures, enums and offsets dumped.",
  },
  {
    name: "Unreal Engine 5",
    description:
      "All Unreal Engine 5 games have their classes, structures, enums and offsets dumped.",
  },
];

export default function Home() {
  return (
    <>
      <div className="overflow-hidden bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16">
          <div className="sm:mb-24 xl:mb-32 lg:flex">
            <div className="flex-none relative z-10 flex flex-col items-start lg:pt-10 max-w-screen-sm mx-auto lg:max-w-2xl lg:mx-0 lg:pr-20 mb-12 sm:mb-16 lg:mb-0">
              <h1 className="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight text-white mb-4">
                Game specific dumps,{" "}
                <span className="text-gray-400">always up-to-date</span>
              </h1>
              <p className="order-2 leading-relaxed mb-8 pt-8">
                Dumps.io is a clone of the original Dumps.host which provides
                dumps for several games and game engines, we&apos;re always
                wanting to expand.
                <br />
                Our site allows you to easily browse classes, structures, enums
                and offsets.
                <br />
                We also keep track of the update history for every game,
                allowing you to compare different game versions.
              </p>
              <div className="order-2 w-full text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
                <a
                  href="#game-categories"
                  className="transition-all text-sm font-semibold bg-white text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                >
                  Get started
                </a>
                <a
                  href="https://discord.dumps.host"
                  target="_blank"
                  className="transition-all inline-block text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="game-categories"
        className="sticky top-0 z-40 bg-white dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-white py-5 shadow-sm dark:border-t dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-5 sm:space-x-10 lg:space-x-14">
          {GAME_ENGINES.map((gameEngine) => (
            <LinkButton
              key={gameEngine.name}
              href={`#${gameEngine.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:text-blue-600 dark:hover:text-blue-500"
            >
              {gameEngine.name}
            </LinkButton>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 space-y-8">
        {GAME_ENGINES.map((gameEngine) => (
          <GameEngineSection key={gameEngine.name} {...gameEngine} />
        ))}
      </div>
    </>
  );
}
