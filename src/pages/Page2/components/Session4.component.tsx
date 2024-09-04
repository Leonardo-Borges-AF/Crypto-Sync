import { IoIosClose } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

export const Session4 = () => {
  return (
    <div style={{ backgroundColor: "#080809" }}>
      <div className="flex flex-col py-[100px] relative max-w-[1280px] mx-auto px-5 md:px-20 gap-16">
        <div className="flex flex-col gap-4">
          <p className="titleEffect md:(font-main font-bold -tracking-widest) text-4xl md:text-5xl text-center">
            How does copy trading <br /> work?
          </p>
        </div>
        <div className="flex flex-row gap-10 mx-auto">
          <Card
            name="Sync Free"
            pricing="0,00"
            description="O EVA, chegou em uma boa hora, eu já estava procurando "
            items={[false, true, false, false]}
            recommended={false}
          />
          <Card
            name="Sync Free"
            pricing="0,00"
            description="O EVA, chegou em uma boa hora, eu já estava procurando "
            items={[true, true, true, true]}
            recommended={true}
          />
        </div>
      </div>
    </div>
  );
};

type TCard = {
  name: string;
  pricing: string;
  description: string;
  items: boolean[];
  recommended: boolean;
};

const Card = ({ name, pricing, description, items, recommended }: TCard) => {
  const options = [
    "Todos os canais de canais",
    "Números ilimitados de Whatsapp",
    "Plataforma Self Service de gestão de experiência",
    "Motor de IA Conversacional",
  ];

  return (
    <div
      className={`flex flex-col relative gap-6 p-8 text-center rounded-lg bg-[#171718] w-[384px] ${
        recommended ? "border-2 border-[#663AF4] border-solid" : ""
      }`}
    >
      {recommended && (
        <div className="absolute bg-[#663AF4] px-3 py-2 text-center font-bold text-xs -top-4 left-1/2 transform -translate-x-1/2 text-white rounded-lg">
          Recommended
        </div>
      )}
      <span className="font-bold text-base text-[#65666D]">{name}</span>
      <label className="text-white flex flex-row mx-auto">
        <span className="mb-auto text-base">R$</span>
        <span className="text-3xl font-bold">{pricing}</span>
        <span className="mb-auto text-base text-[#85858D]">/mês</span>
      </label>
      <p className="text-base font-main text-[#85858D]">{description}</p>
      <button
        className={`flex px-[38px] py-4 justify-center items-center border rounded-full ${
          recommended
            ? "bg-[#6438F4] border-none"
            : "bg-transparent border-solid"
        }`}
        style={{
          borderColor: "rgba(255, 255, 255, 0.20)",
        }}
      >
        <p className="text-white text-center font-main text-base font-medium leading-6">
          Start Now
        </p>
      </button>
      <div className="h-[1px] bg-[#48484B]"></div>
      <div className="flex flex-col gap-4 text-start">
        {options.map((option, index) => (
          <div key={index} className="flex flex-row gap-1 items-center">
            <div className="w-6">
              {items[index] ? (
                <IoIosClose className="text-white text-2xl" />
              ) : (
                <IoIosCheckmark className="text-white text-2xl" />
              )}
            </div>
            <p className="text-base text-[#85858D]">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
