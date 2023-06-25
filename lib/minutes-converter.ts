export default function toHours(totalMinutes: string): string {
   const convertedMin = Number(totalMinutes);

   const hours = Math.floor(convertedMin / 60);
   const minutes = convertedMin % 60;

   return `${hours}h${minutes > 0 ? `${minutes.toString().padStart(2, '0')}` : '00'}`;
}