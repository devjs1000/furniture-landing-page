export default (props: any) => {
  console.log(props.hColor);

  return (
    <>
      <div className=" px-3 py-2 my-2 rounded-xl flex  bg-slate-100 w-[350px] shadow-md hover:shadow-lg cursor-pointer">
        <img
          src={props.img}
          alt="training"
          className="w-[100px]  h-[100px] rounded-full"
          loading="lazy"
        />
        <div>
          <h3
            className="text-xl ml-2 w-full md:text-xl lg:text-2xl lg:mb-[8px] font-semibold mb-[2px] mt-0 md:my-[8px] text-left"
            style={{ color: props.hColor }}
          >
            {props.name}
          </h3>
          <p className="break-all w-[200px] ml-2  text-left mb-0 mt-0 text-slate-700 text-sm md:text-base font-semibold ">
            {props.quote}
          </p>
        </div>
      </div>
    </>
  );
};
