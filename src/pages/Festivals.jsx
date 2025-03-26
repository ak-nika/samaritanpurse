import SimpleNav from "../components/SimpleNav";
import Footer from "../components/Footer";

const FestivalsPage = () => {
  return (
    <>
      <SimpleNav />
      <h1 className="text-center text-5xl mt-4 font-bold">
        Franklin Graham - Festivals
      </h1>

      <main className="max-w-[1140px] mx-auto flex flex-col justify-between lg:flex-row p-4">
        <section className="w-full lg:w-[55%] mt-4">
          <img
            src="https://spweb-uploads.s3.theark.cloud/2012/09/1920x770_Franklin-Festivals.jpg"
            alt="Helpful nurse"
            width={600}
            height={200}
            className="w-full h-auto"
          />

          <h3 className="tex-center text-2xl pt-3 font-bold mt-8 border-t-[1px] border-t-[#999]">
            "Telling someone else the Good News of Jesus Christ is one of the
            greatest privileges I know, for when others hear and believe the
            Gospel, their lives are changed forever."
          </h3>

          <p className="mt-4 pl-8">
            Franklin Graham conducted his first evangelistic event in 1989 and
            committed to spend 10 percent of his time preaching. Since then, he
            has continued to proclaim the Gospel in the far corners of the
            globe, sharing the hope of Jesus Christ through more than 280
            evangelistic outreaches in over 50 countries and territories and in
            all 50 states. <br />
            <br />
            Every evangelistic festival conducted by Franklin Graham is the
            result of a cooperative effort involving the Billy Graham
            Evangelistic Association, the evangelist, his team, and many local
            Christians and churches. <br />
            <br />
            The primary objective of every festival is to bring uncommitted
            individuals into a personal relationship with Jesus Christ and
            firmly establish them in a local church.
          </p>

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
          <h2 className="text-center text-2xl uppercase my-4">
            Franklin Graham
          </h2>
          <p>
            Franklin Graham has devoted his life to meeting the needs of people
            around the world and proclaiming the Gospel of Jesus Christ. The
            eldest son of Billy and Ruth Bell Graham, he serves as President and
            CEO of Samaritan's Purse and the Billy Graham Evangelistic
            Association. Under his leadership, Samaritan's Purse has met the
            needs of poor, sick, and suffering people in more than 170
            countries. As an evangelist for the Billy Graham Evangelistic
            Association, he has led crusades around the world.
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

export default FestivalsPage;
