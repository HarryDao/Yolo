export const convertTime = (time) => {
  const ONE_HOUR = 60 * 60 * 1000;
  const ONE_DAY = ONE_HOUR * 24;
  const ONE_YEAR = ONE_DAY * 365;

  const past = Date.now() - new Date(time).getTime();

  if (past <= ONE_HOUR) {
    return `Just now`;
  }

  if (past <= ONE_DAY) {
    const hours = Math.floor(past / ONE_HOUR);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  if (past <= ONE_YEAR) {
    const days = Math.floor(past / ONE_DAY);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  const years = Math.floor(past / ONE_YEAR);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}

export const findPaginationRange = (pages, page) => {
  if (pages < 9) return Array(pages).fill(0).map((v, i) => i + 1);
  
  const arr = [];
  for (let i = page - 2; i <= page + 5; i++) {
    if (arr.length >= 4) break;
    if (i > 0 && i <= pages) {
      arr.push(i);
    }
  }

  const start = arr[0] - 1;
  const end = pages - arr[arr.length - 1];

  if (start > 1) {
    arr.unshift(start > 2 ? null : 2);
  }

  if (start > 0) {
    arr.unshift(1);
  }

  if (end > 1) {
    arr.push(end > 2 ? null: pages - 1);
  }

  if (end > 0) {
    arr.push(pages);
  }

  return arr;
}