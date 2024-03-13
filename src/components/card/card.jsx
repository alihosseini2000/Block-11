import "./card.css";

function Card({Index , Address ,Name , Course }) {
  
  return (
    <div id={Index} className="bg-slate-900 flex flex-col mx-4 gap-3 items-center">
      <div className="w-11/12 fit pt-5 px-2">
        <img
          src={Address}
          alt={Name}
          loading="lazy"
          className="rounded-t-2xl"
        />
      </div>
      <h1 className="text-white font-shabnam-Bold py-8 px-3">{Course}</h1>
    </div>
  );
}

export default Card;
