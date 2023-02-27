export enum OpenStatus {
  OPEN,
  CLOSED,
  ISONG_ONLY,
}

const DAY_MILLIS = 24 * 60 * 60 * 1000

/** Returns Date which is set JST 0:00 of today */
export const getToday = () =>
  new Date(
    Math.floor((Date.now() - DAY_MILLIS * 9) / DAY_MILLIS) * DAY_MILLIS +
      DAY_MILLIS * 9
  )

export const isOpen = (d: Date) => {
  const day = d.getDay(),
    date = d.getDate(),
    month = d.getMonth() + 1

  const isOpenDay = 4 <= day && day <= 6
  const isInPeriod =
    1676678400000 <= d.getTime() && d.getTime() <= 1680912000000 // 2023/02/18 - 2023/04/08
  const isNotSpecialDate = !(month === 2 && date === 23) // Closed on 2/23

  if (d.getFullYear() === 2023 && isInPeriod) {
    if (isOpenDay && isNotSpecialDate) {
      return OpenStatus.OPEN
    } else {
      return OpenStatus.ISONG_ONLY
    }
  }

  return OpenStatus.CLOSED
}
