/* TODO: Refactor with DB call directly in meetup-list.tsx via Drizzle */

export async function getMeetups() {
  return await fetch('/fakeMeetups.json');
}
