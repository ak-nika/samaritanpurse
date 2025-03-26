import SimpleNav from "../components/SimpleNav";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <SimpleNav />
      <h1 className="text-center text-5xl mt-4 font-bold">About Us</h1>

      <main className="max-w-[1140px] mx-auto flex flex-col justify-between lg:flex-row p-4">
        <section className="w-full lg:w-[55%] mt-4">
          <img
            src="https://media.istockphoto.com/id/1458338361/photo/mother-and-her-newborn-baby-in-operating-room.jpg?s=612x612&w=0&k=20&c=LTFluUX4udFwegXywZe0iuwWD7HcAPNSCUDjGedmMGA="
            alt="Helpful nurse"
            width={600}
            height={200}
            className="w-full h-auto"
          />
          <p className="mt-4">
            The story of the Good Samaritan (Luke 10:30-37) gives a clear
            picture of God’s desire for us to help those in desperate need
            wherever we find them. After describing how the Samaritan rescued a
            hurting man whom others had passed by, Jesus told His hearers, “Go
            and do likewise.” For over 50 years, Samaritan’s Purse has done our
            utmost to follow Christ’s command by going to the aid of the world’s
            poor, sick, and suffering. We are an effective means of reaching
            hurting people in countries around the world with food, medicine,
            and other assistance in the Name of Jesus Christ. This, in turn,
            earns us a hearing for the Gospel, the Good News of eternal life
            through Jesus Christ.
          </p>
          <p className="mt-4">
            As our teams work in crisis areas of the world, people often ask,
            “Why did you come?” The answer is always the same: “We have come to
            help you in the Name of the Lord Jesus Christ.” Our ministry is all
            about Jesus—first, last, and always. As the Apostle Paul said,{" "}
            <em>
              “For we do not preach ourselves, but Jesus Christ as Lord, and
              ourselves as your servants for Jesus’ sake”
            </em>
            (2 Corinthians 4:5, NIV).
          </p>

          <h3 className="font-bold text-lg my-4">Mission Statement</h3>

          <strong>
            <em>
              Samaritan’s Purse is a nondenominational evangelical Christian
              organization providing spiritual and physical aid to hurting
              people around the world. Since 1970, Samaritan’s Purse has helped
              meet needs of people who are victims of war, poverty, natural
              disasters, disease, and famine with the purpose of sharing God’s
              love through His Son, Jesus Christ. The organization serves the
              Church worldwide to promote the Gospel of the Lord Jesus Christ.
            </em>
          </strong>

          <h3 className="font-bold text-2xl border-b-4 my-4 border-[#002d56]">
            More
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-40">
            <a href="#">
              <img
                src="https://spweb-uploads.s3.theark.cloud/2025/03/2537US-H-211-home-screen-400x240.jpg"
                alt="Grace Sees Them Through After Missouri Twister"
              />
              <h3 className="my-4 font-bold text-xl">
                Grace Sees Them Through After Missouri Twister
              </h3>
              <p className="text-sm">
                Families in a Poplar Bluff see the hand of God working after
                storms sliced through their...
              </p>
            </a>
            <a href="#">
              <img
                src="https://spweb-uploads.s3.theark.cloud/2025/03/HSphoto-400x240.jpg"
                alt="Grace Sees Them Through After Missouri Twister"
              />
              <h3 className="my-4 font-bold text-xl">
                Two Marias, One Almighty God
              </h3>
              <p className="text-sm">
                Two Mothers - both named Maria - experience God's everlasting
                love as...
              </p>
            </a>
            <a href="#">
              <img
                src="https://spweb-uploads.s3.theark.cloud/2025/03/2522SU-A1-109-Sudanfood-400x240.jpg"
                alt="Grace Sees Them Through After Missouri Twister"
              />
              <h3 className="my-4 font-bold text-xl">
                God Opens a Channel of Peace
              </h3>
              <p className="text-sm">An amazing story from Sudan...</p>
            </a>
          </div>
        </section>

        <section className="border-t-4 border-[#002d56] w-full lg:w-[35%] mt-4">
          <h2 className="text-center text-2xl my-4">ABOUT US</h2>
          <p>
            After sharing the story of the Good Samaritan, Jesus said “Go and do
            likewise.” That is the mission of Samaritan&apos;s Purse—to follow
            the example of Christ by helping those in need and proclaiming the
            hope of the Gospel.
          </p>

          <div className="border-[#333] border-[1px]">
            <h3 className="text-lg uppercase font-bold bg-[#ccc] border-b-[#333] border-[1px] py-2 pl-2">
              Support
            </h3>
            <h3 className="text-lg uppercase p-2">Where Most Needed</h3>
            <p className="px-2">
              Your gift to "Where Most Needed" equips Samaritan's Purse with the
              resources—including personnel, materials, supporting services,
              buildings, and equipment—to fulfill our mission of relief and
              evangelism worldwide.
            </p>

            <button className="text-white bg-[#8c8c34] w-[80px] h-[50px] block m-2">
              Give
            </button>
          </div>

          <h2 className="font-bold text-2xl mt-4 text-center border-b-[#002d56] border-b-2">
            Top Stories
          </h2>
          <ul className="w-full">
            <li className="text-sm uppercase py-2 border-b-[#999] border-b-[1px]">
              <a href="#">God opens a channel of peace</a>
            </li>
            <li className="text-sm uppercase py-2 border-b-[#999] border-b-[1px]">
              <a href="#">
                Special Medical Outreach Held in Western North Carolina
              </a>
            </li>
            <li className="text-sm uppercase py-2 border-b-[#999] border-b-[1px]">
              <a href="#">
                Healthy Deliveries Bring Joy to Displaced Moms in Sudan
              </a>
            </li>
            <li className="text-sm uppercase py-2 border-b-[#999] border-b-[1px]">
              <a href="#">Cambodian Migrants Meet Christ on the Road Home</a>
            </li>
            <li className="text-sm uppercase py-2 border-b-[#999] border-b-[1px]">
              <a href="#">
                Samaritan’s Purse Provides Water Systems, Volunteer Teams in
                California
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
