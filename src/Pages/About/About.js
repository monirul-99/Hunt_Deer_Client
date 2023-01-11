import React from "react";

const About = () => {
  return (
    <section className="bg-white">
      <div className="bg-[#F4F7FC] flex flex-col items-center justify-center py-12">
        <h1 className="text-black text-[30px]">About</h1>
        <aside className="flex text-[15px] text-[#202124] space-x-1">
          <p>Home</p> <p>/</p> <p>About</p>
        </aside>
      </div>

      <div className="flex justify-center gap-3 container mx-auto py-14">
        <aside className="">
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g1.jpg"
            alt=""
          />
        </aside>
        <aside className="space-y-2">
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g5.jpg"
            alt=""
          />
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g3.jpg"
            alt=""
          />
        </aside>
        <aside className="space-y-2">
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g4.jpg"
            alt=""
          />
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g6.jpg"
            alt=""
          />
        </aside>
        <aside className="">
          <img
            src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/g2.jpg"
            alt=""
          />
        </aside>
      </div>

      <div className="flex justify-center text-[#77838F] gap-12 py-10">
        <aside className="flex flex-col items-center justify-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">4M</p>
          <p className="text-sm font-Jost">4 million daily active users</p>
        </aside>
        <aside className="flex flex-col items-center justify-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">12K</p>
          <p className="text-sm font-Jost">Over 12k open job positions</p>
        </aside>
        <aside className="flex flex-col items-center justify-center">
          <p className="font-semibold mb-2 text-5xl font-Jost">20M</p>
          <p className="text-sm font-Jost">Over 20 million stories shared</p>
        </aside>
      </div>

      <div className="flex flex-col mx-auto py-14 w-[50%] ">
        <h1 className="font-semibold text-3xl mb-4 text-black font-Jost">
          About Jobio
        </h1>
        <p className="mb-5 text-sm font-Jost">
          Far much that one rank beheld bluebird after outside ignobly allegedly
          more when oh arrogantly vehement irresistibly fussy penguin insect
          additionally wow absolutely crud meretriciously hastily dalmatian a
          glowered inset one echidna cassowary some parrot and much as goodness
          some froze the sullen much connected bat wonderfully on
          instantaneously eel valiantly petted this along across highhandedly
          much.
        </p>

        <p className="text-sm font-Jost">
          Repeatedly dreamed alas opossum but dramatically despite expeditiously
          that jeepers loosely yikes that as or eel underneath kept and slept
          compactly far purred sure abidingly up above fitting to strident wiped
          set waywardly far the and pangolin horse approving paid chuckled
          cassowary oh above a much opposite far much hypnotically more
          therefore wasp less that hey apart well like while superbly orca and
          far hence one.Far much that one rank beheld bluebird after outside
          ignobly allegedly more when oh arrogantly vehement irresistibly fussy.
        </p>
      </div>
    </section>
  );
};

export default About;
