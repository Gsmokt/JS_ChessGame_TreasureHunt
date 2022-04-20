export class Game {
  constructor(position) {
    this.position = position;
    this.status = false;
    this.gameStats;
  }
  checkIfCanReach() {
    if (this.position.positions.length === 0) return;
    this.position.positions.map((e) => {
      this.position.createdPawns.map((el) => {
        if (el.moves.includes(e)) {
          const brokenPawn = this.position.createdPawns.find(
            (pawn) => pawn.position === e
          );
          this.gameStats = `\n${el.name}/${el.position} takes ${brokenPawn.name}/${brokenPawn.position}`;
          this.status = true;
        }
      });
    });
  }
  start() {
    this.checkIfCanReach();
    if (this.status) return this.gameStats;
    this.position.randomSpot();
    return this.start();
  }
}
