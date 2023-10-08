/* TODO: Refactor with DB call */

export async function getMeetups() {
  return await fetch('/fakeMeetups.json');
}
