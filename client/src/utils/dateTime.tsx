export const getDateTime = () => {
  const date = new Date()
  const day = date.getDate() // Ngày trong tháng (1-31)
  const month = date.getMonth() + 1 // Tháng (0-11), cần cộng thêm 1
  const year = date.getFullYear() // Năm (đầy đủ 4 chữ số)

  const hours = date.getHours() // Giờ (0-23)
  const minutes = date.getMinutes() // Phút (0-59)
  const seconds = date.getSeconds() // Giây (0-59)

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
}
