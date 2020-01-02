import React, { Suspense, lazy } from "react";

import {
  lFamily,
  mFamily,
  sFamily,
  sLittlePrince,
  mLittlePrince,
  sHobbies,
  mHobbies,
  mKatrina,
  sKatrina,
  mSophia,
  sSophia,
  lJesus,
  mJesus,
  sJesus,
  mTemple,
  sTemple,
  lReunion,
  mReunion,
  sReunion,
  mDog,
  sDog,
  mChess,
  sChess,
  mProgramming,
  sProgramming,
  lSinging,
  mSinging,
  sSinging
} from "./Images/ImageHandler";

const Image = lazy(() => import("./Images/Image/Image"));
const Card = lazy(() => import("./Card/Card"));
const Title = lazy(() => import("./Title/Title"));
const Description = lazy(() => import("./Description/Description"));
const HobbyList = lazy(() => import("./HobbyList/HobbyList"));
const DigitList = lazy(() => import("./DigitList/DigitList"));

export default function Cards() {
  return (
    <Suspense fallback={<div></div>}>
      <Card className="SmallCard">
        <Image small={sHobbies} medium={mHobbies} alt="Hobbies" />
        <Title title="Priorities and hobbies:" />
        <HobbyList />
      </Card>
      <Card className="BigCard">
        <Image small={sFamily} medium={mFamily} large={lFamily} alt="Family" />
        <Title title="My wife and I with our daughters" />
        <Description>
          I am very blessed with a wonderful family! On this picture: my wife
          Elizabeth, our daughters Katrina and Sophia, and me.
        </Description>
      </Card>
      <Card className="SmallCard">
        <Image
          small={sLittlePrince}
          medium={mLittlePrince}
          alt="The Little Prince"
        />
        <Title title="Favorite quote" />
        <Description fontStyle="Italic">
          It is only with the heart that one can see rightly. What is essential
          in invisible to the eye.
        </Description>
      </Card>
      <Card className="SmallCard">
        <Image small={sKatrina} medium={mKatrina} alt="Katrina" />
        <Title title="Daughter Katrina" />
        <Description>
          She likes to play, make friends, and ride her scooter.
        </Description>
      </Card>
      <Card className="BigCard">
        <Image small={sJesus} medium={mJesus} large={lJesus} alt="Jesus" />
        <Title title="Favorite scripture:" />
        <Description>
          <DigitList></DigitList>
        </Description>
      </Card>
      <Card className="SmallCard">
        <Image small={sSophia} medium={mSophia} alt="Sophia" />
        <Title title="Daughter Sophia" />
        <Description>
          She likes to eat and is always making us laugh.
        </Description>
      </Card>
      <Card id="temple" className="SmallCard">
        <Image small={sTemple} medium={mTemple} alt="Temple" />
        <Title title="Temple" />
        <Description>
          The temple is very important in my life. It allows families to be
          together for eternity.
        </Description>
      </Card>
      <Card id="reunion" className="BigCard">
        <Image
          small={sReunion}
          medium={mReunion}
          large={lReunion}
          alt="Family Reunion"
        />
        <Title title="Family Reunion" />
        <Description>
          Families can make us truly happy! It's always fun to get together at
          family reunions like the one shown in this picture.
        </Description>
      </Card>
      <Card id="programming" className="SmallCard">
        <Image small={sProgramming} medium={mProgramming} alt="Programming" />
        <Title title="Programming" />
        <Description>
          Programming lets me combine two of my favorite things: math and
          problem-solving!
        </Description>
      </Card>
      <Card id="chess" className="SmallCard">
        <Image small={sChess} medium={mChess} alt="Chess" />
        <Title title="Chess" />
        <Description>
          Thinking is one of my favorite things to do in life. As a teenager, I
          held first rank in chess.
        </Description>
      </Card>
      <Card id="singing" className="BigCard">
        <Image
          small={sSinging}
          medium={mSinging}
          large={lSinging}
          alt="Singing"
        />
        <Title title="Singing" />
        <Description>
          Singing helps me maintain a good mood and always be optimistic. I sang
          in a choir for a few years.
        </Description>
      </Card>
      <Card id="dog" className="SmallCard">
        <Image id="Dog" small={sDog} medium={mDog} alt="Dog" />
        <Title title="More Facts" />
        <Description>
          I'm afraid of big dogs. My wife lives dogs though! (If on a computer,
          click the dog to see an effect. Double click to counsel it.)
        </Description>
      </Card>
    </Suspense>
  );
}
