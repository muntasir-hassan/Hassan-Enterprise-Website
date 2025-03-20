import img1 from "/supercrete.png";
import img2 from "/supercrete-plus.png";
import img3 from "/holcim.png";
import img4 from "/holcim water protect.png";
import CustomBreak from "./CustomBreak";

function Products() {
  return (
    <section id="product">
      <section className="md:my-20 flex flex-col-reverse md:flex-row-reverse justify-between px-6 md:px-10 py-10 md:h-[calc(100vh-)] md:snap-end">
        <div className="flex flex-col justify-center pr-0 lg:pr-32 w-full md:w-3/5 mb-8 md:mb-0">
          <h3 className="font-mono text-3xl md:text-4xl font-medium mb-4">
            SUPERCRETE
          </h3>
          <p className="text-base text-gray-600 mb-1">
            Supercrete, the only Portland Limestone Cement (PLC) brand in
            Bangladesh, complies with BDS EN 197-1: 2003, CEM II/ B-L, 42.5N
            standard. Own clinker production facility and usage ensure the
            consistent quality of Supercrete Cement...
          </p>
          <b className="text-black">Uniqueness:</b>
          <ul className="text-base text-gray-600 mb-1">
            <li>
              Provides <b>consistent quality</b> through its own clinker
              production facility.
            </li>
            <li>
              <b>Best solution for fair face</b> concrete and gives a beautiful
              aesthetic view of buildings.
            </li>
            <li>
              <b>10% high early strength</b> compared to other PCC cements in
              first 7 days.
            </li>
            <li>
              <b>High early strength</b> speeds up the construction works which
              save around 3% construction cost.
            </li>
          </ul>
        </div>

        <div className="flex justify-start max-md:relative right-16 md:justify-center items-end md:items-center select-none w-full md:w-5/12 max-md:mb-2 ">
          <img src={img1} className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>
      <CustomBreak />

      <section className="md:my-20 flex flex-col-reverse md:flex-row justify-between px-6 md:px-10 py-10 md:h-[calc(100vh-)] md:snap-end">
        <div className="flex flex-col justify-center pr-0 lg:pl-32 w-full md:w-3/5 mb-8 md:mb-0">
          <h3 className="font-mono text-3xl md:text-4xl font-medium mb-4">
            SUPERCRETE PLUS+
          </h3>
          <p className="text-base text-gray-600 mb-1">
            Supercrete Plus is the number one Fair Facing cement in Bangladesh
            with “CPR (Concrete Porosity Reduction) & Strength Enhancing
            Technology”...
          </p>
          <b className="text-black">Uniqueness:</b>
          <ul className="text-base text-gray-600 mb-1">
            <li>
              Builds <b>Fair Facing</b> concrete with an elegant look.
            </li>
            <li>
              More fortified due to <b>Extra Strength</b> (2-3 MPA).
            </li>
            <li>
              <b>Extra Fineness</b> creates Dense Concrete and Superior Bonding.
            </li>
            <li>
              Concrete Porosity Reduction (CPR) and Strength{" "}
              <b>Enhancing Technology.</b>
            </li>
            <li>
              Fair Look saves the cost of maintenance and{" "}
              <b>no painting is required.</b>
            </li>
          </ul>
        </div>

        <div className="flex justify-start max-md:relative right-16 md:justify-center items-end md:items-center select-none w-full md:w-5/12 max-md:mb-2 ">
          <img src={img2} className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>
      <CustomBreak />

      <section className="md:my-20 flex flex-col-reverse md:flex-row-reverse justify-between px-6 md:px-10 py-10 md:h-[calc(100vh-)] md:snap-end">
        <div className="flex flex-col justify-center pr-0 lg:pr-32 w-full md:w-3/5 mb-8 md:mb-0">
          <h3 className="font-mono text-3xl md:text-4xl font-medium mb-4">
            HOLCIM STRONG STRUCTURE
          </h3>
          <p className="text-base text-gray-600 mb-1">
            Holcim (Strong Structure), a Portland Composite Cement (PCC)
            complies with BDS EN 197-1:2003, CEM II/B-M (S-V-L), 42.5N
            standard...
          </p>
          <b className="text-black">Uniqueness:</b>
          <ul className="text-base text-gray-600 mb-1">
            <li>
              HSS gives <b>higher concrete strength</b> (300 to 450 PSI extra)
              than any general available PCC in Bangladesh.
            </li>
            <li>
              Gives long term strength <b>more than 6500 PSI</b> at 90 days.
            </li>
            <li>
              Offers <b>long term durability</b> by preventing steel corrosion
              due to lesser chloride diffusion.
            </li>
            <li>
              Suitable for concrete strength <b>from 4000 PSI to 4800PSI</b> and
              the strength can be enhanced by using chemical admixtures.
            </li>
            <li>
              Concrete made of Holcim Strong Structure{" "}
              <b>improves cohesiveness</b> of the mix.
            </li>
          </ul>
        </div>

        <div className="flex justify-start max-md:relative right-16 md:justify-center items-end md:items-center select-none w-full md:w-5/12 max-md:mb-2  ">
          <img src={img3} className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>
      <CustomBreak />

      <section className="md:my-20 flex flex-col-reverse md:flex-row justify-between px-6 md:px-10 py-10 md:h-[calc(100vh-)] md:snap-end">
        <div className="flex flex-col justify-center pr-0 lg:pl-32 w-full md:w-3/5 mb-8 md:mb-0">
          <h3 className="font-mono text-3xl md:text-4xl font-medium mb-4">
            HOLCIM WATER PROTECT
          </h3>
          <p className="text-base text-gray-600 mb-1">
            A unique tailor-made product that addresses the key problems of
            water seepage, dampness, and water ingress...
          </p>
          <b className="text-black">Uniqueness:</b>
          <ul className="text-base text-gray-600 mb-1">
            <li>
              HWP has an <b>integral water protect system</b> which cannot be
              achieved by conventional waterproofing.
            </li>
            <li>
              Resists the permeation of water due to reduced capillary action,
              which makes it <b>damp resistant and durable.</b>
            </li>
            <li>
              Reduces <b>salt efflorescence</b> as it restricts water
              transportation through concrete pores.
            </li>
            <li>
              <b>Restricts the rate of flow of water</b> through its pores hence
              reduces water leakage.
            </li>
            <li>
              Absorbs much <b>less water by capillary action</b> and acts as
              corrosion-resistant.
            </li>
            <li>
              Concrete made of Holcim Water Protect <b>improves cohesiveness</b>{" "}
              of the mix.
            </li>
          </ul>
        </div>

        <div className="flex justify-start max-md:relative right-16 md:justify-center items-end md:items-center select-none w-full md:w-5/12 max-md:mb-2 ">
          <img src={img4} className="w-full max-w-xs md:max-w-md" />
        </div>
      </section>
      <CustomBreak />
    </section>
  );
}

export default Products;
