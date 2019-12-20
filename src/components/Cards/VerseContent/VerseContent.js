import React from "react";
import "./VerseContent.css";

export default function Span(props) {
  console.log(props.spanClass);
  return (
    <span
      className={props.spanClass}
      onClick={props.click}
      onDoubleClick={props.doubleClick}
    >
      "And now, my sons, remember, remember that it is upon the rock of our
      Redeemer, who is Christ, the Son of God, that ye must build your
      foundation; that when the devil shall send forth his mighty winds, yea,
      his shafts in the whirlwind, yea, when all his hail and his mighty storm
      shall beat upon you, it shall have no power over you to drag you down to
      the gulf of misery and endless wo, because of the rock upon which ye are
      built, which is a sure foundation, a foundation whereon if men build they
      cannot fall."
    </span>
  );
}
