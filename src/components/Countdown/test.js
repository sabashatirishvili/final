let now = new Date();
  let twoDaysFromNow = +now + 172800000;
  let difference = +twoDaysFromNow - +now;
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / 1000 / 60) % 60);
  const s = Math.floor((difference / 1000) % 60);