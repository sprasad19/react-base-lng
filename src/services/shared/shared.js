import * as moment from "moment";
export const getBase64 = (file) => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};

export const k_Formatter = (num) => {
  if (isNaN(num)) return 0;
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const getLocalTime = (date) => {
  const localDate = moment(date).format("L, h:mm A");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};
export const getLocalTimeCus = (date) => {
  const localDate = moment(date).format("DD/MM/YYYY, h:mm A");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};

export const getLocalHoursSwipeIn = (date) => {
  const localHours = moment(date).format("h:mm A");
  if (localHours === "Invalid date" || !date) return "N/A";
  return localHours;
};

export const getDifference = (endDate, startDate) => {
  let end = moment(new Date(startDate).valueOf());
  let updatedAt = moment(new Date(endDate).valueOf());
  let diff = end.diff(updatedAt, "hour", false);
  if (diff > 8760) {
    diff = end.diff(updatedAt, "years", false);
    return diff > 1 ? diff + " years ago" : diff + " year ago";
  } else if (diff > 730) {
    diff = end.diff(updatedAt, "months", false);
    return diff > 1 ? diff + " months ago" : diff + " month ago";
  } else if (diff > 24) {
    diff = end.diff(updatedAt, "days", false);
    return diff > 1 ? diff + " days ago" : diff + " day ago";
  } else if (diff <= 0) {
    diff = end.diff(updatedAt, "minutes", false);
    return diff > 1 ? diff + " minutes ago" : diff + " minute ago";
  } else return diff > 1 ? diff + " hours ago" : diff + " hour ago";
};

export const getDateMonth = (date) => {
  const localDate = moment(date).format("DD MMM");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};

export const getDifferenceDayLeaves = (endDate, startDate) => {
  const start = moment(startDate).format();
  const endD = moment(endDate).format();
  let end = moment(endD);
  let updatedAt = moment(start);
  let diff = end.diff(updatedAt, "hour", false);
  let days = (diff / 24).toFixed(1); 
  let splitDays = days.split("."); 
  if (parseInt(splitDays[1]) > 6) {
    let day = parseInt(splitDays[0]) + 1; 
    if (isNaN(day)) return `0 days`;
    return `${day} days`;
  } else {
    let day = parseInt(splitDays[0]) + 0.5; 
    if (isNaN(day)) return `0 days`;
    return `${day} days`;
  }
};

export const getLocalDate = (date) => {
  const localDate = moment(date).format("DD MMM YYYY");
  // console.log(localDate);
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};

export const getCusLocalDate = (date) => {
  const localDate = moment(date).format("DD-MM-YYYY");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};

export const getCusLocalDateYear = (date) => {
  const localDate = moment(date).format("DD-MM-YYYY");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};
export const getCusAttendanceDate = (date) => {
  const localDate = moment(date).format("YYYY-MM-DD");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};
export const getCusTimesheetDate = (date) => {
  var date2 = date;
  date2 = date.split("-").reverse().join("-");
  return date2;
};
export const getLocalHours = (date) => {
  const localDate = moment(date).format("LT");
  if (localDate === "Invalid date" || !date) return "N/A";
  return localDate;
};


console.log(
  moment.utc("2021-04-16 05:32:01").local().format("LT")

);

export const utcTime = (utc) => {
  let utcTime = moment.utc(utc).local().format("LT");
  if (utcTime === "Invalid date" || !utc) return null;
  return utcTime;
};
export const utcTimeR = (utc) => {
  let utcTime = moment.utc(utc).local().format("LT");
  if (utcTime === "Invalid date" || !utc) return "N/A";
  return utcTime;
};

export const loopObject = (data) => {
  const r = {};
  if (!data) return {};
  for (const [key, value] of Object.entries(data)) {
    if (value) {
      r[key] = value;
    }
  }

  return r;
};

export const newTab = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
};
export const get_random = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

export function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}


export function truncate(str = '', n) {
  let strs = str.split(' ')
  let final = []
  if (strs.length > n) {
    for (let index = 0; index <= n; index++) {
      final.push(strs[index])
    }
    return final.join(' ') + '...'
  } else {
    return strs.join(' ')
  }
}

export function fileName(str = '') {
  let strs = str.split('/')
  return decodeURI(strs[strs.length - 1])
}
