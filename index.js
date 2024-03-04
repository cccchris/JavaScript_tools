import dayjs from 'dayjs';

// 检查是否为有效邮箱地址
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 检查是否为有效手机号码
export function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

// 获取数组中的最大值
export function getMaxValue(arr) {
  return Math.max(...arr);
}

// 获取数组中的最小值
export function getMinValue(arr) {
  return Math.min(...arr);
}

// 将字符串转换为驼峰命名
export function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
}


// 日期检测 检测当前日期是否在 date 之后
export function isAfter(currentTime, compareTime) {
  // 使用 Day.js 解析时间
  const current = dayjs(currentTime);
  const compare = dayjs(compareTime);
  
  // 判断当前时间是否在比较时间之后
  return current.isAfter(compare);
}