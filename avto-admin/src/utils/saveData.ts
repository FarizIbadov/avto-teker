interface DataWithDateInput {
  token: string;
  expiresIn: number;
}

const saveData = (data: DataWithDateInput) => {
  const currentTime = new Date().getTime();
  const time = currentTime + data.expiresIn * 1000;
  const newDate = new Date(time);
  localStorage.setItem("token", data.token);
  localStorage.setItem("expiresIn", newDate.toISOString());
};

export default saveData;
