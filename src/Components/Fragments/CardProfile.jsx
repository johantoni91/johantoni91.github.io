const CardProfile = () => {
  const data = [
    {
      img: "/certificates/growWithGoogle.jpg",
      name: "Grow With Google",
      isi: "Certificate that prove i was in participant of Grow With Google.",
      alt: "G-W-G",
    },
    {
      img: "/certificates/semnasFasilkom.jpg",
      name: "Seminar Nasional E-Commerce Digital",
      isi: "Certificate that prove i was in participant at Webinar National by UNSIKA",
      alt: "semnas-fasilkom",
    },
    {
      img: "/certificates/TOEFL.jpg",
      name: "TOEFL",
      isi: "Certificate that prove i was able to speak and write in english language.",
      alt: "TOEFL",
    },
  ];
  return (
    <>
      <div
        className="w-full h-auto p-5 bg-gradient-to-r from-blue-400 to-light-blue-600"
        // style={{
        //   background: "url(/img/day.jpg) no-repeat center center fixed",
        //   backgroundSize: "cover",
        //   width: "100%",
        //       }}
      >
        <h1 className="text-2xl mb-5 font-extrabold">My Certificates</h1>
        {data.map((data) => (
          <div className="mb-5 grid-cols-3 align-middle items-center grid grid-flow-row rounded shadow-xl shadow-light-blue-300 p-5">
            <div className="max-w-xs">
              <img src={data.img} alt={data.alt} width={"250px"} />
            </div>
            <div className="max-w-md align-middle">
              <h1 className="text-center font-semibold text-xl">{data.name}</h1>
              <h1>{data.isi}</h1>
            </div>
            <div className="max-w-xs ms-5">
              <button className="border float-right rounded bg-blue-500 border-light-blue-900 p-3 hover:bg-black hover:text-white hover:shadow-white hover:shadow-xl">
                Check this !
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardProfile;
