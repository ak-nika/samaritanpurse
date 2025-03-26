import SimpleNav from "../components/SimpleNav";
import Footer from "../components/Footer";

const BiographyPage = () => {
  return (
    <>
      <SimpleNav />
      <h1 className="text-center text-5xl mt-4 font-bold">
        Franklin Graham - Biography
      </h1>

      <main className="max-w-[1140px] mx-auto flex flex-col justify-between lg:flex-row p-4">
        <section className="w-full lg:w-[55%] mt-4">
          <img
            src="https://spweb-uploads.s3.theark.cloud/2012/09/98B-7867-FG-Biography.jpg"
            alt="Helpful nurse"
            width={600}
            height={200}
            className="w-full h-auto"
          />

          <p className="mt-4 pl-8">
            Franklin Graham has devoted his life to meeting the needs of people
            around the world and proclaiming the Gospel of Jesus Christ. The
            elder son of Billy and Ruth Bell Graham, he has served as president
            and CEO of Samaritan’s Purse since 1979 and as president and CEO of
            the Billy Graham Evangelistic Association since 2001. <br /> <br />
            Under his leadership, Samaritan’s Purse has met the needs of poor,
            sick, and suffering people in more than 170 countries. As an
            evangelist for the Billy Graham Evangelistic Association, he has led
            crusades around the world. <br />
            <br />
            Raised in a log home in the Appalachian Mountains outside Asheville,
            North Carolina, Graham now lives in the mountains of Boone, North
            Carolina, with his wife, Jane Austin Graham. <br />
            <br />
            He was born into a heritage rich in Christian ministry. By the time
            of his birth, his father Billy Graham was already known around the
            world as a spiritual leader, but he wasn’t the only spiritual giant
            in the family. Franklin Graham’s maternal grandfather, Lemuel Nelson
            Bell, was a medical missionary to China for more than 20 years, a
            respected moderator of his denomination, the Presbyterian Church in
            the United States, and a co-founder and executive editor of
            Christianity Today. <br />
            <br />
            At age 22, after a period of rebellion and traveling the world,
            Franklin Graham committed his life to Jesus Christ while alone in a
            hotel room in Jerusalem. Soon after that, Dr. Bob Pierce, founder of
            Samaritan’s Purse (and World Vision), invited Graham to join him on
            a six-week mission to Asia. It was during that time that Graham felt
            a calling to work with hurting people in areas of the world affected
            by war, famine, disease, and natural disasters.
          </p>

          <img
            src="https://spweb-uploads.s3.theark.cloud/2014/01/0706-A079-FG-Uganda.jpg"
            alt="Franklin"
            className="w-full h-auto block mt-4"
            width={600}
            height={200}
          />

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

export default BiographyPage;
