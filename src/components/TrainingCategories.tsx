import { Button } from "./elements/Button";

export const TrainingCategories = () => {
  return (
    <div className="grid grid-cols-12" id="training-categories">
      <div className="h-[300px] sm:h-[500px] lg:h-[400px] xl:h-[500px] col-span-12 lg:col-span-6 bg-center bg-no-repeat bg-cover bg-[url('/img/gallery/cat1.png')] relative">
        <div className="h-full w-full overlay absolute bg-black bg-opacity-50">
          <div className="w-10/12 absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h4 className="text-2xl sm:text-4xl font-bold">
              PERSONAL TRAINING
            </h4>
            <p className="mt-3 text-sm sm:text-lg font-medium">
              You’ll look at graphs and charts in Task One, how to approach the
              task and the language needed for a successful answer.
            </p>
            <div className="mt-5">
              <Button text={"VIEW COURSES"} path={"/courses"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] sm:h-[500px] lg:h-[400px] xl:h-[500px] col-span-12 lg:col-span-6 bg-center bg-no-repeat bg-cover bg-[url('/img/gallery/cat2.png')] relative">
        <div className="h-full w-full overlay absolute bg-black bg-opacity-50">
          <div className="w-10/12 absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h4 className="text-2xl sm:text-4xl font-bold">GROUP TRAINING</h4>
            <p className="mt-3 text-sm sm:text-lg font-medium">
              You’ll look at graphs and charts in Task One, how to approach the
              task and the language needed for a successful answer.
            </p>
            <div className="mt-5">
              <Button text={"VIEW COURSES"} path={"/courses"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
