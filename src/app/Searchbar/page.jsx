export default function Searchbar() {
    return (
        <div className="rounded-none max-w-[602px] shadow-[0px_6px_20px_rgba(0,0,0,0.25)]">
        <section
          className="flex flex-wrap gap-10 py-5 pr-20 pl-9 w-full bg-white shadow-2xl rounded-[38px] max-md:px-5 max-md:max-w-full"
        >
          <article className="flex flex-col my-auto">
            <h2 className="self-start text-lg font-medium leading-none text-black">
              Where
            </h2>
            <p className="mt-4 text-xs leading-none text-black">Center Point, Lo...</p>
          </article>
      
          <article className="flex flex-auto gap-6 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/e5e48acb2af94da8874c4625547d8b13/d4038ed2beb1eca7b606ddb302931dfc915c79bbcae77b78eed40b397e264943?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.82] w-[18px]"
              alt="Location icon"
            />
      
            <div
              className="shrink-0 self-stretch w-px border border-gray-200 border-solid h-[55px]"
            ></div>
      
            <article className="flex flex-col self-stretch my-auto">
              <div
                className="flex gap-5 justify-between items-start text-lg font-medium leading-none text-black whitespace-nowrap"
              >
                <h2>Date</h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/e5e48acb2af94da8874c4625547d8b13/6cf5942f356a17461196d723aadcf537ca81ff266805986b3b9837eb578e4196?placeholderIfAbsent=true"
                  className="object-contain shrink-0 mt-2 aspect-[1.1] w-[22px]"
                  alt="Calendar icon"
                />
              </div>
              <p className="self-start text-xs leading-none text-black">
                09th March,2021
              </p>
            </article>
          </article>
        </section>
      </div>
      
    );
}