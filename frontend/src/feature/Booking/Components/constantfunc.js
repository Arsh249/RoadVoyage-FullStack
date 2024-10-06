const months = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nav",
  "Dec",
];

export const formatDate = (epoch) => {
  const date = new Date(epoch);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatTime = (epoch) => {
  const date = new Date(epoch);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};
