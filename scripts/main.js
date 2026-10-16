const drawButton = document.querySelector("#draw-button");
const rosterStatus = document.querySelector("#roster-status");
let participants = [];

async function loadParticipants() {
  try {
    const response = await fetch("participants.csv", { cache: "no-store" });
    if (!response.ok) throw new Error("无法读取名单");
    const lines = (await response.text()).replace(/^\uFEFF/, "").trim().split(/\r?\n/);
    if (lines.shift() !== "抽奖编号,选手姓名,报名项目,队伍编号") {
      throw new Error("名单表头不正确");
    }
    // This roster uses four plain CSV fields without embedded commas or quotes.
    participants = lines.map((line) => {
      const fields = line.split(",").map((field) => field.trim());
      if (fields.length !== 4 || fields.some((field) => !field || field.includes('"'))) {
        throw new Error("名单内容不正确");
      }
      const [id, name, event, team] = fields;
      return { id, name, event, team };
    });
    if (!participants.length || new Set(participants.map((person) => person.id)).size !== participants.length) {
      throw new Error("名单为空或抽奖编号重复");
    }
    rosterStatus.textContent = `${participants.length} 位选手已就位`;
    drawButton.disabled = false;
  } catch (error) {
    rosterStatus.textContent = "名单加载失败，请通过本地 HTTP 服务打开页面，并检查 participants.csv 后刷新。";
    console.error(error);
  }
}

function randomIndex(length) {
  // Reject the uneven tail so every participant has exactly the same probability.
  const limit = Math.floor(2 ** 32 / length) * length;
  const value = new Uint32Array(1);
  do {
    crypto.getRandomValues(value);
  } while (value[0] >= limit);
  return value[0] % length;
}

drawButton.addEventListener("click", () => {
  if (!participants.length) return;
  const winner = participants[randomIndex(participants.length)];
  document.querySelector("#winner-number").textContent = `NO. ${winner.id}`;
  document.querySelector("#winner-name").textContent = winner.name;
  document.querySelector("#winner-details").textContent = `${winner.event} · ${winner.team}`;
  drawButton.innerHTML = '再抽一位 <span aria-hidden="true">↗</span>';
});

loadParticipants();
