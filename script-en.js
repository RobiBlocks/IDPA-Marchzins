document.getElementById("marchzins-form").addEventListener("submit", function (e) {
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
            <div class="calculation-steps">
                <h3>Step-by-Step Calculation:</h3>
                <div class="step">
                    <strong>1. Input Values:</strong><br>
                    Initial Capital: ${capital.toLocaleString('en-US')} CHF<br>
                    Interest Rate: ${interestRate}%<br>
                    Birthday: ${birthday.getDate()}. ${birthday.toLocaleString("en-US", { month: "long" })}
                </div>
                <div class="step">
                    <strong>2. March Interest Period:</strong><br>
                    From 1st to ${birthday.getDate()}. ${birthday.toLocaleString("en-US", { month: "long" })} = ${daysWithBonus} days
                </div>
                <div class="step">
                    <strong>3. Bonus Interest Rate:</strong><br>
                    ${interestRate}% + 1% = ${bonusRate}%
                </div>
                <div class="step">
                    <strong>4. Calculation:</strong><br>
                    ${capital.toLocaleString('en-US')} CHF × ${bonusRate}% × (${daysWithBonus} days ÷ 360 days) = ${bonusInterest.toFixed(2)} CHF
                </div>
                <div class="step" style="background-color: #e8f5e8; border-left-color: #28a745;">
                    <strong>Result:</strong><br>
                    <strong>March Interest Bonus: ${bonusInterest.toFixed(2)} CHF</strong>
                </div>
            </div>
        `;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("marchzins-form").reset();
    document.getElementById("result").innerHTML = "";
});
