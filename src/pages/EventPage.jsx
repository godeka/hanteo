import Ranking from "../components/ranking/Ranking";

const rankingList = [
  { id: 0, title: "Unexpected", artist: "THE BOYZ" },
  { id: 1, title: "Fe304 : FORWARD", artist: "NMIXX" },
  { id: 2, title: "ZERO : FEVER EPILOGUE", artist: "ATEEZ" },
  { id: 3, title: "Only One Story", artist: "The Wind" },
  { id: 4, title: "PLEASURE : 스페셜 미니앨범", artist: "TREASURE" },
  { id: 5, title: "S", artist: "STAYC" },
  { id: 6, title: "S", artist: "STAYC" },
  { id: 7, title: "S", artist: "STAYC" },
  { id: 8, title: "S", artist: "STAYC" },
];

export default function EventPage() {
  return <Ranking title="이주의 이벤트" rankingList={rankingList} />;
}
