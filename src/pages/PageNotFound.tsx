import { Button } from "../components/elements/Button";

export const PageNotFound = () => {
  return (
    <div className="h-full relative">
      <div className="h-full bg-center bg-no-repeat bg-cover bg-[url('/img/hero/h1_hero.png')]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col text-center space-y-10">
        <h3 className="text-6xl font-bold tracking-wide">404 Error</h3>
        <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wide">
          Page Not Found
        </h3>
        <Button text={"Back To Home"} path={"/"} />
      </div>
    </div>
  );
};
