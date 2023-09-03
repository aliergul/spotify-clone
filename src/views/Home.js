import Section from "components/Section";
import songs from "../data/songs";
function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Kaldığın yerden devam et" more="/" items={songs} />
      <Section title="En sevdiğin sanatçılar" more="/" items={songs} />
      <Section title="En iyileriyle 2000'ler" more="/" items={songs} />
    </div>
  );
}

export default Home;
