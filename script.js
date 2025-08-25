document.getElementById("marchzins-form");
document.addEventListener("submit", function (e) {
  e.preventDefault();

  const capital = parseFloat(document.getElementById("capital").value);
  const interestRate = parseFloat(document.getElementById("interest-rate").value);
  const birthdayStr = document.getElementById("birthday").value;
  const resultDiv = document.getElementById("result");

  const birthday = new Date(birthdayStr);
  const daysWithBonus = birthday.getDate();
  const bonusRate = interestRate + 1;
  const bonusInterest = capital * (bonusRate / 100) * (daysWithBonus / 360);

  resultDiv.innerHTML = `
            <strong>Marchzins-Bonus!</strong><br>
            Vom 1. bis ${birthday.getDate()}. ${birthday.toLocaleString(
    "de-CH",
    { month: "long" }
  )} erhalten Sie ${bonusRate}% Zins.<br>
            <br>
            <strong>Zins für diesen Zeitraum: ${bonusInterest.toFixed(
              2
            )} CHF</strong>
        `;
});
