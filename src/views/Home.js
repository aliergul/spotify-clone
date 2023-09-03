import Section from "components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Büyüklük Sende Kalsın",
      description: "2021 - Single",
      image: "https://i.scdn.co/image/ab67616d00001e02386f1120c4821107ee5b2acb",
      type: "single",
      src: "https://cdn.mp3kutu.com/mp3dosyalari/ZA==/YQ==/daha-iki-durak-var-buyukluk-sende-kalsin.mp3",
    },
    {
      id: 2,
      title: "Harekete Kimse Mani Olamaz",
      description: "2021 - EP",
      image: "https://i.scdn.co/image/ab67616d00001e0203cffc8bebe2431addd866c8",
      type: "album",
      src: "https://cdn.mp3kutu.com/mp3dosyalari/YQ==/ZA==/adamlar-yakti-gecti.mp3",
    },
    {
      id: 3,
      title: "Teslim Oldum",
      description: "1998 - Albüm",
      image: "https://i.scdn.co/image/ab67616d00001e027e2b43f612acb78d94bbe374",
      type: "album",
      src: "https://cdn.mp3kutu.com/mp3dosyalari/aA==/YQ==/harun-kolcak-teslim-oldum.mp3",
    },
    {
      id: 4,
      title: "Kenan Doğulu",
      description: "Artist",
      image: "https://i.scdn.co/image/ab67616100005174d51c563bb0a58ebd823ada0d",
      type: "artist",
      src: "https://cdn.mp3kutu.com/mp3dosyalari/aw==/ZQ==/kenan-dogulu-olmaz.mp3",
    },
    {
      id: 5,
      title: "Fesuphanallah",
      description: "1998 - Albüm",
      image: "https://i.scdn.co/image/ab67616d00001e022191d90adf8de553d38f8642",
      type: "album",
      src: "https://cdn.mp3kutu.com/mp3dosyalari/ZQ==/cg==/erkin-koray-fesuphanallah-2021-remastered.mp3",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Kaldığın yerden devam et" more="/" items={items} />
      <Section title="En sevdiğin sanatçılar" more="/" items={items} />
      <Section title="En iyileriyle 2000'ler" more="/" items={items} />
    </div>
  );
}

export default Home;
