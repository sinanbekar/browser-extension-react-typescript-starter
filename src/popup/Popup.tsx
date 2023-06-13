import { Counter } from '../app/features/counter';

const Popup = () => {
  document.body.className = 'w-[30rem] h-[10rem]';

  return (
    <>
      <div className="flex justify-center mt-2 text-base">Popup Counter</div>
      <Counter />
    </>
  );
};

export default Popup;
