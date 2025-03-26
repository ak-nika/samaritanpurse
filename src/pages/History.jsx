import SimpleNav from "../components/SimpleNav";
import Footer from "../components/Footer";

const HistoryPage = () => {
  return (
    <>
      <SimpleNav />
      <h1 className="text-center text-5xl mt-4 font-bold">History</h1>

      <main className="max-w-[1140px] mx-auto flex flex-col justify-between lg:flex-row p-4">
        <section className="w-full lg:w-[55%] mt-4">
          <img
            src="https://spweb-uploads.s3.theark.cloud/2012/09/52Indo-63-SLT-499-history.jpg"
            alt="Helpful nurse"
            width={600}
            height={200}
            className="w-full h-auto"
          />
          <p className="mt-4">
            "Let my heart be broken with the things that break the heart of
            God." Bob Pierce wrote these now-famous words in his Bible after
            visiting suffering children on the Korean island of Koje-do. This
            impassioned prayer is what guided him as he founded and led the
            ministry of Samaritan's Purse in 1970. His mission for this
            organization was "to meet emergency needs in crisis areas through
            existing evangelical mission agencies and national churches."
          </p>
          <p className="mt-4">
            After World War II, Bob Pierce traveled throughout Asia as an
            evangelist and journalist with Youth For Christ. While on a
            university lecturing circuit in China, he stumbled across some
            courageous women who were living among lepers and orphans,
            sacrificing everything to share the love of Jesus Christ. Through
            their selfless love, God gave Pierce a vision for ministry. He
            dedicated himself to finding and supporting other such Christians
            who were caring for the poor and suffering in the distant corners of
            the world.
          </p>
          <p className="mt-4">
            In the summer of 1973, Bob Pierce met his eventual successor, an
            adventurous young student named Franklin Graham with a growing heart
            for world missions. Intrigued by his many stories from the field,
            Franklin began to spend more and more time with the seasoned
            Christian statesman. In 1975, he accompanied Bob on a life-changing
            tour of some of the world's neediest mission fields. Franklin saw
            the poverty of pagan religions and the utter despair of the people
            they enslave. God had captured his heart for missions.
          </p>
          <p className="mt-4">
            Bob Pierce died of leukemia in 1978, and a little over a year later,
            Franklin Graham became the President and Chairman of the Board of
            Samaritan's Purse. Through over 40 years of earthquakes, hurricanes,
            wars, and famine, Franklin has led the ministry in following the
            Biblical example of the Good Samaritan all across the globe. God has
            blessed the organization under Franklin's leadership, and the
            ministry has seen explosive growth.
          </p>
          <p className="mt-4">
            "Go and do likewise," Christ commanded after explaining the parable
            of the Good Samaritan in Luke 10. So we do. Samaritan's Purse
            travels the world's highways looking for victims along the way. We
            are quick to bandage the wounds we see, but like the Samaritan, we
            don't stop there. In addition to meeting immediate, emergency needs,
            we help these victims recover and get back on their feet.
          </p>
          <p className="mt-4">
            No matter where we go or what we do, we offer more than help. We
            offer hope. To suffering people in a broken world, we share the news
            of the only One who can bring true peace—Jesus Christ, the Prince of
            Peace.
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

export default HistoryPage;
