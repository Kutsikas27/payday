//@ts-nocheck

const salary = document.getElementById("salary");
const output = document.getElementById("output");
const calculateDaysUntilPayday = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  let nextMonth = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  if (currentDay <= 9) {
    nextMonth = currentDate.getMonth();
  }
  if (nextMonth > 11) {
    nextMonth = 0;
    year += 1;
  }

  const nextMonthNinth = new Date(year, nextMonth, 9);
  const timeDifference = nextMonthNinth - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
salary.addEventListener("input", (event) => {
  output.innerHTML = `Palgapäevani on ${calculateDaysUntilPayday()} päeva, päevas saad kulutada ${(
    salary.value / calculateDaysUntilPayday()
  ).toFixed(2)} eurot.`;
  if (salary.value === "") {
    output.innerHTML = "";
  }
});
console.log(salary);
